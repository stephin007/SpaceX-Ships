import React, { Fragment } from "react";

const CardSection = ({ ship }) => {
  return (
    <Fragment>
      <div className="card container">
        <div className="card-image">
          <img src={ship.image} alt="Ship Img" />
        </div>
        <div className="card-content">
          <h3>
            Name: <b>{ship.name}</b>
          </h3>
          <p>PORT : {ship.home_port}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CardSection;
