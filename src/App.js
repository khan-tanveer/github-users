import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

// https://api.github.com/users/${username}

function App() {
  const [names, setNames] = useState("");
  const [details, setDetails] = useState();

  console.log("details", details);

  const getData = async () => {
    const data = await axios.get(`https://api.github.com/users/${names}`);
    console.log("real", data.data.updated_at);

    setDetails([data.data]);
    console.log("det", setDetails);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    getData();
    setNames("");
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <h1>hello git users</h1>

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
