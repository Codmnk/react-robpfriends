import * as actions from './actions'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

 

 const mockStore = configureMockStore([thunkMiddleware])
 
describe('Actions', () => {
    
    it('should create an action to search robots', () => {
        const text = 'Wood'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })

    it('Handles requesting robots API', () => {
        const store = mockStore()
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        console.log(action)
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })
})