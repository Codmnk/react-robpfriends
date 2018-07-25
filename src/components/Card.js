import React from 'react'

const Card = ({name, email, id}) => {
    
        return (
        <div  className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2 tc'>
            <img alt='robort' src={`https://robohash.org/${id}?size=100x100`} />
            <div>
                {name}
            </div>     
            <p>
                {email}
            </p>
        </div>
    )
}
    

export default Card