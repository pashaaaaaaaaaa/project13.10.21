import React from "react";


class Button extends React.Component{
  
    

    render(){
        return(
            <div className="btns">
                <button onClick={this.props.clickBtn}>{this.props.text}</button>
            </div>    
        )
    }
}
export default Button
