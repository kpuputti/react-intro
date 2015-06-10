import React from 'react';
import { slides } from './slides.jsx';

console.log('imported slides:', slides);

export default class SlidesContainer extends React.Component {
  render() {
    return (
      <section className='SlidesContainer'>
        { slides[ this.props.index ] }
      </section>
    );
  }
}

SlidesContainer.propTypes = {
  index: React.PropTypes.number.isRequired
};
