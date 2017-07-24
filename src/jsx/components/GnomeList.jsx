import React from "react";
import Gnome from "./Gnome.jsx";
import LoadMore from "./LoadMore.jsx";
class GnomeList extends React.Component{
        constructor(props){
            super(props);
            this.state={
                response: [], //keeps response from API
                displayForm: false, 
                editedGnome: {}, 
                limit: 100, //initial limit for fetched data
                loaded: false, //if false display Spinner
            }
        } 

    loadData(limit){

            const url = "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json"
            fetch(url+`&limit=${limit}&offset=0`)
            .then(response => {
                    if(response.ok) { 
                        return response.json()
                    } else {
                        throw new Error("error");
                    }
            }).then( response => {
                    this.setState({
                        response,
                        limit,
                    })

            }).catch( err => {
                console.log("Błąd", err);
            })
        }
    
    componentDidMount(){
        this.loadData(this.state.limit); //load first 100 gnomes when component did mount
    }

    handleEditGnome = (gnome)=>{
        this.setState({
            displayForm: true,
            editedGnom: gnome,
        })
    }

    handleLoadMoreGnomes = ()=>{
        let nextGnomes = this.state.limit;
        nextGnomes += 100; 
        this.loadData(nextGnomes); //get 200/300/400 gnomes on button click
    }

    render(){
            let gnomes = [...this.state.response].map( gnome =>{
                return <Gnome
                editGnome={this.handleEditGnome}
                key={gnome.id} 
                gnome={gnome}/>
            })

            // if(this.state.displayForm){
            //     return <EditGnome gn={this.state.gnome}/>
            // }
            return <section> 
                    <ul className="gnomeList">
                        {gnomes}
                    </ul>
                    <LoadMore moreGnomes={this.handleLoadMoreGnomes}/>
               </section>        
        }

    
}

module.exports = GnomeList;