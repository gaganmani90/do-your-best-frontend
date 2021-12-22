import { Badge, Container, ProgressBar } from 'react-bootstrap'
import React, { useState } from 'react'
import PopUpMessage from './PopUpMessage'
import styles from './App.module.css'
import { PerformanceCalendar } from './PerformanceCalendar'
import { bestScore, totalEntries } from './util/ScoreUtil'
import { formatDate } from './util/DateUtil'
import { useAuth } from './context/authContext'
import PropTypes from 'prop-types'
import { ScoreBadge } from './components/ScoreBadge'
import { ScoreRange } from './components/ScoreRange'

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
