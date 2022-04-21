import React, {Component} from "react";
import locationPic from "../../pics/top_banner/placeholder.png";

export default class TopBanner extends Component {
    render() {
        return (
            <div className='top-banner flex-col'>
                <div className='wrap'>
                    <div className='title'>Need Stretching</div>
                    <div className='subtitle'>any description can be placed here</div>
                </div>

                <div className='location flex-col'>
                    <img className='location-pic' src={locationPic} alt='studio location'/>
                    <div className='address'>Пионерская улица 1, г.Хабаровск</div>
                </div>
            </div>

        );
    }
}
