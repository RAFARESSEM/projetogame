import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import login from "../screens/createSquare/CreateSquare";
import Home from "../screens/Home/Home";
import patchNote from "../screens/patchNote/patchnote";
import CreatePiece from "../screens/createPiece/CreatePiece";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={ patchNote } path="/" exact />
            <Route component={ patchNote } path="/patchnote" />
            <Route component={ login} path="/login" />
            <Route component={ Home} path="/Home" />
            <Route component={ CreatePiece} path="/CreatePiece" />
        </BrowserRouter>
    );
}
export default AppRoutes;
