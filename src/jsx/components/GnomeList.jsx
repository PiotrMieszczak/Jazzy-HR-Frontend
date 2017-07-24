import React from "react";

class GnomeList extends React.Component{
        constructor(props){
            super(props);
            this.state={
                response: [], //keeps response from API
                displayForm: false, 
                editedGnome: {}, 
                limit: 500, //initial limit for fetched data
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

    
}

module.exports = GnomeList;