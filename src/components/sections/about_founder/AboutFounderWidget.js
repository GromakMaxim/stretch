import React, {Component} from "react";
import founderPic from '../../../pics/founder/main1.jpg';

export default class AboutFounderWidget extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='about-founder flex-row'>
                <div className='about-text flex-col'>
                    <h2>Алина Семёнова</h2>
                    <h3>Основатель & Тренер</h3>
                    <div className='about-descr'>Человечек забывает о том, что рожден двигаться.
                        ﻿Поэтому цель нашей работы - рождать любовь к осознанному фитнесу, дарить здоровье и знания.</div>
                </div>
                <img src={founderPic} className='founder-pic'/>
            </div>
        );
    }
}
