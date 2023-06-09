import React from "react";
import NavbarItem from "./NavBarItem";


function Navbar(props){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand">game</a>
                <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="/Home" label="Home"/>
                        <NavbarItem href="/createsquare" label="CreateSquare"/>
                        <NavbarItem href="/patchNote" label="patchNote"/>
                        <NavbarItem href="/createPiece" label="CreatePiece"/>
                        <NavbarItem href="/alterarPiece" label="AlterarPiece"/>
                        <NavbarItem href="/alterarSquare" label="AlterarSquare"/>
                        <NavbarItem href="/deletePiece" label="deletePiece"/>
                        <NavbarItem href="/deletesquare" label="deletesquare"/>
                        <NavbarItem href="/BuscarSquare" label="buscarSquare"/>
                        <NavbarItem href="/BuscarPiece" label="buscarPiece"/>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Navbar;