import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import login from "../screens/login/Login";
import createuser from "../screens/createUser/CreateUser";
import Home from "../screens/Home/Home";
import patchNote from "../screens/patchNote/patchnote";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={ patchNote } path="/" exact />
            <Route component={ patchNote } path="/patchnote" />
            <Route component={ login} path="/login" />
            <Route component={ Home} path="/Home" />
            <Route component={ createuser} path="/createUser" />
        </BrowserRouter>
    );
}
export default AppRoutes;
