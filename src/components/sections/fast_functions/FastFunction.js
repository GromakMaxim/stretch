import React, {Component} from "react";

export default class FastFunction extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='ff flex-col b1'>
                <div className='ff-title'>{this.props.data.title}</div>
                <div className='ff-subtitle'>{this.props.data.subtitle}</div>
            </div>
        );
    }
}
