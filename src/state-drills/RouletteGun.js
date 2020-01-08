import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    };
    handleButtonClick = () => {
        this.setState({
            spinningTheChamber: true,
            message: "Spinning the chamber!",
        });
        let timeout = setTimeout(() => {
            let newChamber = Math.ceil(Math.random() * 8);
            this.setState({
                spinningTheChamber: false,
                chamber: newChamber,
            });
            console.log(this.props.bulletInChamber);
            console.log(this.state.chamber);
            if (this.props.bulletInChamber === this.state.chamber){
                this.setState({
                    message: "BANG!!!",
                });
            }   else {
                this.setState({
                    message: "You're safe",
                });
            } 
        }, 2000);
    };
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
            message: "Click to start",
        };
    };
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
        );
    };
};

export default RouletteGun;