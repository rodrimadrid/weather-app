import React from "react";

const Searchbar = ({handleSearch, currentWeather, forecast}) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light m-3">
                <div className="container-fluid justify-content-center">
                    <form className="d-flex"onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" name='country' placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
               
            </nav>
           
        </>
    )
}

export default Searchbar
