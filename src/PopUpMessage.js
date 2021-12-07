import { Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { put, get, getAllItems } from "./ScoreCache"
import ScoreHistoryTable from "./ScoreHistoryTable";
import { Highlights } from "./PerformanceForm";

const NAME = "Gagan"

const PopUpMessage = ({ title, message, value }) => {
    if (!title) {
        title = "Thank you"
    }
    console.log(value['date'] + " popupmessage");
    if (!message) {
        message = "Your self evaluation score is " + value.points +
            " for date:" + value.date + " !"
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let tip = "It is best to submit productivity score at the end of day."

    return (
        <>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{tip}</Tooltip>}>
                <Button variant="primary" onClick={() => {
                    buildCache(value)
                    handleShow()
                }} size="lg">Submit</Button>
            </OverlayTrigger>

            <ScoreHistoryTable scoreItems={getAllItems()} />
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
    );
}

function buildCache(score) {
    put(NAME, score.date, score.points)
}


export default PopUpMessage;