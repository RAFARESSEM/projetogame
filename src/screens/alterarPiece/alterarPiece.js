import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";


export default class alterarPiece extends React.Component{

    state={
        id: 0,
        clas :""
    }

    update= async() =>{
        await axios.put(`http://localhost:8080/api/Piece/${this.state.id}`, 
        {
            clas:this.state.clas
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
                    <Card title='atualizar peca'>
                    <div className='row'>
                       <div className='col-lg-12'>
                          <div className='bs-component'>
                          <FormGroup label="clas: " htmlFor="inputclas"> 
                                        <input type="text"
                                            id="inputClas"
                                            className="form-control"
                                            name="clas"
                                            value={this.state.clas} onChange={(e)=> this.setState({clas: e.target.value})} />
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
