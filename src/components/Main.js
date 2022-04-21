import React, {Component} from "react";
import '../css/main.css';
import TopBanner from "./sections/TopBanner";
import '../css/defaults.css';
import AvailableCourses from "./sections/courses/AvailableCourses";

export default class Main extends Component {
    render() {
        return (
            <div>
                <TopBanner/>
                <AvailableCourses/>
            </div>
        );
    }
}
