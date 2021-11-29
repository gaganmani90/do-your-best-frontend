import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import React from "react";

const PerformanceCalendar = () => {
    return (
        <>
            <Datetime value={new Date()} />
        </>
    );
}

export default PerformanceCalendar;