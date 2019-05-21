import React, { Component } from 'react';
import styles from './css/Button.module.css'; // Import css modules stylesheet as styles
import './css/another-stylesheet.css'; // Import regular stylesheet

class Button extends Component {
  render() {
    // reference as a js object
    return <div>
      <button className={styles.error}>Error Button</button> 
      <button className="error">Error Button</button>
    </div>;
  }
}
export default Button;