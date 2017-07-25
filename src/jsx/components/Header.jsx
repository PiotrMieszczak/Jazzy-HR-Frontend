import React from "react";

class Header extends React.Component{
    render(){
        return  <header>
                    <div className="container">
                        <nav className="navbar">
                            <div className="navbar_leftDiv">
                                <img className="navbar_leftDiv_logo" src="src/assets/logo.png" alt="logo_pic"/>
                                <div className="navbar_leftDiv_monsterTypeWrapper">
                                    <div className="navbar_leftDiv_monsterType">gnomes</div>
                                    <div className="navbar_leftDiv_monsterType">trolls</div>
                                </div>
                            </div>
                            <div className="navbar_rightDiv">
                                <div className="navbar_rightDiv_button">create monster</div>
                                <div className="navbar_rightDiv_avatarWrapper">
                                    <img className="navbar_rightDiv_Img" src="src/assets/avatar.png" alt="avatar_pic"/>
                                    <div className="navbar_rightDiv_Info">robert łabuś<br/>game master</div>
                                </div>
                            </div>
                        </nav>
                    </div> 
            </header>
    }
}

module.exports = Header;