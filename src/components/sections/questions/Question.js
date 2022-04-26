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
                <div className='question flex-row' onClick={this.clickHandler}>
                    <div className='question-title'>
                        <span>{this.props.q}</span>
                    </div>
                    <div className='question-more flex-col'>
                        <img className='more' src={this.props.btnPic}/>
                    </div>
                </div>
                <div className={classes}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
