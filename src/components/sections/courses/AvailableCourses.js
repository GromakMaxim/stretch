import React, {Component} from "react";
import CoursePanel from "./CoursePanel";

export default class AvailableCourses extends Component {
    coursesArray = [
        {
            id: 0,
            action: 'Записаться',
            descr: 'Интенсив "Плоский живот. Восстановление после родов."'
        },

        {
            id: 1,
            action: 'Записаться',
            descr: 'Курс Осознанного Похудения"'
        },

    ];

    renderCourses() {
        let resultArr = [];
        this.coursesArray.forEach(item => resultArr.push(<CoursePanel key={item.id} data={item} id={item.id}/>));
        return resultArr;
    }

    render() {
        return (
            <div className='courses flex-col'>
                {this.renderCourses()}
            </div>
        )

    }

}
