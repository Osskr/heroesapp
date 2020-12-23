import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  }
from "react-router-dom";
import { AuthContext } from "../auth/AuthContex";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

 const {user} = useContext(AuthContext)
  
    return (
        <div>
            <Router>
                <div>                                    
                    <Switch>
                        <PublicRoute  isAuthenticated={user.logged} exact path="/login" component={LoginScreen}/>
                        <PrivateRoute path="/"
                                      component={DashBoardRoutes}
                                      isAuthenticated={user.logged}/>
                    </Switch>                
                </div>
            </Router>
        </div>
    )
}
