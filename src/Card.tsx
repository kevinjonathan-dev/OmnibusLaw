import React from "react";
import logo from "./logo.svg";
import "./Card.css";
import useQueryNews, { Data } from "./hooks/useQueryNews";
import { url } from "inspector";
import { isString } from "util";
import { Link } from "react-router-dom";
type Props = {
  data?: Data;
};
export default function Card({ data }: Props) {
  return (
    <div className="mbs">
      <a href={data?.link}>
        <div
          className="responsive"
          style={{
            width: "80vw",
            borderRadius: "15px",
            backgroundColor: "white",
            overflow: "hidden",
            boxShadow: "4px 4px 5px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="poster"
            style={{
              backgroundImage: `url(${data?.poster})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="content flex flexDirCol"
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#e4eff5",
            }}
          >
            <h2 className="mhl" style={{ marginTop: 16 }}>
              {data?.judul}
            </h2>
            <p className="mam" style={{ fontStyle: "italic" }}>
              {data?.waktu}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
