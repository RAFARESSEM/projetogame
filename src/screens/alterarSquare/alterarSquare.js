import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";





export default class alterarSquare extends React.Component{

    state={
        id: 0,
        name :'',
        piece:''
    }

    update=async () =>{
        await axios.put(`http://localhost:8080/api/square/${this.state.id}`, 
        {
            name:this.state.name,
        }).then(response=>
            {
                console.log(response);
            }).catch(error=>{
                console.log(error.response);
            })
            console.log('request finished');
        }

    cancel =() => {
        this.props.history.push('/Home');
    }

    render() {
        return (
            <div className='container'>       
                    <Card title='atualizar de square'>
                    <div className='row'>
                       <div className='col-lg-12'>
                          <div className='bs-component'>
                          <FormGroup label="name: " htmlFor="inputname"> 
                                        <input type="text"
                                            id="inputName"
                                            className="form-control"
                                            name="name"
                                            value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                             </FormGroup>
                    
                    <label class="col-form-label mt-4"
                            htmlFor="inputId">id</label>
                        <input type="text" class="form-control"
                            placeholder="Digite o id" id="inputId"
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })} />
                    <br />
                    <br />
                    <button onClick={this.update} type="button" className="btn btn-success">
                        <i className="pi pi-save"></i> Atualizar
                    </button>
                    <button onClick={this.cancel} type="button" className="btn btn-danger">
                        <i className="pi pi-times"></i> Cancelar

                    </button>
                    <br />
                  
                       
                        
                    </div>
                
            </div>
           
            </div>
            </Card>
            </div>
        )
    }

}
