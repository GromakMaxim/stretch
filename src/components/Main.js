import React, {Component} from "react";
import '../css/main.css';
import TopBanner from "./sections/TopBanner";
import '../css/defaults.css';
import AvailableCourses from "./sections/courses/AvailableCourses";
import SocialMediaWidget from "./sections/social/SocialMediaWidget";
import FastFunctionsWidget from "./sections/fast_functions/FastFunctionsWidget";
import AboutFounderWidget from "./sections/about_founder/AboutFounderWidget";
import FeedbackWidget from "./sections/feedback/FeedbackWidget";

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
            </div>
        );
    }
}
