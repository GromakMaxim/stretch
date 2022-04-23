import React, {Component} from "react";
import '../css/main.css';
import TopBanner from "./sections/TopBanner";
import '../css/defaults.css';
import AvailableCourses from "./sections/courses/AvailableCourses";
import SocialMediaWidget from "./sections/social/SocialMediaWidget";

export default class Main extends Component {
    render() {
        return (
            <div>
                <TopBanner/>
                <AvailableCourses/>
                <SocialMediaWidget/>
            </div>
        );
    }
}
