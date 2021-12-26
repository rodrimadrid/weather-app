import React from 'react'

const WeatherDetail = ({title, detail, detailUnit}) => {

    return (    
        <div className="card detail mb-4">
            <span>{title}</span>
            <div className="card-body">
                <span className='weather-detail'>{detail}</span><p>{detailUnit}</p>
            </div>
         </div>
    )
}

export default WeatherDetail
