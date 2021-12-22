import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Score Range that user can use to select their score from 0-100 before submitting.
 * @param {*} param0
 * @returns
 */
export const ScoreRange = (props) => {
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
