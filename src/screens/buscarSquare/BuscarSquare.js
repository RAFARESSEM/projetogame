import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import SquareTable from "../../components/SquareTable";
import axios from 'axios';

export default class BuscarSquare extends React.Component{

    state={
        name:'',
        id: '',
        squares : []
    }

    delete=(squareId)=>{
         axios.delete(`http://localhost:8080/api/square/${squareId}` 
         ).then(response=>
            {
                this.find();
            }).catch(error=>
                {
                    console.log(error.response);
                })
            }

    

    edit=(squareId)=>{
        this.props.history.push(`/alterarSquare/${squareId}`);
    }

    find=()=>{
        var params = '?';

        if(this.state.id != ''){
            if(params != '?'){
                params= `${params}&`;
            }
            params=`${params}id=${this.state.id}`;
        }
        if(this.state.name != ''){
            if(params != '?'){
                params= `${params}&`;
            }
            params=`${params}name=${this.state.name}`;
        }

        axios.get(`http://localhost:8080/api/square${params}`)
        .then(response =>
            {
                const squares=response.data;
                this.setState({squares});
                console.log(squares)
            }).catch(error=>
                {
                    console.log(error.response);
                });
    }

    render(){
        return(
            <div className='container'>       
                    <Card title='consultar square'>
                    <div className='row'>
                       <div className='col-md-6'>
                          <div className='bs-component'>
                          <FormGroup label="Id:" htmlFor="inputId"> 
                                        <input type="text"
                                            id="inputId"
                                            className="form-control"
                                        value={this.state.id} onChange={(e)=> this.setState({id: e.target.value})} />
                              </FormGroup>
                          <FormGroup label="name:" htmlFor="inputName"> 
                                        <input type="text"
                                            id="inputName"
                                            className="form-control"
                                            value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} />
                             </FormGroup>
                             <br/>
                             
                              <br/>
                              <button onClick={this.find} type="button" className="btn btn-success">
                                        <i className="pi pi-save"></i> Buscar
                                    </button>
                           
                          </div>
                         </div>
                     </div>

                     <div className="row">
                        <div className="col-md-12">
                            <div className="bs-component">
                                <SquareTable squares={this.state.squares}
                                delete={this.delete}
                                edit={this.edit}/>
                            </div>
                        </div>
                     </div>
            </Card>
   
</div>
        )
        }

     

}