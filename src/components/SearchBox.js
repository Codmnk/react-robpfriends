import React from 'react'

const SearchBox = ({ searchfield, searchChange}) =>{
    return (
        <div>
            <input
             className='pa3 ma2 ba b--green bg-lightest-blue'
             type='search'
             placeholder='Search Robots'
             onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox