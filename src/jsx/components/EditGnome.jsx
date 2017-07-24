import React from "react";

class EditGnome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newName: '',
            newAge: '',
            newStr: '',
        }
    }

    render(){
        return <form>
            <label key={'gnomeNameLabel'} htmlFor="name">Gnome name:</label>
            <input 
            value={this.state.newName}
            defaultValue={this.props.gn.name}
            key={'gnomeName'} type="text" name="name"/>
            <label key={'gnomeAgeLabel'} htmlFor="age">Gnome name:</label>
            <input 
            defaultValue={this.props.gn.age}
            key={'gnomeAge'} type="text" name="age"/>
            <label key={'gnomeStrLabel'} htmlFor="str">Strenght:</label>
            <input 
            defaultValue={this.props.gn.strenght}
            key={'gnomeStr'} type="text" name="str"/>
            <input 
            type="submit" value="SAVE"/>
        </form>    
    }

}

module.exports = EditGnome;