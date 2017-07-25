import React from 'react';



class Spinner extends React.Component{
    render(){
        return <div className="spinner">
                        <div className="spinner_dot1"></div>
                        <div className="spinner_dot2"></div>
                </div>
    }

}

module.exports = Spinner;