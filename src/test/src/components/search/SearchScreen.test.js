import React from 'react'
import {mount} from 'enzyme'
import { SearchScreen } from '../../../../components/search/SearchScreen'
import { MemoryRouter, Route } from 'react-router-dom'



describe('Pruebas sobre el SearchScreen', () => {
  
  const wrapper = mount(<MemoryRouter initialEntries={['/search']}>
                            
                              <Route path='/search' component={SearchScreen}/>
                            
                        </MemoryRouter>)

  test('Se muestra con los valores por defecto', () => {

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('search a hero')
      
  })
  

  test('debe mostrar el heroe y el input con el valor del query string', () => {

    const wrapper = mount(<MemoryRouter initialEntries={['/search?q=batman']}>
                            
                              <Route path='/search' component={SearchScreen}/>
                            
                        </MemoryRouter>)

    expect(wrapper.find('input').prop('value')).toBe('batman')
    
      
  })

  test('debe llamar el push del history', () => {

    const history = {
      push:jest.fn()
    }

    const wrapper = mount(<MemoryRouter initialEntries={['/search?q=batman']}>
                            
                              <Route path='/search'
                                     component={()=> <SearchScreen history={history}/>}/>
                            
                        </MemoryRouter>)

    wrapper.find('input').simulate('change', {
      target:{
        name:'searchText',
        value:'batman'
      }
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })


    expect(history.push).toHaveBeenCalledWith('?q=batman')
      
  })

  
  
})
