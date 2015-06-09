import './Progress.postcss';

import React from 'react';

export default class Progress extends React.Component {
  render() {
    const relativeWidth = (this.props.index + 1) / (this.props.total);
    return (
      <div className='Progress'>
        <div style={{ color: 'red', width: (relativeWidth * 100) + '%' }}></div>
      </div>
    );
  }
}

Progress.propTypes = {
  index: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};
