import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    };
    componentDidMount() {
        this.interval = setInterval(() => {
            const countUp = this.state.count + 1;
            this.setState({
                count: countUp,
            });
            if (this.state.count % 2 === 0) {
                this.setState({
                    tikTok: "tick",
                });
            }
            if (this.state.count % 2 !== 0) {
                this.setState({
                    tikTok: "tock",
                });
            }
            if (this.state.count >= 8) {
                this.setState({
                    tikTok: "BOOM!!!!",
                });
                clearInterval(this.interval);
            }
        }, 1000);
    };
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return(
            <div>
                <p>{this.state.tikTok}</p>
            </div>
        );
    }
};

export default Bomb;