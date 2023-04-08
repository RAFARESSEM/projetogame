import React from "react";

export default class FormGroup extends React.Component{

    render(){
        return(
            <div className='Form-Group'>
                <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
                {this.props.children}
            </div>
        )
    }
}