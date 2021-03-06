import React from "react";

class Header extends React.Component{
    render(){
        return  <header>
                    <div className="container">
                        <nav className="navbar clearfix">
                            <div className="navbar_div navbar_div--left">
                                <img className="navbar_div--left_logo" src="src/assets/logo.png" alt="logo_pic"/>
                                <div className="navbar_div--left_monsterTypeWrapper">
                                    <div className="navbar_div--left_monsterType">gnomes</div>
                                    <div className="navbar_div--left_monsterType">trolls</div>
                                </div>
                            </div>
                            <div className="navbar_div navbar_div--right">
                                <div className="button navbar_div--right_button">create monster</div>
                                <div className="navbar_div--right_avatarWrapper">
                                    <img className="navbar_div--right_Img" src="src/assets/avatar.png" alt="avatar_pic"/>
                                    <div className="navbar_div--right_Info"><strong>robert łabuś</strong><br/>game master</div>
                                </div>
                            </div>
                        </nav>
                    </div> 
            </header>
    }
}

module.exports = Header;