import React, {Component} from "react";
import Question from "./Question";
import addressPic from '../../../pics/Q&A/address1.png';
import moreBtn from '../../../pics/Q&A/plus_w.png';

export default class QuestionsWidget extends Component {

    array = [
        {
            id: 0,
            q: 'Что взять с собой на тренировку?',
            a: 'Форма для занятий:' +
                '- футболка;\n' +
                '- леггинсы;\n' +
                '- убранный волос;\n' +
                '- носочки (или босиком);\n' +
                '- кроссовки не потребуются.\n' +
                '\n' +
                'В студии не используется одноразовая посуда, рекомендуем взять многоразовую бутылку.\n' +
                'Рекомендуемый последний прием пищи - 1,5 часа до начала занятия.'
        },
        {
            id: 1,
            q: 'Как добраться?',
            a: 'вот так добраться'
        }
    ]

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='qa-list'>
                <Question q='Что взять с собой на тренировку?' btnPic={moreBtn}>
                    <div className='answer-descr'>
                        Форма для занятий:<br/>
                        - футболка;<br/>
                        - леггинсы;<br/>
                        - убранный волос;<br/>
                        - носочки (или босиком);<br/>
                        - кроссовки не потребуются.<br/>
                        <br/>
                        В студии не используется одноразовая посуда, рекомендуем взять многоразовую бутылку.<br/>
                        Рекомендуемый последний прием пищи - 1,5 часа до начала занятия.<br/>
                    </div>
                </Question>

                <Question q='Как добраться?' btnPic={moreBtn}>
                    <div className='answer-descr flex-col'>
                        <img className='how-to-get-there' src={addressPic}/>
                        ул Пионерская 1, этаж 3, офис 312
                    </div>
                </Question>
            </div>
        );
    }

}
