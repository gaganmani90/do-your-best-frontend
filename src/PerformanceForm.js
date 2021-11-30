import { Form, Button, Badge } from 'react-bootstrap';
import React, { useState } from 'react';
import PopUpMessage from './PopUpMessage';
import styles from './App.module.css'

const PerformanceForm = ({ day }) => {
    if (!day) {
        day = formatDate();
    }
    const [value, setValue] = useState({
        date: day,
        points: 50
    });
    return (
        <>
            <div className={styles.center} >
                <ScoreBadge value={value} />
                <ScoreRange value={value} setValue={setValue} />
                <PopUpMessage value={value} />
            </div>
        </>
    );
}

const ScoreBadge = ({ value }) => {
    
    let score = value.points;
    console.log("scorebadge:"+score)
    if (score > 75) {
        return (
            <CustomBadge type="success" score={score}/>
        );
    } else if (score > 25 && score <= 75) {
        return (
            <CustomBadge type="warning" score={score}/>
        );
    } else {
        return (
            <CustomBadge type="danger" score={score}/>
        );
    }
}

const CustomBadge = ({ type, score }) => {
    return (
        <h1><Badge pill bg={type}>
            {score}
        </Badge></h1>
    );
}

/**
 * Score Range component
 * @param {*} param0 
 * @returns 
 */
const ScoreRange = ({ value, setValue }) => {
    var score = value.points;
    return (
        <Form.Range value={score} onChange={
            e => {
                var newScore = e.target.value
                console.log("slider change to: " + newScore+" on date: "+value.date)
                setValue({
                    points: newScore,
                    date: value.date
                })
            }
        } />
    );
}

function formatDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    return today.toString()
}


export default PerformanceForm;