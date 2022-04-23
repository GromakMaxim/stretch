import React, {Component} from "react";
import vk from '../../../pics/social/vk.png';
import insta from '../../../pics/social/instagram.png';
import tg from '../../../pics/social/telegram.png';
import wa from '../../../pics/social/whatsapp.png';
import SocialNetwork from "./SocialNetwork";

export default class SocialMediaWidget extends Component {
    array = [
        {
            id: 0,
            title: 'vk',
            link: 'https://vk.com/need.stretching',
            pic: vk,
        },
        {
            id: 1,
            title: 'insta',
            link: 'https://instagram.com/need.stretching',
            pic: insta,
        },
        {
            id: 2,
            title: 'tg',
            link: 'https://web.telegram.org/z/',
            pic: tg,
        },
        {
            id: 3,
            title: 'wa',
            link: 'https://www.whatsapp.com/?lang=ru',
            pic: wa,
        },
    ]


    constructor(props, context) {
        super(props, context);
    }

    renderSocials() {
        let result = [];
        this.array.forEach(elem => {
            result.push(<SocialNetwork key={elem.id} id={elem.id} data={elem}/>);

        })
        return result;
    }

    render() {
        return (
            <div className='socials flex-row'>
                {this.renderSocials()}
            </div>
        );
    }
}
