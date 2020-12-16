import React, { useState, useEffect } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";

import NavBar from "./components/Navbar";
import Search from "./components/Searchbar";
import CardSection from "./components/CardSection";

export default function App(props) {
  const [ships, setShips] = useState([]);
  const [shipsDefault, setShipsDefault] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchShips = async () => {
     await request(gql`
      {
        ships {
          name
          home_port
          image
        }
      }
    `).then((response) => {
      // console.log(response.data.ships);
      // uncoment the above linr to just see the list  of ships in the console
      setShips(response.data.ships);
      setShipsDefault(response.data.ships);
      setLoading(false);
    });

    // console.log(response);
    // uncoment the above linr to just see the full data in the console
  };

  const updatedData = async (input) => {
    const filtered = shipsDefault.filter((ship) => {
      return ship.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setShips(filtered);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Search totalCount={ships.length} input={input} onChange={updatedData} />
      <CardSection ships={ships} loading={loading} />
    </div>
  );
}
