import React from "react";
import './CreateSquare.css';
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import axios from 'axios';

export default class CreateSquare extends React.Component{

    state={
        name:'',
        piece: ''
    }
    create=async() =>{
        await axios.post('http://localhost:8080/api/square',
        {
            name: this.state.name,
            //piece: this.state.piece
        }
        ).then(response=>
            {
            console.log(response);
            }
        ).catch( error=>
            {
            console.log(error.response);
            }
        );
        console.log('request finished');
    }

    createPiece=()=>{
        this.props.history.push('/createPiece');
    }

    render(){
        return(
            <div className='container'>       
                    <Card title='Cadastro de square'>
                    <div className='row'>
                       <div className='col-lg-12'>
                          <div className='bs-component'>
                          <FormGroup label="name: *" htmlFor="inputname"> 
                                        <input type="text"
                                            id="inputName"
                                            className="form-control"
                                            name="name"
                                            value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                             </FormGroup>
                             <br/>
                             <FormGroup label="piece *" htmlFor="inputpiece"> 
                                        <input type="text"
                                            id="inputPiece"
                                            className="form-control"
                                            piece="piece"
                                        value={this.state.piece} onChange={(e)=> this.setState({piece: e.target.value})} />
        
                              </FormGroup>
                              <br/>
                              <button onClick={this.create} type="button" className="btn btn-success">
                                        <i className="pi pi-save"></i> criarsquare
                                    </button>
                                    <button onClick={this.createPiece} type="button" className="btn btn-danger">
                                        <i className="pi pi-times"></i> criarpeca
                                    </button>
                           
                          </div>
                         </div>
                     </div>
            </Card>
   
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