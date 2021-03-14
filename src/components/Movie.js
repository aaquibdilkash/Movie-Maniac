import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteColor = (vote) => {
    return vote >= 8 ? "green" : (vote>=6 && vote<8) ? "orange" : "red"
}

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
            <div className="movie">
                <img src={(poster_path ? (IMG_API + poster_path) : "https://images.unsplash.com/photo-1562245859-9de3fae76585?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")} alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={setVoteColor(vote_average)}>{vote_average}</span>
                </div>
                <div className="overview">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                </div>
            </div>
    )
}

export default Movie
