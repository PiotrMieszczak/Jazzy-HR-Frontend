import React from "react";

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
                console.log(response);
                    this.setState({
                        response,
                        limit,
                    })

            }).catch( err => {
                console.log("Błąd", err);
            })
        }
    componentDidMount(){
        this.loadData(this.state.limit);
    }

    render(){
            console.log(this.state.response);

            // let gnomes = [...this.state.response].map( gnome =>{
            //     return <Gnome
            //     key={gnome.id} 
            //     gnome={gnome}/>
            // })
            // if(this.state.displayForm){
            //     return <EditGnome gn={this.state.gnome}/>
            // }
            return <section> 
                    <ul>
                        {/*{gnomes}*/}
                    </ul>
                    {/*<LoadMore more={this.handleLoadMoreGnomes}/>*/}
               </section>        
        }

    
}

module.exports = GnomeList;