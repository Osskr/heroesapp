import React from 'react'
import {mount} from 'enzyme'
import { PrivateRoute } from '../../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'


describe('Pruebas sobre el PrivateRouter', () => {

  const props = {
    location:{
      pathname:'/marvel'
    }
  }

  // Simulamos storage con jest
  Storage.prototype.setItem = jest.fn()

  test('should mostrar el componente si esta autenticado y guardar local storage', () => {
    //<MemoryRouter> es un high order component pensado por la gente de React Router para que podamos hacer tests
    //sobre ciertas rutas sino tendremos el error   Invariant failed: You should not use <Route> outside a <Router>
   // no podemos usar shallow para renderizar este componente ya que solo renderizara el high order component
    
   const wrapper = mount(<MemoryRouter><PrivateRoute isAuthenticated={true}
      component={() => <span></span>}
      {...props}

    /></MemoryRouter>);

   expect(wrapper.find('span').exists()).toBe(true)
   expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel')
  })

  test('debe bloquear el componente si no esta autenticado', ()=>{

    const wrapper = mount(<MemoryRouter><PrivateRoute isAuthenticated={false}
      component={() => <span></span>}
      {...props}

    /></MemoryRouter>);

    expect(wrapper.find('span').exists()).toBe(false)
  })
  
})
