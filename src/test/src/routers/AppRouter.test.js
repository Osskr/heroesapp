import React from 'react'
import {mount} from 'enzyme'
import { AppRouter } from '../../../routers/AppRouter'
import { AuthContext } from '../../../auth/AuthContex'




describe('Pruebas sobre el AppRouter', () => {
  
  
  const contextValue = {
    dispatch:jest.fn(),
    user:{
      logged:false
    }
  }
  test('debe mostrar el login si no estoy autenticado', () => {

      const wrapper = mount(
      
          <AuthContext.Provider value={contextValue}>
              <AppRouter/>
          </AuthContext.Provider>)
      
      expect(wrapper).toMatchSnapshot()
  })
  

  test('debe mostrar el componente de marvel si esta autenticado',()=>{
      // voy a suponer que estoy autenticado
      const contextValue = {
        dispatch:jest.fn(),
        user:{
          logged:true,
          name:'sskr'
        }
      }
    const wrapper = mount(
      
      <AuthContext.Provider value={contextValue}>
          <AppRouter/>
      </AuthContext.Provider>)

    expect(wrapper.find('.navbar').exists()).toBe(true)
  })
})
