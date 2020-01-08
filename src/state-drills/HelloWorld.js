import React from 'react';

class HelloWorld extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            who: "World!",
        };
    };
    buttonClick = () => {
            this.setState({
                who: "World!",
            });
    };
    render() {
        return(
            <div>
                <p>Hello, {this.state.who}</p>
                <button who="World!" onClick={() => this.setState({ who: 'World!' })}>World!</button>
                <button who="Friend!" onClick={() => this.setState({ who: 'Friend!' })}>Friend!</button>
                <button who="React!" onClick={() => this.setState({ who: 'React!' })}>React!</button>
            </div>
        );
    };
}

export default HelloWorld;