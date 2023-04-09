import React from "react";
import './CreateSquare.css';
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";

export default class Login extends React.Component{

    state={
        name:'',
        piece: ''
    }

    login=() =>{
        console.log('name: ', this.state.name);
        console.log('piece: ', this.state.piece);
        this.props.history.push('/home')
    }

    createPiece=()=>{
        this.props.history.push('/createPiece');
    }

    render(){
        return(
            <div className='container'>
            <div className='row'>
              <div className='col-md-6' style={this.styles.colMd6}>
                 <div className='bs-docs-section'>
                    <Card title='criar square'>
                    <div className='row'>
                       <div className='col-lg-12'>
                          <div className='bs-component'>
                          <fieldset>
                            <FormGroup label='name: *'>
                             <input type='name' className='from-control' id='inputName'
                             area-aria-describedby='NameHelp' placeholder='digite o nome'
                             value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                             </FormGroup>
                             <br/>
                             <FormGroup label='piece: *'>
                             <input type='piece' className='from-control' id='inputPiece'
                             placeholder='digite a piece'
                             value={this.state.piece} onChange={(e)=> this.setState({piece: e.target.value})} />
                              </FormGroup>
                              <br/>
                            <button className='btn btn-success' onClick={this.login}>Entrar</button>
                            <button className='btn btn-danger' onClick={this.createPiece}>Cadastrar</button>
                               </fieldset>
                          </div>
                         </div>
                     </div>
            </Card>
         </div>      
        </div>
    </div>
</div>
        )
        }

        styles={
            colMd6 :{
                position: 'relative',
                left: '300px'
            }
        };

}