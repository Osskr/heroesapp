import { authReducer } from '../../../auth/authReducer'
import { types } from '../../../types/types'

describe('Pruebas sobre el Auth Reducer', () => {
   
    
    test('should retornar el estado por defecto',()=>{
        
        const state = authReducer({logged:false},{})
        expect( state ).toEqual( {logged:false})

    })

    
    test('should autenticar y colocar el estado del usuario',()=>{
   
        const action = {
           
            type: types.login,
           payload: {
               name: 'Hernan'
           }
        }
       
       
  
        const state = authReducer({logged:false}, action)

        expect(state).toEqual({
            logged:true,
            name:'Hernan'
        })
    })

    test('should borrar el name del usuario y log en false',()=>{
        const action = {
           
            type: types.logout
         
        }
         
        const state = authReducer({logged:true, name:'Peter'}, action)

        expect(state).toEqual({
            logged:false
  
        })
        
    })
})

