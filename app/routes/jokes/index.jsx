import { Link, Outlet, useLoaderData } from "remix";
import React, { useState } from "react";
import nut from "../../../public/nut.svg";
import { db } from "~/utils/db.server";
import stylesUrl from "../../styles/jokes.css";

export let links = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export let loader = async () => {
  let count = await db.joke.count();
  let randomRowNumber = Math.floor(Math.random() * count);
  let [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  let data = { randomJoke };
  return data;
};

export default function JokesRoute() {
  let data = useLoaderData();
  const joke = data.randomJoke;

  let [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Home" aria-label="Home">
              <span className="logo">🤪</span>
              <span className="logo-medium">AG🤪IN?</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="jokes-main">
        <div className="jokes-container">
          <div className="jokes-content">
            <h1>{joke.content}</h1>
            <img
              id="nut"
              height={100}
              width={100}
              src={nut}
              onClick={() => setShowPunchline(!showPunchline)}
            />
            <p id="clickme">Click nut for punchline</p>
          </div>
          <h1 id="punchline" className={showPunchline ? "visible" : "hidden"}>
            {joke.punchline}
          </h1>
        </div>
        <div className="jokes-outlet">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
