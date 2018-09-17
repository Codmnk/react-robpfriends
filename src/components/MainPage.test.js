import React from 'react'
import { shallow /*, mount, render*/ } from 'enzyme' 
import MainPage from './MainPage'

let wrapper
beforeEach(() => {
    const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    seaerchField: '',
    isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />)
})

it('Renders main page without crashing', () => {
    expect(wrapper).toMatchSnapshot()
})

it('Filters robots correctly', ()=> {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'John',
        isPending: false
        }
        let wrapper2 = shallow(<MainPage { ...mockProps2 } />)
        // expect(wrapper2.instance().filterRobots()).toEqual([])
        expect(wrapper2.instance().filterRobots()).toEqual([{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }])
})