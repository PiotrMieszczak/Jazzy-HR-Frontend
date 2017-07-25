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

            return <li key={this.props.gnome.id}
                    onClick={e=>this.handleEditGnome(this.props.gnome)}
                    className="gnomeList_gnome">
                        <div className="gnomeList_div--left">
                                <div
                                className="gnomeList_gnome_logo"></div>
                                <div
                                className="gnomeList_gnome_name&age">
                                        <p className="boldText">{this.props.gnome.name}</p>
                                        <p>Age:{" "}{this.props.gnome.age}</p>
                                </div>
                        </div>

                        <div className="gnomeList_div--right">
                                <div className="gnomeList_gnome_healthBarWrapper">
                                        <div className="gnomeList_gnome_healthBar"
                                        style={{width: this.state.healthBarWidth}}></div>
                                </div>
                                <div 
                                className="gnomeList_gnome_strenght">{this.props.gnome.strenght}{'/100'}
                                <span className="boldText">strength</span>
                                </div>
                        </div>
                </li>
        }

}

module.exports = Gnome;