import React, {Component} from "react";
import '../css/main.css';
import TopBanner from "./sections/TopBanner";
import '../css/defaults.css';
import '../css/carousel.css';
import AvailableCourses from "./sections/courses/AvailableCourses";
import SocialMediaWidget from "./sections/social/SocialMediaWidget";
import FastFunctionsWidget from "./sections/fast_functions/FastFunctionsWidget";
import AboutFounderWidget from "./sections/about_founder/AboutFounderWidget";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";
import QuestionsWidget from "./sections/questions/QuestionsWidget";
import Carousel from "./sections/photos/Carousel";
import Map from "./sections/map/Map";
import Footer from "./sections/footer/Footer";

export default class Main extends Component {
    render() {
        return (
            <div>
                <TopBanner/>
                <AvailableCourses/>
                <SocialMediaWidget/>
                <FastFunctionsWidget/>
                <AboutFounderWidget/>
                <FeedbackWidget/>
                <QuestionsWidget/>
                <Carousel/>
                <Map/>
                <Footer/>
            </div>
        );
    }
}
