import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            essay: 'Please write an essay about your favorite DOM element.'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEssayChange(event) {
        this.setState({ essay: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.name);
        console.log(this.state.essay);
        
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} /></label><br /><br />
                <label>Essay: <textarea value={this.state.essay} onChange={this.handleEssayChange} rows="6" cols="30" /></label>
                <br /><br /><input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;