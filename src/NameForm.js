import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            essay: 'Please write an essay about your favorite DOM element.',
            selectedItems: ['lime', 'mango'],
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputboxChange = this.handleInputboxChange.bind(this);
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
    handleInputboxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log(this.state.name);
        console.log(this.state.essay);
        console.log(this.state.selectedItems);
        console.log(this.state.isGoing);
        console.log(this.state.numberOfGuests);
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
                <label>
                    Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputboxChange} />
                </label> <br /><br />
                <label>
                    Number of guests:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputboxChange} />
                </label><br /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;