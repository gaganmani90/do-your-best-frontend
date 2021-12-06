import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import {put, get, getAllItems} from "./ScoreCache"
import ScoreHistoryTable from "./ScoreHistoryTable";
import { Highlights } from "./PerformanceForm";

const NAME = "Gagan"

const PopUpMessage = ({ title, message, value }) => {
    if (!title) {
        title = "Thank you"
    }
    console.log(value['date']+ " popupmessage");
    if (!message) {
        message = "Your self evaluation score is " + value.points + 
        " for date:" + value.date + " !"
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={() => {
                buildCache(value)
                setShow(true)
            }} size="lg">Submit</Button>


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