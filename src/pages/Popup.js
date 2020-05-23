import React from "react";

export default function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
          <p>Director: {selected.Director}</p>
          <p>Actors: {selected.Actors}</p>
          <p>Awards: {selected.Awards}</p>
          <p>Genre: {selected.Genre}</p>
          <p>Runtime: {selected.Runtime}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}
