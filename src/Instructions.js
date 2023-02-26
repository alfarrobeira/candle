import React from "react";

export default () => {
  return (
    <>
      <div className="block">
        <h1>The Candle</h1>
        <div>
          You're now in the dark, save for a box of candles you could salvage.
          However, those candles will burn forever; which is not likely to
          happen in the real world.
        </div>
        <br />
        <div>
          <strong>Your goal:</strong> find a way to make the candle burn to the
          end with useState and useEffect hooks in React
        </div>
        <br />
        <ul>
          <li>
            Create a state that will hold the value of the candle's height in
            your component. Set its default value to 80.
          </li>
          <li>
            The height of the candle is controlled by the candle class in the
            CSS file. Target the height value and set it to reflect your newly
            created state
          </li>
          <li>
            On the "Make candle smaller" button, attach an onClick handler that
            will diminish the height of the candle by 1 everytime it's clicked
          </li>
          <li>
            Now, being <del>lazy</del> good developers, we would like automate
            that process so we don't have to click on a button for the candle to
            become smaller. Implement a useEffect hook to take care of this. The
            candle should diminish by 1% every 2 seconds
          </li>
          <li>
            When the height of the candle reaches 10%, make sure you take it out
            so you don't burn this sandbox down! For this, you should
            conditionaly render (or not) the whole candle based on its height
          </li>
          <li>
            We don't want to be stuck in the dark, do we? Change the "Make
            candle smaller" button to "Replace with new candle", and implement a
            function that will refresh the candle to its original state
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.reactjs.org/docs/hooks-effect.html"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/dom-elements.html#style"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3"
        >
          Help
        </a>
      </div>
    </>
  );
};
