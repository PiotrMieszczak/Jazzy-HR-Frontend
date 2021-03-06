import React from "react";


class LoadMore extends React.Component{
    handleLoadMore=()=>{
        if(typeof this.props.moreGnomes ==='function'){
                this.props.moreGnomes() //run getData fn with diffrent limit
            }
    }
    render(){
            return <button 
                    className="button loadMore"
                    onClick={this.handleLoadMore}>Load More</button>
        }
}


module.exports = LoadMore;
