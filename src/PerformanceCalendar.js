import 'react-datetime/css/react-datetime.css'
import Datetime from 'react-datetime'
import React, { useState } from 'react'
import { put } from './persistence/ScoreCache'
import { Container } from 'react-bootstrap'
import { formatDate } from './util/DateUtil'

const PerformanceCalendar = ({ setDate }) => {
  const [value, onChange] = useState(new Date())
  // const [score, setScore] = useState(JSON.parse(date))

  return (
        <>
                <Datetime value={value} onChange={
                    moment => {
                      const selectedDate = formatDate(moment.toDate())
                      setDate({
                        points: 50,
                        date: selectedDate
                      })
                      onChange()
                      console.log('date changed to: ' + selectedDate)
                    }
                } />
        </>
  )
}

export { PerformanceCalendar }
