import 'react-datetime/css/react-datetime.css'
import Datetime from 'react-datetime'
import React, { useState } from 'react'
import { formatDate } from './util/DateUtil'
import PropTypes from 'prop-types'

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
                } defaultValue={new Date()} isValidDate={isValidDate}
                dateFormat={'DD-MMM-YYYY'}/>
        </>
  )
}

PerformanceCalendar.propTypes = {
  setDate: PropTypes.func.isRequired
}

/**
 * Cannot enter for future dates
 * @param current
 * @returns {*}
 */
const isValidDate = (current) => {
  const today = Datetime.moment()
  return current.isBefore(today)
}

export { PerformanceCalendar }
