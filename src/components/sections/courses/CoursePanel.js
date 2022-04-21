import React, {Component} from "react";
import '../../../css/course_anim.css';

export default class CoursePanel extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className='course-panel flex-col b1'>
                <div className='course-action'>{this.props.data.action}</div>
                <div className='course-description'>{this.props.data.descr}</div>
            </div>
        );
    }
}
