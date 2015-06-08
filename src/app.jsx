import './app.postcss';

import React from 'react';
import SlidesContainer from './SlidesContainer.jsx';
import { SLIDES_LENGTH } from './slides.jsx';

const KEYCODE_ARROW_LEFT = 37;
const KEYCODE_ARROW_RIGHT = 39;

// Return current URL hash without the # character.
function currentHash() {
  const hash = window.location.hash || '';
  return hash.replace(/^#/, '');
}

function setHash(num) {
  window.location.hash = num;
}

// Check that the parsed slide index is a number within the slides bounds.
function isValidIndex(index) {
  return !isNaN(index) && index >= 0 && index < SLIDES_LENGTH;
}

// Change the index in the URL hash by the given amount.
function addToHashIndex(amount) {
  const hash = currentHash();
  const index = window.parseInt(hash, 10);

  if (isValidIndex(index)) {
    // Hash is a valid number within the slide bounds.
    setHash(index + amount);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentSlideIndex: 0 };
  }
  setSlideIndex() {
    const hash = currentHash();
    const index = window.parseInt(hash, 10);

    if (isValidIndex(index)) {
      this.setState({ currentSlideIndex: index });
    } else {
      // Invalid hash, "redirect" to first slide.
      setHash(0);
    }
  }
  prevSlide(goToFirst) {
    if (this.state.currentSlideIndex === 0) {
      // Already at the first slide.
      return;
    }
    if (goToFirst) {
      setHash(0);
    } else {
      addToHashIndex(-1);
    }
  }
  nextSlide(goToLast) {
    if (this.state.currentSlideIndex === (SLIDES_LENGTH - 1)) {
      // Already at the last slide.
      return;
    }
    if (goToLast) {
      setHash(SLIDES_LENGTH - 1);
    } else {
      addToHashIndex(1);
    }
  }
  componentDidMount() {
    // Set initial slide index from the URL hash.
    this.setSlideIndex();

    // Change slide index whenever the URL hash changes.
    window.addEventListener('hashchange', this.setSlideIndex.bind(this));

    // Decrease/increase slide index in the URL hash with left/right
    // arrow, keeping the index within the slides bounds. If shift key
    // is pressed with the arrow key, then go to first/last slide.
    window.addEventListener('keyup', e => {
      if (e.keyCode === KEYCODE_ARROW_LEFT) {
        this.prevSlide(e.shiftKey);
      } else if (e.keyCode === KEYCODE_ARROW_RIGHT) {
        this.nextSlide(e.shiftKey);
      }
    });
  }
  render() {
    console.log('App.render() with hash:', currentHash());
    return (
      <section className='App'>
        <SlidesContainer index={ this.state.currentSlideIndex }/>
      </section>
    );
  }
}

React.render(<App/>, document.body);
