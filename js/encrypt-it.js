(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptIt = document.getElementById('encrypt-it')
    encryptIt.addEventListener("click", click, false);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function click() {
    console.log("Button clicked!");
    const inputText = document.getElementById('input-text');
    const resultArea = document.getElementById('result');
    resultArea.textContent = shiftCipher(inputText.value);
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    const shift = 2;
    let result = '';
	var temp;
    for (let i = 0; i <text.length; i++) {
	  temp = 0;
      if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
	temp = text.charCodeAt(i) + shift;
        if (temp > 122) {
          temp -= 26;
        }
        result += String.fromCharCode(temp);
		
      }
      else {
		result += text[i];
      }		
    }
    return result;
  }

})();
