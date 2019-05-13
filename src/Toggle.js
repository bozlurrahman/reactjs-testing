import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(this);
        console.log(e);
        
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;