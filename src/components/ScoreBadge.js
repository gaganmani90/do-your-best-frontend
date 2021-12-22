import PropTypes from 'prop-types'
import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { scoreDescription } from '../util/Messages'
import React from 'react'

/**
 * Output productivity score that user sees after submitting their input
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ScoreBadge = (props) => {
  const value = props.value
  const score = value.points
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
