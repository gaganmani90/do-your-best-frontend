import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import React, { useState } from "react";

const PerformanceCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Datetime value={date} onChange={
                moment => {
                    var selectedDate = formatDate(moment.toDate())
                    console.log("date changed to: " + selectedDate)
                    localStorage.setItem(selectedDate, "")
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

export default PerformanceCalendar;