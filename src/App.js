import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

// https://api.github.com/users/${username}

function App() {
  const [names, setNames] = useState("");
  const [details, setDetails] = useState([]);
  const [alert, setAlert] = useState("");

  console.log("alert", alert);

  console.log("details", details);

  const getData = async () => {
    // const response =
    await axios
      .get(`https://api.github.com/users/${names}`)
      .then((response) => {
        console.log("real", response);

        setDetails([response.data]);
        console.log("det", setDetails);
      })
      .catch((error) => {
        console.log("a", error.response.data);
        setAlert(error.response.data);

        // console.log("b", error.response.status);
        // console.log("c", error.response.headers);
      });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    getData();
    setNames("");
    setAlert("");
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <h1>hello git users</h1>
      {alert?.message}

      <form>
        <input
          placeholder="enter git username"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <button onClick={onsubmit}>submit</button>
      </form>

      <h1>cards</h1>

      {details.map((detail) => {
        const cleanedDate = new Date(detail?.updated_at).toDateString();

        return (
          <Card
            username={detail?.login}
            photo={detail?.avatar_url}
            followers={detail?.followers}
            following={detail?.following}
            date={cleanedDate}
          />
        );
      })}
    </div>
  );
}

export default App;
