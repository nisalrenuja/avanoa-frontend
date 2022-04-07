import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const history = useHistory();
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempQuote] = useState("");

  async function populateQuote() {
    const req = await fetch("https://avanoa--backend.herokuapp.com/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace("/login");
      } else {
        populateQuote();
      }
    }
  }, []);

  async function updateQuote(event) {
    event.preventDefault();

    const req = await fetch("https://avanoa--backend.herokuapp.com/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        quote: tempQuote,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQuote(tempQuote);
      setTempQuote("");
    } else {
      alert(data.error);
    }
  }

  return (
    <div class="bg-[#50d71e]">
        <h1 className="text-3xl font-bold underline text-purple-600">Home</h1>
      <h1>Welcome to Avanoa</h1>
      <Link to = "/login">Login</Link><br/>
      <Link to = "/register">Register</Link>
    </div>
  );
};

export default Home;
