import { CHANGE_SEARCH_FEILD } from './constants.js'

export const setSearchField = (text) => {
    
   return ({
        type: CHANGE_SEARCH_FEILD,
        payload: text
    }) 
}