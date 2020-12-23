import React from 'react'
import {mount} from 'enzyme'
import { Navbar } from '../../../../components/ui/NavBar'
import { MemoryRouter, Router } from 'react-router-dom'
import { AuthContext } from '../../../../auth/AuthContex'
import { types } from '../../../../types/types'


describe('Pruebas sobre el NavBar', () => {
 
//generamos un history mock para hacer pruebas con history
// se lo podemos pasar al router asi cuando nuestro componente va a usar el 
// history, va a usar el history q tiene ese router
const historyMock = {

  push:jest.fn(),
  replace:jest.fn(),
  location:{},
  listen: jest.fn(),
  createHref : jest.fn()
}

  const contextValue = {
    dispatch:jest.fn(),
    user:{
      logged:true,
      name: 'rodolfo'
    }
  }


 const wrapper = mount(<MemoryRouter>
        <AuthContext.Provider value={contextValue}>
         
            <Router history={historyMock}>
              <Navbar />
            </Router>
        </AuthContext.Provider>
      </MemoryRouter>)
  
// limpiamos el mock
afterEach(()=>{
  jest.clearAllMocks();
})


  test('debe mostrarse correctamente ', () => {
      
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.user-name').text().trim()).toBe('rodolfo')
  })
  
  test('debe llamar logout y usar history', () => {
    
    wrapper.find('button').prop('onClick')()

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    })

    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })
  
})

