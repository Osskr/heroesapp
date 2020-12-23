import React from 'react'
import {mount} from 'enzyme'
import { DashBoardRoutes } from '../../../routers/DashBoardRoutes'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContex'


describe('Pruebas sobre el DashBoardRouter', () => {
  test('should mostrarse correctamente', () => {
    
    const contextValue = {
      dispatch:jest.fn(),
      user:{
        logged:true,
        name: 'atr-perri'
      }
    }
    const wrapper = mount(<MemoryRouter>
                            <AuthContext.Provider value={contextValue}>
                             <DashBoardRoutes/>
                             </AuthContext.Provider>
                          </MemoryRouter>)
                                 
  
    expect(wrapper).toMatchSnapshot()
    
    expect(wrapper.find('.user-name').text().trim()).toBe('atr-perri')
  })



  
  
})
