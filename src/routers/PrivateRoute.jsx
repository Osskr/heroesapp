import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {PropTypes} from 'prop-types'
export const PrivateRoute = ({isAuthenticated,component: Component, ...rest}) => {
    
    
    console.log(rest.location.pathname )
    //guardamos la ruta en el local storage
    localStorage.setItem('lastPath',rest.location.pathname)
    return (
        <Route {...rest}  
               component={ (props)=>(
                          (isAuthenticated)? (<Component {...props}/>)
                          : (<Redirect to='login'/>)
                )}/>

     
    )
}
 
PrivateRoute.propTypes ={

    isAuthenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
       
}

