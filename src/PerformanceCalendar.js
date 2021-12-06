import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import React, { useState } from "react";
import { put } from "./ScoreCache"
import { Container } from "react-bootstrap";

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

const formatDate = (today) => {

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today.toString()
}

export { PerformanceCalendar, formatDate };