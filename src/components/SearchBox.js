import React from 'react'

const SearchBox = ({ searchfield, searchChange}) =>{
    return (
        <div>
            <input
             aria-label="Search Tobots"
             className='pa3 ma2 ba b--green bg-lightest-blue'
             type='search'
             placeholder='Search Robots'
             onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox