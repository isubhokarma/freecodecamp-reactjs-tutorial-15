import React from "react";
import Joke from "./Joke";

const App = () => {
  return (
    <div>
      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know but the flag is a big plus."
      />
      <Joke
        question="Did you hear about the claustrophobic astronaut?"
        punchLine="He just needed a little space."
      />
      <Joke punchLine="It's hard to explain puns to kleptomaniacs because they always take things literally." />
    </div>
  );
};
export default App;
