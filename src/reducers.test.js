import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

import * as reducers from './reducers'

describe('SearchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' })
    })  
})

describe('requestRobots', () => {
    const intialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual( intialStateRobots )
    })

    it('Should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(intialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('Should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(intialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: test,
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: test,
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: ''
        })
    })
    

    it('Should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(intialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'nooooooo!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'nooooooo!'
        })
    })

})