import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import ScoreHistoryTable from './ScoreHistoryTable'
import { Highlights } from './PerformanceForm'
import { useAuth } from './context/authContext'
import PropTypes from 'prop-types'
import { SubmitScoreButton } from './components/SubmitScoreButton'
import { getAllItems } from './persistence/ScoreCache'

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
            <SubmitScoreButton email={currentUser.email} scoreItem={value} handleShow={handleShow} />

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
  title: PropTypes.string,
  message: PropTypes.string,
  value: PropTypes.object.isRequired
}

export default PopUpMessage
