import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
// import GnomeList from "components/GnomeList.jsx";

document.addEventListener("DOMContentLoaded", function(){
 
    class App extends React.Component{
        render(){ 
            return <div>    
                   <Header />
                   {/*<GnomeList />*/}
                </div>                   
        }           

    }

    ReactDOM.render(
    <App />, document.querySelector("#app")
    )

});