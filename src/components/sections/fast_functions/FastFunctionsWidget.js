import React, {Component} from "react";
import FastFunction from "./FastFunction";

export default class FastFunctionsWidget extends Component {

    array = [
        {
            id: 0,
            title: 'Расписание и стоимость',
            subtitle: '',
            link: '',
            pic: ''
        },

        {
            id: 1,
            title: 'Запись на тренировку',
            subtitle: 'онлайн запись на все тренировки',
            link: '',
            pic: ''
        },

        {
            id: 2,
            title: 'Направления',
            subtitle: '',
            link: '',
            pic: ''
        },

        {
            id: 3,
            title: 'Дети',
            subtitle: '',
            link: '',
            pic: ''
        },

        {
            id: 4,
            title: 'Жизнь студии',
            subtitle: '',
            link: '',
            pic: ''
        },

        {
            id: 5,
            title: 'Экспертный блог',
            subtitle: '',
            link: '',
            pic: ''
        },

    ]

    constructor(props, context) {
        super(props, context);
    }

    renderFFList() {
        let result = [];
        this.array.forEach(elem=>{
            result.push(<FastFunction key={elem.id} id={elem.id} data={elem}/>);
        })
        return result;
    }

    render() {
        return (
            <div className='ff-list flex-row'>
                {this.renderFFList()}
            </div>
        );
    }

}
