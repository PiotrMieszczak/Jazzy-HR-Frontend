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
}

module.exports = GnomeList;