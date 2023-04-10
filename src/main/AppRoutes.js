import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import createSquare from "../screens/createSquare/CreateSquare";
import Home from "../screens/Home/Home";
import patchNote from "../screens/patchNote/patchnote";
import CreatePiece from "../screens/createPiece/CreatePiece";
import AlterarPiece from "../screens/alterarPiece/alterarPiece";
import alterarSquare from "../screens/alterarSquare/alterarSquare";

import deletepiece from "../screens/deleteSquare/deletepiece";
import deletesquare from "../screens/deletePiece/deletesquare";
import BuscarSquare from "../screens/buscarSquare/BuscarSquare";
import BuscarPiece from "../screens/buscarPiece/BuscarPiece";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={ patchNote } path="/" exact />
            <Route component={ patchNote } path="/patchnote" />
            <Route component={ createSquare} path="/CreateSquare" />
            <Route component={ Home} path="/Home" />
            <Route component={ CreatePiece} path="/CreatePiece" />
            <Route component={ AlterarPiece} path="/alterarPiece" />
            <Route component={ alterarSquare} path="/alterarSquare/:id" />
            <Route component={ deletepiece} path="/deletepiece" />
            <Route component={ deletesquare} path="/deletesquare" />
            <Route component={ BuscarSquare} path="/buscarSquare" />


        </BrowserRouter>
    );
}
export default AppRoutes;
