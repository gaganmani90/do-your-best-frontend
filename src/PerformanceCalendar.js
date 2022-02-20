import 'react-datetime/css/react-datetime.css'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'
import { formatDate } from './util/DateUtil'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

// TODO: Fix UI alignment of calendar: HIGH
const PerformanceCalendar = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  // const [score, setScore] = useState(JSON.parse(date))

  return (
        <>
            <DatePicker selected={selectedDate} onChange={
                date => {
                  const formattedDate = formatDate(date)
                  setDate({
                    points: 50,
                    date: formattedDate
                  })
                  setSelectedDate(date)
                  console.log('date changed to: ' + formattedDate)
                }
            } defaultValue={new Date()}
                        maxDate={moment().toDate()}
                        highlightDates={[new Date()]}
            />
        </>
  )
}

PerformanceCalendar.propTypes = {
  setDate: PropTypes.func.isRequired
}

export { PerformanceCalendar }
