import React from "react";
import './CreateUser.css';
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";

export default class CreateUser extends React.Component{
    state={
        name: '',
        email: '',
        password: '',
        passwordRepeat:''
    }

    create=()=>{
        this.props.history.push('/login');

    }

    cancel=()=>{
        this.props.history.push('/patchnote');
    }

    render(){
        return(
            <div className='container'>
                <Card title="Cadastro de Usuario">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputname"> 
                                    <input type="text"
                                        id="inputname"
                                        className="form-control"
                                        name="name"
                                        onCharge={e => this.setState({name: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail"> 
                                    <input type="email"
                                        id="inputemail"
                                        className="form-control"
                                        name="email"
                                        onCharge={e => this.setState({email: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputpassword"> 
                                    <input type="password"
                                        id="inputpassword"
                                        className="form-control"
                                        name="password"
                                        onCharge={e => this.setState({password: e.target.value})}/>
                                </FormGroup>
                                <FormGroup label="repita a senha: *" htmlFor="inputPasswordRepeat">
                                    <input type="password"
                                        id="inputPasswordRepeat"
                                        className="form-control"
                                        name="password"
                                        onCharge={e => this.setState({passwordRepeat: e.target.value})}/>
                                </FormGroup>
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