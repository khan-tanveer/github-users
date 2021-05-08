import React from "react";
import "./Card.css";

const Card = ({ photo, username, followers, following, date }) => {
  return (
    <div className="card">
      <div className="card__container">
        <img
          className="card__image"
          src={photo}
          // src="https://avatars.githubusercontent.com/u/1?v=4"
          // src="https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg"
          alt=""
        />
        <div className="card__details">
          <p>Username: {username}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Date: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
