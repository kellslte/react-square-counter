import React, { useEffect, useState } from "react";

const Joke = ({type}) => {
  const [joke, setJoke] = useState(
    "Why did the chicken cross the road? To get to the other side!"
  );

  useEffect(() => {
    const fetchJoke = async () =>
    {
      const url = type ? `https://v2.jokeapi.dev/joke/${type}` : "https://v2.jokeapi.dev/joke/Programming";
      const res = await fetch(url);
      const data = await res.json();
      const { setup, delivery } = data;
      if (setup) {
        setJoke(`${setup}... ${delivery}`);
      } else {
        setJoke(data.joke);
      }
    };

    fetchJoke();
  }, [setJoke, type]);

  return (
    <div className="card w-50 bg-dark">
      <div className="card-header text-white text-center">Joke of the Day</div>
      <div className="card-body">
        <blockquote className="blockquote text-white">
          <p>{joke} 🤣🤣</p>
        </blockquote>
      </div>
    </div>
  );
};

export default Joke;
