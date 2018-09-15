import { shallow /*, mount, render*/ } from 'enzyme'
import React from 'react'
import CardList from './CardList'

it('Expect to render cardList component', () => {
    const mockRobots = [
        {
            key: 1,
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})