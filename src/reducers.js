import { CHANGE_SEARCH_FEILD } from './constants.js'

const intialState = {
    searchField: ''
}

export const searchRobots = (state=intialState, action={})=>{
    switch(action.type) {
        case CHANGE_SEARCH_FEILD:
            return object.assign({}, state, {searchField: action.payload})

        default:
            return state
    }
}