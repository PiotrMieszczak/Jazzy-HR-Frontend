import React from "react";

class EditGnome extends React.Component{

    render(){
        return <form>
            <label key={'gnomeNameLabel'} htmlFor="name">Gnome name:</label>
            <input 
            key={'gnomeName'} type="text" name="name"/>
            <label key={'gnomeAgeLabel'} htmlFor="age">Gnome name:</label>
            <input 
            key={'gnomeAge'} type="text" name="age"/>
            <label key={'gnomeStrLabel'} htmlFor="str">Strenght:</label>
            <input 
            key={'gnomeStr'} type="text" name="str"/>
            <input 
            type="submit" value="SAVE"/>
        </form>    
    }

}

module.exports = EditGnome;