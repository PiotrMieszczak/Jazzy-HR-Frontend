import React from "react";
import Gnome from "./Gnome.jsx";
import LoadMore from "./LoadMore.jsx";
import EditGnome from "./EditGnome.jsx";

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

            const url = "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?"
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

            }).catch( error=> {  
                console.log('Request failed', error);  
            });
        }
    
    componentDidMount(){
        this.loadData(this.state.limit); //load first 100 gnomes when component did mount
    }

    handleEditGnome = (gnome)=>{
        this.setState({
            displayForm: true,
            editedGnome: gnome,
        })

    }
    handleCloseForm = ()=>{
        this.setState({
            displayForm: false,
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

            if(this.state.displayForm){
                return <EditGnome
                        closeForm={this.handleCloseForm}
                        gn={this.state.editedGnome}/>
            }
            return <section>
                    <div className="container">
                        <h1 className="section_header">gnomes</h1>
                        <ul className="gnomeList">
                            {gnomes}
                        </ul>
                        <LoadMore moreGnomes={this.handleLoadMoreGnomes}/>
                    </div>
               </section>        
        }

    
}

module.exports = GnomeList;