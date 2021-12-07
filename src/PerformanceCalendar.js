import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import React, { useState } from "react";
import { put } from "./ScoreCache"
import { Container } from "react-bootstrap";
import { formatDate } from "./util/DateUtil";

const NAME = "Gagan"

const PerformanceCalendar = ({ setDate }) => {

    const [value, onChange] = useState(new Date());
    //const [score, setScore] = useState(JSON.parse(date))

    return (
        <>
                <Datetime value={value} onChange={
                    moment => {
                        var selectedDate = formatDate(moment.toDate())
                        setDate({
                            points: 50,
                            date: selectedDate
                        })
                        onChange()
                        console.log("date changed to: " + selectedDate)
                        //put(NAME, selectedDate, 50)
                    }
                } />
        </>
    );
}

export { PerformanceCalendar };