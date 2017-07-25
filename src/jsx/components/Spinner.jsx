import React from 'react';



class Spinner extends React.Component{
    render(){
        return <section className="spinner">
                <div className="spinner_mainSpinner">
                            <div className="spinner_mainSpinner_dot1"></div>
                            <div className="spinner_mainSpinner_dot2"></div>
                 </div>
            </section>
    }

}

module.exports = Spinner;