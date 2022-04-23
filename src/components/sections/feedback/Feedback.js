import React, {Component} from "react";

export default class Feedback extends Component {
    render() {
        return (
            <div className='fb flex-col'>
                <div className='fb-text'>{this.props.data.content}</div>
                <div className='fb-tail'/>
                <div className='fb-author-wrapper flex-row'>
                    <img src={this.props.data.author.avatar} className='author-avatar'/>
                    <div className='author-fio'>
                        <span>
                        {this.props.data.author.name}
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}
