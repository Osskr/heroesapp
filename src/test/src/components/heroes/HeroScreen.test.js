import React from 'react'
import {mount} from 'enzyme'
import { HeroScreen } from '../../../../components/heroes/HeroScreen'
import { MemoryRouter, Route } from 'react-router-dom'


describe('Pruebas sobre el HeroScreen', () => {
  
  const historyMock = {
    length:10,
    push:jest.fn(),
    goBack: jest.fn()
  }


  test('debe mostrar el componente redirect si no hay argumentos en el url', () => {
    
    const wrapper = mount(<MemoryRouter initialEntries={['/hero']}> 
                            <HeroScreen history= {historyMock} />
                         </MemoryRouter>)

    expect(wrapper.find('Redirect').exists()).toBe
    
  })

  test('debe mostrar un hero si el parametro existe', () => {
    
    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-spider']}> 
                            < Route path='/hero/:heroId' component={HeroScreen}/>
                          </MemoryRouter>)

    expect(wrapper.find('.row').exists()).toBe(true)
  })

  test('debe regresar a la pagina anterior con Push', ()=>{

    const historyMock = {
      length:1,
      push: jest.fn(),
      goBack: jest.fn()
    }
    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-spider']}> 
                            < Route 
                                  path='/hero/:heroId'
                                  component = { () => <HeroScreen history={historyMock} /> }
                            />
                          </MemoryRouter>)

    wrapper.find('button').prop('onClick')()
 
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })


  test('debe regresar a la pantalla anterior', ()=>{
  
    const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-spider']}> 
                            < Route 
                                  path='/hero/:heroId'
                                  component= { () => <HeroScreen history={historyMock}/>}/>
                          </MemoryRouter>)

    wrapper.find('button').prop('onClick')()
    expect(historyMock.goBack).toHaveBeenCalled()
  })
  
  test('debe llamar redirect si el heroe no existe ', () => {
      
      const wrapper = mount(<MemoryRouter initialEntries={['/hero/marvel-spiderjvjhvjhvjkhv']}> 
              < Route 
                    path='/hero/:heroId'
                    component= { () => <HeroScreen history={historyMock}/>}/>
            </MemoryRouter>)

    // si el heroe no existe no deberia mostrar nada
     expect(wrapper.text()).toBe('')
  })
  

})
