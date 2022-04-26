import React, {Component} from "react";

export default class Question extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {opened: false}

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log('clicked')
        if (this.state.opened) {
            this.setState({
                opened: false
            });
        } else {
            this.setState({
                opened: true
            });
        }

    }

    render() {
        let classes;
        if (this.state.opened) {
            classes = 'answer opened';
        } else {
            classes = 'answer closed';
        }

        return (
            <div className='question-wrapper'>
                <div className='question' onClick={this.clickHandler}>
                    {this.props.q}
                </div>
                <div className={classes}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
