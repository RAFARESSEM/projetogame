import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import PieceTable from "../../components/PieceTable";
import axios from 'axios';

export default class BuscarPiece extends React.Component{

    state={
        clas:'',
        id: '',
        pieces : []
    }

    delete=(pieceId)=>{
         axios.delete(`http://localhost:8080/api/piece/${pieceId}` 
         ).then(response=>
            {
                this.find();
            }).catch(error=>
                {
                    console.log(error.response);
                })
            }

    

    edit=(pieceId)=>{
        this.props.history.push(`/alterarPiece/${pieceId}`);
    }

    find=()=>{
        var params = '?';

        if(this.state.id != ''){
            if(params != '?'){
                params= `${params}&`;
            }
            params=`${params}id=${this.state.id}`;
        }
        if(this.state.clas != ''){
            if(params != '?'){
                params= `${params}&`;
            }
            params=`${params}clas=${this.state.clas}`;
        }

        axios.get(`http://localhost:8080/api/piece${params}`)
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
                          <FormGroup label="clas:" htmlFor="inputClas"> 
                                        <input type="text"
                                            id="inputclas"
                                            className="form-control"
                                            value={this.state.clas} onChange={(e)=> this.setState({clas: e.target.value})} />
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
                                <PieceTable pieces={this.state.pieces}
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