import { Form, Badge, Container, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap'
import React, { useState } from 'react'
import PopUpMessage from './PopUpMessage'
import styles from './App.module.css'
import { PerformanceCalendar } from './PerformanceCalendar'
import { bestScore, totalEntries } from './util/ScoreUtil'
import { formatDate } from './util/DateUtil'
import { scoreDescription } from './util/Messages'
import { useAuth } from './context/authContext'
import PropTypes from 'prop-types'

export const DEFAULT_SCORE = 50

const PerformanceForm = ({ day }) => {
  if (!day) {
    day = formatDate(new Date())
  }
  const [value, setValue] = useState({
    date: day,
    points: DEFAULT_SCORE
  })
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
  )
}

PerformanceForm.propTypes = {
  day: PropTypes.string
}

const ScoreBadge = (props) => {
  const value = props.value
  const score = value.points
  console.log('scorebadge:' + score)
  if (score > 75) {
    return (
            <CustomBadge type="success" score={score} />
    )
  } else if (score > 25 && score <= 75) {
    return (
            <CustomBadge type="warning" score={score} />
    )
  } else {
    return (
            <CustomBadge type="danger" score={score} />
    )
  }
}

ScoreBadge.propTypes = {
  value: PropTypes.object.isRequired,
  points: PropTypes.string
}

const CustomBadge = (props) => {
  const type = props.type
  const score = props.score
  return (
        <>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{scoreDescription}</Tooltip>}>
                <h1><Badge pill bg={type}>
                    Productivity Score: <b>{score}</b>
                </Badge></h1>
            </OverlayTrigger>
        </>
  )
}

CustomBadge.propTypes = {
  type: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

/**
 * Score Range component
 * @param {*} param0
 * @returns
 */
const ScoreRange = (props) => {
  const value = props.value
  const setValue = props.setValue
  const score = value.points
  return (
        <Form.Range value={score} onChange={
            e => {
              const newScore = e.target.value
              console.log('slider change to: ' + newScore + ' on date: ' + value.date)
              setValue({
                points: newScore,
                date: value.date
              })
            }
        } />
  )
}

ScoreRange.propTypes = {
  value: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  points: PropTypes.string
}

export const Highlights = () => {
  const { currentUser } = useAuth()
  const email = currentUser.email
  return (
        <>
            <Container>
                        Best Score: {<BestScoreProgressBar score={bestScore(email)} />}
                        <Badge bg="secondary">Total entries: {totalEntries(email)}</Badge>
            </Container>
        </>
  )
}

const BestScoreProgressBar = (props) => {
  const score = props.score
  if (score > 75) {
    return (
            <ProgressBar variant="success" now={score} label={`${score}%`} />
    )
  } else if (score > 25 && score <= 75) {
    return (
            <ProgressBar variant="warning" now={score} label={`${score}%`} />
    )
  } else {
    return (
            <ProgressBar variant="danger" now={score} label={`${score}%`} />
    )
  }
}

BestScoreProgressBar.propTypes = {
  score: PropTypes.number.isRequired
}

export default PerformanceForm
