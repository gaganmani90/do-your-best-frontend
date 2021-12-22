import { Modal, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import React, { useState } from 'react'
import { put, getAllItems } from './persistence/ScoreCache'
import ScoreHistoryTable from './ScoreHistoryTable'
import { Highlights } from './PerformanceForm'
import { submitTip } from './util/Messages'
import { useAuth } from './context/authContext'
import PropTypes from 'prop-types'

const PopUpMessage = ({ title, message, value }) => {
  const { currentUser } = useAuth()

  if (!title) {
    title = 'Thank you'
  }
  if (!message) {
    message = 'Your self evaluation score is ' + value.points +
            ' for date:' + value.date + ' !'
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
        <>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{submitTip}</Tooltip>}>
                <Button variant="primary" onClick={() => {
                  buildCache(currentUser.email, value)
                  handleShow()
                }} size="lg">Submit</Button>
            </OverlayTrigger>

            <ScoreHistoryTable scoreItems={getAllItems(currentUser.email)} />
            <Highlights />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
            </Modal>
        </>
  )
}

PopUpMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

function buildCache (email, score) {
  put(email, score.date, score.points)
}

export default PopUpMessage
