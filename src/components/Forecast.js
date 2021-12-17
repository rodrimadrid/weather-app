import React from "react";

const Forecast = ({daily, icon, id}) => {
  const {temp, weather} = daily
  const date = new Date()
  const nextDay = (i)=>{ 
  const day = new Date((date.getFullYear()), (date.getMonth()) , (date.getDate() + i))
    return day.toDateString()
  } 
 
  return (
    <div>
      <div className="card m-2" width="15rem;">
          <p>{nextDay(id + 1)}</p>
        <img
          src={icon(weather[0].icon)}
          className="card-img-top icon"
          alt="..."
        />
        <div className="card-body">
          <strong className="m-2">{temp.min}°C</strong>
          <strong className="m-2 text-muted">{temp.max}°C</strong>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
