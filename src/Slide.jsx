import './Slide.postcss'

import React from 'react';

export default class Slide extends React.Component {
  render() {
    return (
      <section className={ 'Slide ' + (this.props.className || '') }>
        { this.props.title ? <h1 className='title'>{ this.props.title }</h1> : null }
        { this.props.children }
      </section>
    );
  }
}

Slide.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.any
};
