import React from "react";

export default function Map(props) {
    return (
        <div className='wrapper-map flex-col'>
            <span className='wrapper-address'>Контакты </span>
            <div className='pos-rel'>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd7007c3f41c78d9a2d2bf8da5420b2bc4faa7bacfe5aea6e09acb80345eea08&amp;source=constructor"
                    width="100%" height="540" frameBorder="0"/>
                <div className='map-card pos-abs b1'>
                    <div className='card-big-logo'>

                    </div>
                    <div className='card-sublogo'></div>
                    <div className='card-address'>
                    </div>
                    <div className='card-phones'></div>
                    <div className='social-links'></div>
                </div>
            </div>
        </div>
    )
}
