import React, { Fragment } from "react";
import CardItem from "./CardItem";

import Spinner from "../assets/spinner.gif";

const CardSection = ({ ships, loading }) => {
  return (
    <Fragment>
      {loading === false ? (
        <div>
          {ships.length !== 0 ? (
            ships.map((ship, index) => <CardItem key={index} ship={ship} />)
          ) : (
            <h3 style={{ textAlign: "center", color: "grey" }}>
              No Ships Found, Try searching American Champion
            </h3>
          )}
        </div>
      ) : (
        <img
          src={Spinner}
          alt="Loading..."
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50",
            height: "50"
          }}
        />
      )}
    </Fragment>
  );
};

export default CardSection;
