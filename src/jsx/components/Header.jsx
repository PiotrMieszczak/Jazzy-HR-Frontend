import React from "react";

class Header extends React.Component{
    render(){
        return  <header>
                    <div className="container">
                        <nav>
                        <ul className="navbar">
                            <li className="navbar_logo">logo</li>    
                            <li className="navbar_monsterType">
                                <div className="navbar_monsterType_innerText">gnomes</div>
                                <div className="navbar_monsterType_innerText">trolls</div>
                            </li>       
                            <li className="header_buttonWrapper">
                                <div className="button button--createMonster">create monster</div>
                            </li>    
                            <li className="header_avatar"></li>
                        </ul>
                    </nav>
                </div> 
            </header>
    }
}

module.exports = Header;