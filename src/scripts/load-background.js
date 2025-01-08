import backgroundImg from '../assets/forest-background.png';
import sleightImg from '../assets/santa-sleight.png';
import norhtStarImg from '../assets/north-star.svg';
import flakeOne from '../assets/snowflake-1.svg';
import flakeTwo from '../assets/snowflake-2.svg';

import '../styles/background.scss';

function loadBackground() {
  const backgroundElem = document.querySelector('.background');
  const sleightElem = document.querySelector('.sleight');

  sleightElem.innerHTML = `
    <img src='${sleightImg}' alt '' class="sleight-image">
  `;

  backgroundElem.innerHTML = `
    <img src='${backgroundImg}' alt '' class="background-image">
    <img src='${norhtStarImg}' alt '' class="north-star-image">
    `;
  setInterval(() => {
    dropSnowflake();
  }, 250);
}

function dropSnowflake() {
  const snowflakeElem = document.querySelector('.snowflakes');

  const randomSpeed = randomizeSpeed();

  const snowflake = document.createElement('img');
  snowflake.src = randomFlake();
  snowflake.classList.add('snowflake');
  snowflake.style.height = `${randomizeSize()}px`;
  snowflake.style.animationDuration = randomSpeed;
  snowflake.style.left = `${randomizeLocation()}px`;
  snowflake.style.animationTimingFunction = randomTimingFn();
  snowflake.style.transform = `rotate(${randomRotation()}deg)`;

  snowflakeElem.appendChild(snowflake);
  setTimeout(() => {
    snowflakeElem.removeChild(snowflake);
  }, randomSpeed);
}

function randomizeSize() {
  const number = 20 + Math.floor(Math.random()*20);
  return number;
}
function randomizeSpeed() {
  let number = 7 + Math.floor(Math.random()*10);
  number = number * 1000;
  return number;
}
function randomizeLocation() {
  const number = Math.floor(Math.random()*window.innerWidth);
  return number;
}
function randomTimingFn() {
  const number = Math.floor(Math.random()*3);
  if(number === 0) {
    return 'ease-in';
  }else if(number === 1){
    return 'ease-in-out';
  }else {
    return 'ease-out';
  }
}
function randomFlake() {
  const number = Math.floor(Math.random()*2);
  if(number === 0) {
    return flakeOne;
  }else {
    return flakeTwo;
  }
}
function randomRotation() {
  const number = Math.floor(Math.random()*365);
  return number;
}

export { loadBackground };