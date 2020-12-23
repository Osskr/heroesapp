import React from 'react'
import {mount} from 'enzyme'
import { LoginScreen } from '../../../../components/login/LoginScreen'
import { AuthContext } from '../../../../auth/AuthContex'
import { MemoryRouter } from 'react-router-dom'
import { types } from '../../../../types/types'


describe('Pruebas sobre el LoginScreen', () => {
 
  const history = {
        replace:jest.fn()
  }
 
  const contextValue = {
    dispatch:jest.fn(),
    
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
       <LoginScreen history={history}/>
    </AuthContext.Provider>
 

)
  
  test('debe mostrarse correctamente ', () => {

      expect(wrapper).toMatchSnapshot()
  })
  

  test('debe realizar el dispatch y la navegacion', ()=>{

      wrapper.find('button').prop('onClick')()

      expect(contextValue.dispatch).toHaveBeenCalledWith({
        type: types.login,
        payload:{
          name:'Osskr Perri'
        }
      })

      expect(history.replace).toHaveBeenCalled()
  })
})
