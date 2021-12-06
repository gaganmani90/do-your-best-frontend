import { Form, Button, Badge, Container, ProgressBar } from 'react-bootstrap';
import React, { useState } from 'react';
import PopUpMessage from './PopUpMessage';
import styles from './App.module.css'
import { formatDate, PerformanceCalendar } from "./PerformanceCalendar"
import { bestScore, totalEntries } from './util/ScoreUtil';

let DEFAULT_SCORE = 50;

const PerformanceForm = ({ day }) => {
    if (!day) {
        day = formatDate(new Date())
    }
    const [value, setValue] = useState({
        date: day,
        points: 50
    });
    return (
        <>
            <Container>
                <div className={styles.center} >
                    <ScoreBadge value={value} />
                    <PerformanceCalendar date={value} setDate={setValue} />
                    <ScoreRange value={value} setValue={setValue} />
                    <PopUpMessage value={value} />
                </div>
            </Container>
        </>
    );
}


const ScoreBadge = ({ value }) => {

    let score = value.points;
    console.log("scorebadge:" + score)
    if (score > 75) {
        return (
            <CustomBadge type="success" score={score} />
        );
    } else if (score > 25 && score <= 75) {
        return (
            <CustomBadge type="warning" score={score} />
        );
    } else {
        return (
            <CustomBadge type="danger" score={score} />
        );
    }
}

const CustomBadge = ({ type, score }) => {
    return (
        <h1><Badge pill bg={type}>
            <b>{score}</b>
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
                console.log("slider change to: " + newScore + " on date: " + value.date)
                setValue({
                    points: newScore,
                    date: value.date
                })
            }
        } />
    );
}

export const Highlights = () => {
    return (
        <>
            Best Score: {<BestScoreProgressBar score={bestScore()} />}
            <Badge bg="secondary">Total entries: {totalEntries()}</Badge>
        </>
    )
}

const BestScoreProgressBar = ({ score }) => {
    if (score > 75) {
        return (
            <ProgressBar variant="success" animated now={score} label={`${score}%`} />
        );
    } else if (score > 25 && score <= 75) {
        return (
            <ProgressBar variant="warning" animated now={score} label={`${score}%`} />
        );
    } else {
        return (
            <ProgressBar variant="danger" animated now={score} label={`${score}%`} />
        );
    }
}

export default PerformanceForm;