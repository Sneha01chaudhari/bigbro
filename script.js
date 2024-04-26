// Initial index
var i = 0;

// Original message with appropriate spacing
var txt1 =
  "Hey My dear Brother.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!  <<                                                                          > You are best brother to me < You always support me in my hard time.  <<                  Today is special day for you < On this day, Sending you a birthday wish wrapped with all my Love....! <<                           Happy birthday to the guy who's always there to pick me up when times get tough. Love you Lots...!                                                     > Swami always blessing you and Swami help to fill your life with happiness...!                     << You are my first friend and forever friend and My Big Support System...!                                                     > I am so lucky to have me a nice brother....!                    << Once again happiest bithday bro....!";

// Speed for typewriter effect
var speed = 55;

// Start typewriter effect
typeWriter();

function typeWriter() {
  if (i < txt1.length) {
    var char = txt1.charAt(i); // Current character in the message

    if (char === "<") {
      // New line when encountering "<"
      document.getElementById("text1").innerHTML += "<br>";
    } else if (char === ">") {
      // Do nothing when encountering ">"
    } else if (char === "|") {
      // Some action when encountering "|", currently it resets the background-image (Ensure proper usage)
      $(".bg_heart").css("background-image", ""); // An example action
    } else {
      // Regular character addition
      document.getElementById("text1").innerHTML += char;
    }

    // Move to the next character
    i++;

    // Delay before processing the next character
    setTimeout(typeWriter, speed);
  }
}
