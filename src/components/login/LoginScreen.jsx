import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContex'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {


const {dispatch} = useContext(AuthContext)

    const user = {
        name:'Osskr Perri',
    }
    const handleClick = ()=>{

        //busco la ultima ruta si es que existe sino devuelvo el root
        const lastPath = localStorage.getItem('lastPath') || '/'

         dispatch({
            type: types.login,
            payload: user

        })

        history.replace(lastPath)
    }
    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr/>

            <button onClick={handleClick}
                    className="btn btn-primary">Login</button>
        </div>
    )
}
