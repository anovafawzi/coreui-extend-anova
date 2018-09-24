import React, { Component } from 'react';

const MARKER_SIZE = 32;
const markerStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE
}
class MapMarker extends Component {
    render() {
        return (
            <div style={markerStyle}>
                <img src={this.props.imagepath} onClick={this.props.setOnClick} />
                {
                    (this.props.name)
                        ?
                        <div>{this.props.name}</div>
                        : null
                }
            </div>
        )
    }
}

export default MapMarker;