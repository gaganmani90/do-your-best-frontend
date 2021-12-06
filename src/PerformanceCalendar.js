import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import React, { useState } from "react";
import {put} from "./ScoreCache"

const NAME = "Gagan"

const PerformanceCalendar = ({setDate}) => {
    var today = new Date()

    return (
        <>
            <Datetime value={today} onChange={
                moment => {
                    var selectedDate = formatDate(moment.toDate())
                    setDate({
                        points: 50,
                        date: selectedDate
                    })
                    console.log("date changed to: " + selectedDate)
                    put(NAME, selectedDate, 50)
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

export {PerformanceCalendar, formatDate};