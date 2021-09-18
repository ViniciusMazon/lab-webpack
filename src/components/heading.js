import './heading.css';

class Heading {
  create(text) {
    const heading = document.createElement('h2');

    heading.innerHTML = text;

    heading.classList.add('main-title');

    document.querySelector('body').appendChild(heading);
  }
}

export default Heading;