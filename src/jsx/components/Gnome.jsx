import React from "react";

class Gnome extends React.Component{
    render(){
            return <li key={this.props.gnome.id}
                    className="gnomeList_gnome">
                    <div
                    className="gnomeList_gnome_logo"></div>
                    <div
                    className="gnomeList_gnome_name">{this.props.gnome.name}</div>
                    <div
                    className="gnomeList_gnome_age">{this.props.gnome.age}</div>

                    <div 
                    className="gnomeList_gnome_strenght">{this.props.gnome.strenght}+{'/100'}
                    <span className="gnomeList_gnome_strenght_innerText">strength</span>
                    </div>
                </li>
        }

}

module.exports = Gnome;