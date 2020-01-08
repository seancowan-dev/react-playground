import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    };

    state = {
        currentTabIndex: null,
    };

    handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index});
    };

    renderSections() {
        return (
        <ul className="accordion">
            {this.props.sections.map((section, index) => (
                <li key={index} className={this.state.currentTabIndex === index ? "open" : "closed"}>
                    <button key={index} onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                    </button>
                    {(()=> {
                        if (this.state.currentTabIndex === index) {
                            return this.renderSectionContent();
                        }
                    })()}
                </li>
            ))}
        </ul>
        );
    };

    renderSectionContent() {
        const currentTab = this.props.sections[this.state.currentTabIndex];

        return (
            <p className="section-content">
                {currentTab.content}
            </p>
        );
    };

    render() {
        return (
            <div>
                {this.renderSections()}
            </div>
        );
    };
}

export default Accordion;