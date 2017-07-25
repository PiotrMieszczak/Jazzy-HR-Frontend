import React from "react";

class Gnome extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        healthBarWidth: '',
                }
        }
    handleEditGnome=(gnome)=>{
        if(typeof this.props.editGnome ==='function'){
                this.props.editGnome(gnome) //pass to GnomeList gnome to edit
            }
    }

    componentDidMount(){
        let barWidth = Math.floor(Math.random() * 90 + 10)+'%' ;
        this.setState({
                healthBarWidth: barWidth,
        })
    }

        
    render(){ 
            console.log('state', this.state.healthBarWidth)
            return <li key={this.props.gnome.id}
                    onClick={e=>this.handleEditGnome(this.props.gnome)}
                    className="gnomeList_gnome">
                        <div
                        className="gnomeList_gnome_logo"></div>
                        <div
                        className="gnomeList_gnome_name">{this.props.gnome.name}</div>
                        <div
                        className="gnomeList_gnome_age">{this.props.gnome.age}</div>
                        <div className="gnomeList_gnome_healthBarWrapper">
                                <div className="gnomeList_gnome_healthBar"
                                style={{width: this.state.healthBarWidth}}></div>
                        </div>
                        <div 
                        className="gnomeList_gnome_strenght">{this.props.gnome.strenght}{'/100'}
                        <span className="gnomeList_gnome_strenght_innerText">strength</span>
                        </div>
                </li>
        }

}

module.exports = Gnome;