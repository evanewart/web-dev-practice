/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  console.log("Window loaded!");

  /**
   * Sets up all necessary event handlers for the UI elements on the page. Attaches the 'click' event 
   * listeners to the 'Encrypt It!' button and the 'Reset' button, binding them to their respective 
   * handler functions: handleEncrypt() and handleReset().
   * @returns {void}
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

/**
 * Handles the encrypt button by applying a shift cipher
 */
  function handleEncrypt() {
    console.log("Button clicked!")
    let input = document.getElementById("input-text").value;
    document.getElementById("result").textContent = shiftCipher(input);
  }

 /**
 * Handles the reset button by clearing the input text area
 */
  function handleReset() {
    document.getElementById("input-text").value = '';
  }

/**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
})();
