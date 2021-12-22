import PropTypes from 'prop-types'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { submitTip } from '../util/Messages'
import React from 'react'
import { put } from '../persistence/ScoreCache'

/**
 * Submit button that connects with database to make an entry for give score
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const SubmitScoreButton = (props) => {
  const email = props.email
  const scoreItem = props.scoreItem

  return (
      <>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{submitTip}</Tooltip>}>
          <Button variant="primary" onClick={() => {
            put(email, scoreItem.date, scoreItem.points) // DB push
            props.handleShow()
          }} size="lg">Submit</Button>
        </OverlayTrigger>
      </>
  )
}

SubmitScoreButton.propTypes = {
  email: PropTypes.string.isRequired,
  scoreItem: PropTypes.object.isRequired,
  handleShow: PropTypes.func.isRequired
}
