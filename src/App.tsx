import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useQueryNews from "./hooks/useQueryNews";
import Card from "./Card";

function App() {
  const { data, isLoading } = useQueryNews();
  return (
    <div className="App">
      <div
        className="flex contentCenterCenter"
        style={{ width: "100vw", height: "20vh", backgroundColor: "#343a40" }}
      >
        <img
          style={{
            height: "30%",
            objectFit: "contain",
            objectPosition: "center",
          }}
          src={require("./jojobug.png")}
          alt=""
        />
      </div>
      <header className="App-header pvl pbl">
        <h1
          style={{
            marginTop: 0,
            color: "red",
            textShadow: "white 3px 3px ",
          }}
        >
          #TolakOmnibusLaw
        </h1>
        {isLoading ? (
          <h2 className="mam">Loading</h2>
        ) : (
          data?.data.data.map((item) => <Card data={item} />)
        )}
      </header>
    </div>
  );
}

export default App;
