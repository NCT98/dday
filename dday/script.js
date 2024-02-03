const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Define arrays of messages and corresponding gif URLs
const messages = [
  "Can I ask smth?",
  "will u be my valentine?",
  "YES!!!",
  "I luv u <3",
  "Happy Valentine's Day 🌹",
  "and...",
  "6 months anniversary <3",
];

const gifUrls = [
  "https://i.pinimg.com/originals/ef/ce/56/efce56eba8ffb9e07a7afc0751ad58ed.gif",
  "https://gifdb.com/images/high/pretty-anime-rose-cxmpqasmquf6br11.gif",
  "https://media.tenor.com/w-g6-s9hF44AAAAM/yes-yeah.gif",
  "https://i.pinimg.com/originals/9e/c2/a2/9ec2a2e85e39cc2c9104de3b5b8a40c6.gif",
  "https://media.tenor.com/040z0Qs7N40AAAAC/osito.gif",
  "https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1",
  "https://gifdb.com/images/high/bear-love-mocha-milk-sweet-couple-6d5fbpyi0o7okb5t.gif",
];

// Counter to keep track of the current message index
let messageIndex = 0;

yesBtn.addEventListener("touchstart", () => {
  // Display the current message
  question.innerHTML = messages[messageIndex];

  // Update the gif source corresponding to the current message
  gif.src = gifUrls[messageIndex];

  // Update the message index for the next click
  messageIndex = (messageIndex + 1) % messages.length;
});

noBtn.addEventListener("touchstart", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 320 && window.innerWidth <= 480) {
    // Adjust elements for screens between 320px and 480px
    // Add your specific responsive design logic here
    wrapper.style.padding = "10px";
    question.style.fontSize = "16px";
    yesBtn.style.fontSize = "18px";
    noBtn.style.fontSize = "18px";
  } else {
    // Reset styles for other screen sizes
    wrapper.style.padding = "20px";
    question.style.fontSize = "24px";
    yesBtn.style.fontSize = "24px";
    noBtn.style.fontSize = "24px";
  }
});