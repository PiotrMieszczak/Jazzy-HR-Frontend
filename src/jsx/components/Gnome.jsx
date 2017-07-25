import React from "react";

class Gnome extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        healthBarWidth: '',
                        secondHealthBarWidth: '',
                        nameColor: 'black',
                }
        }
    handleEditGnome=(gnome)=>{
        if(typeof this.props.editGnome ==='function'){
                this.props.editGnome(gnome) //pass to GnomeList gnome to edit
            }
    }

    componentDidMount(){
        let barWidth = Math.floor(Math.random() * 90 + 10)+'%' ;
        let secondBarWidth = Math.floor(Math.random() * 90 + 10)+'%';

        this.setState({
                healthBarWidth: barWidth,
                secondHealthBarWidth: secondBarWidth,
        })
    }

    handleMouseEnter=()=>{
            this.setState({
                   nameColor:  '#AF0075',
            })
    }

    handleMouseLeave=()=>{
            this.setState({
                   nameColor:  'black',
            })
    }
    render(){ 
            return <li key={this.props.gnome.id}
                    onClick={e=>this.handleEditGnome(this.props.gnome)}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    className="gnomeList_gnome clearfix">
                        <div className="gnomeList_gnome_div gnomeList_gnome_div--left">
                                <img className="gnomeList_gnome_div_logo" src="src/assets/gnome_logo.png" alt="gnome_logo"/>
                                <div
                                className="gnomeList_gnome_info">
                                        <p style={{color: this.state.nameColor}}
                                        className="boldText">{this.props.gnome.name}</p>
                                        <p>Age:{" "}{this.props.gnome.age}</p>
                                </div>
                        </div>

                        <div className="gnomeList_gnome_div gnomeList_gnome_div--right">
                                <div className="gnomeList_gnome_healthBarWrapper">
                                        <div className="gnomeList_gnome_healthBar"
                                        style={{width: this.state.healthBarWidth}}></div>
                                        <div className="gnomeList_gnome_healthBar_secondary"
                                                style={{width: this.state.secondHealthBarWidth}}></div>
                                </div>
                                <div 
                                className="gnomeList_gnome_strenght">{this.props.gnome.strenght}{'/100'}
                                <span className="boldText gnomeList_gnome_strenght_boldText">Strength</span>
                                </div>
                        </div>
                </li>
        }

}

module.exports = Gnome;