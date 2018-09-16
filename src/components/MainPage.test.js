import React from 'react'
import { shallow /*, mount, render*/ } from 'enzyme' 
import MainPage from './MainPage'

let wrappper;

it('Expect to render MainPage container', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot()
})
