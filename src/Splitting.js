import React, { Component } from 'react';

class Splitting extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
        console.log(moduleA);
        
      })
      .catch(err => {
        // Handle failure
            console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default Splitting;