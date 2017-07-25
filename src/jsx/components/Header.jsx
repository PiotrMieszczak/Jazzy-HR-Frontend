import React from "react";

class Header extends React.Component{
    render(){
        return  <header>
                    <div className="container">
                        <nav className="navbar">
                        <div className="navbar_logo">logo</div>    
                        <div className="navbar_monsterType">
                            <div className="navbar_monsterType_innerText">gnomes</div>
                            <div className="navbar_monsterType_innerText">trolls</div>
                        </div>       
                        <div className="header_buttonWrapper">
                            <button className="button button--createMonster">create monster</button>
                        </div>    
                        <div className="header_avatar"></div>
                    </nav>
                </div> 
            </header>
    }
}

module.exports = Header;