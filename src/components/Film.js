import React, { useState } from "react";
import { Films } from "../shared/ListOfFilms";
import { Link } from "react-router-dom";

export default function Film() {
    const [film, setFilm] = useState([])
    return (
        <div className="container">
            <div className="row">
                {Films.map((film) => (
                    <div className="col-md-4" key={film.id}>
                        <div className="card">
                            <img src={film.img} height={220}></img>
                            <h3 className="text-center">{film.title}</h3>
                            <h5 className="text-center">{film.year}</h5>
                            <p className="text-center">{film.nation}</p>
                            <p className="text-center">
                                <Link to={`/detail/${film.id}`}>
                                    <button onClick={() => { setFilm(film) }} className="btn btn-primary">
                                        {/* <a href="#popup1" id="openPopUp"> */}
                                        Detail
                                        {/* </a> */}
                                    </button>
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}

                {/* <div className="overlay" id="popup1">
                    <div className="popup">
                        <img src={film.img}></img>
                        <h2>{film.title}</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">{film.info}</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}