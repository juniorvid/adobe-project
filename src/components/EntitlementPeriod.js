import React from 'react';

class EntitlementPeriod extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p> {this.props.name} </p>
        );
    }

}

export default EntitlementPeriod;
