import React from "react";

import logo from '../../../pics/map/logo.jpg';
import vk from '../../../pics/social/vk.png';
import tg from '../../../pics/social/telegram.png';
import wa from '../../../pics/social/whatsapp.png';

export default function Map(props) {
    return (
        <div className='wrapper-map flex-col'>
            <span className='wrapper-address'>Контакты </span>
            <div className='pos-rel'>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd7007c3f41c78d9a2d2bf8da5420b2bc4faa7bacfe5aea6e09acb80345eea08&amp;source=constructor"
                    width="100%" height="540" frameBorder="0"/>
                <div className='map-card pos-abs'>
                    <div className='card-logo-wrapper'>
                        <img className='card-logo' src={logo}/>
                    </div>
                    <div className='card-title'>
                        <span>nebrevno</span>
                    </div>
                    <div className='card-subtitle'>
                        <span>stretch studio</span>
                    </div>
                    <div className='card-address'>
                        <span>ул. Пионерская 1, этаж 3, офис 312</span>
                    </div>
                    <div className='card-phones'>
                        <span>8 (914) 209-72-84</span>
                    </div>
                    <div className='social-links flex-row'>
                        <a href='https://vk.com/need.stretching'>
                            <img className='social-link vk' src={vk} alt='vk link'/>
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=89142097284&text&app_absent=0">
                            <img className='social-link wa' src={wa} alt='whatsapp link'/>
                        </a>

                        <a href='https://t.me/needstretching'>
                            <img className='social-link tg' src={tg} alt='telegram link'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
