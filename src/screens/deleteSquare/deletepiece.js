import React from "react";
import Card from "../../components/Card";
import axios from 'axios';

export default class deletepiece extends React.Component{

    state={
        id:0,
    }

    delete= async()=>{
        await axios.delete(`http://localhost:8080/api/piece/${this.state.id}`, 
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
                    <Card title='deletar piece'>
                    <div className='row'>
                       <div className='col-lg-12'>
                          <div className='bs-component'>
                    <label class="col-form-label mt-4"
                            htmlFor="inputId">id</label>
                        <input type="text" class="form-control"
                            placeholder="Digite o id" id="inputId"
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })} />
                    <br />
                                    <button onClick={this.delete} type="button" className="btn btn-success">
                                        <i className="pi pi-save"></i> deletar
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