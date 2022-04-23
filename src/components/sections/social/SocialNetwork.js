import React, {Component} from "react";

export default class SocialNetwork extends Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='social'>
                <a href={this.props.data.link}>
                    <img src={this.props.data.pic}/>
                </a>
            </div>
        );
    }
}
