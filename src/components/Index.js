import React from 'react'

const Index = ({animation, message}) => {
    return (
        <div className='index'>
          <div className="weather" id="index" onClick={animation}>
            <h2>{message}</h2>
          </div>
        </div>
    )
}

export default Index
