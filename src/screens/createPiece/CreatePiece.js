import React from "react";
import './CreatePiece.css';
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import axios from 'axios';

export default class CreatePiece extends React.Component{

    state={
        clas:''
    }

    create= async()=>{
        await axios.post('http://localhost:8080/api/piece',
       {
           clas:this.state.clas
        }
        ).then(response=>
            {
                console.log(response);
            }
            ).catch(error =>
                {
                    console.log(error.response);
                }
                );
                console.log('request finished');
        }
        cancel=()=>{
            this.props.history.push('/patchnote');
        }

        render(){
            return(
                <div className='container'>
                    <Card title="Cadastro de Peca">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                    <FormGroup label="clas: *" htmlFor="inputclas"> 
                                        <input type="text"
                                            className="form-control"
                                            id="inputClas"
                                            area-aria-describedby='clasHelp' placeholder='digite a clas'
                                            value={this.state.clas} onChange={(e) => this.setState({clas: e.target.value})}/>
                                    </FormGroup>
                                    </fieldset>
                                    <button onClick={this.create} type="button" className="btn btn-success">
                                        <i className="pi pi-save"></i> Salvar
                                    </button>
                                    <button onClick={this.cancel} type="button" className="btn btn-danger">
                                        <i className="pi pi-times"></i> Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )
        }
}