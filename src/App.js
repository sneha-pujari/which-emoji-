import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😯": "shocked",
  "😤": "angry",
  "🙇‍♂️": "amazing!",
  "🙏": "prayer",
  "😙": "whistle",
  "💁": "sassiness",
  "😪": "sleeping",
  "😓": "sadness",
  "😡": "angry",
  "😑": "Annoyed"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, Setmeaning] = useState("");

  function wrongInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji";
      Setmeaning(meaning);
    } else {
      Setmeaning(meaning);
      console.log(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    Setmeaning(meaning);
  }

  return (
    <div className="App">
      <nav class="navigation">
        <div class="nav-brand">Want to know the meaning of an Emoji?</div>
      </nav>

      <section class="a1">
        <img src="data:image/jpeg;base64,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" />
      </section>

      <section class="a2">
        <h2>Type or select the emoji for finding the meaning: </h2>
      </section>

      <section class="a3">
        <input onChange={wrongInputHandler}></input>
        <h3>
          {emojisWeKnow.map(function (emoji) {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2.5rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
                key={emoji}
              >
                {emoji}{" "}
              </span>
            );
          })}
        </h3>

        <p>{meaning}</p>
        <h2>
          <button class="button-hover">
            <span>Check Meaning </span>
          </button>
        </h2>
      </section>

      <footer>
        <ul>
          <li>
            <a href="https://codesandbox.io/s/snowy-shadow-2e0ls?file=/src/App.js">
              Source Code
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
