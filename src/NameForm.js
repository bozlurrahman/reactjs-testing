import React from 'react'
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            essay: 'Please write an essay about your favorite DOM element.',
            selectedItems: ['lime', 'mango']
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEssayChange(event) {
        this.setState({ essay: event.target.value });
    }
    handleSelectChange(event) {
        
        let selected = [...this.refs.fruitsList]
                    .filter(option => option.selected)
                    .map(option => option.value)
        
        this.setState({ selectedItems: selected });
        console.log(selected);

    }

    handleSubmit(event) {
        console.log(this.state.name);
        console.log(this.state.essay);
        console.log(this.state.selectedItems);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} /></label><br /><br />
                <label>Essay: <textarea value={this.state.essay} onChange={this.handleEssayChange} rows="6" cols="30" /></label><br /><br />
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.selectedItems} onChange={this.handleSelectChange} multiple={true} ref="fruitsList">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label><br /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;