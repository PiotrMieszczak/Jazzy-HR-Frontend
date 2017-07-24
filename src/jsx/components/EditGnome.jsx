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

    handleChangeName=(e)=>{
        this.setState({
            newName: e.target.value,
        })
    }
    handleChangeAge=(e)=>{
        this.setState({
            newAge: e.target.value,
        })
    }
    handleChangeStr=(e)=>{
        this.setState({
            newStr: e.target.value,
        })
    }

    closeForm =()=>{
        if(typeof this.props.closeForm ==='function'){
            this.props.closeForm();
        }
    }
    handleUploadData=(e)=>{
        e.preventDefault();
        const url = "http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes"
        let data = {
            name: this.state.newName,
            age: this.state.newAge,
            strenght: this.state.newStrenght,
        }
        fetch(url+`/${this.props.gn.id}`,
            {method: 'PATCH',
            body: JSON.stringify(data)
        }).then(response => {
                    if(response.ok) { 
                        return response.json()
                    } else {
                        throw new Error("error");
                    }
        }).then(  d=> {  
            console.log('Request succeeded with JSON response', d);
            this.closeForm();   //close form, after uploading data
        })  
        .catch(error=> {  
            console.log('Request failed', error);  
        });

        
    }

    render(){

        return <form>
            <label key={'gnomeNameLabel'} htmlFor="name"><span>Name: {this.props.gn.name}</span><br/>New name:</label>
            <input 
            onChange={this.handleChangeName}
            value={this.state.newName}
            key={'gnomeName'} type="text" name="name"/><br/>
            
            <label key={'gnomeAgeLabel'} htmlFor="age">
            <span>Age: {this.props.gn.age}</span><br/>
            New age:</label>
            <input 
            value={this.state.newAge}
            onChange={this.handleChangeAge}
            key={'gnomeAge'} type="text" name="age"/><br/>
            <label key={'gnomeStrLabel'} htmlFor="str">
            <span>Strenght: {this.props.gn.strenght}</span><br/>
            New strenght:</label>
            <input 
            value={this.state.newStr}
            onChange={this.handleChangeStr}
            key={'gnomeStr'} type="text" name="str"/><br/>
            
            <input 
            onClick={this.handleUploadData}
            type="submit" value="SAVE"/>
        </form>    
    }

}

module.exports = EditGnome;