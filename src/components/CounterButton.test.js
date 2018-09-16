import React from 'react'
import { shallow /*, mount, render*/ } from 'enzyme' 
import CounterButton from './CounterButton'

it('Expect to render CounterButton component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
})

it('Correctly increments the counter', () => {
    const mockColor = 'red'
    const warapper = shallow(<CounterButton color={mockColor}/>)

    warapper.find('[id="counter"]').simulate('click')
    expect(warapper.state()).toEqual({ count: 1 })
})