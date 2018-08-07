import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newOpacity = this.props.opacity - 0.1;
    console.log(`This is the old opacity: ${this.props.opacity}`)
    console.log(`This is the new opacity: ${newOpacity}`)

    return (
     <div className="color-box" style={{ opacity: this.props.opacity }}>
      {this.props.opacity >= 0.2 ? <ColorBox opacity={ this.props.opacity - 0.1 }/> : null}
     </div>
    )
    }
  }
