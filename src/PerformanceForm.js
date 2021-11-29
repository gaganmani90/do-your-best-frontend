import { Form, Button, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import PopUpMessage from './PopUpMessage';
import styles from './App.module.css'

const PerformanceForm = () => {
    const [value, setValue] = useState(50);
    return (
        <>
            <div className={styles.center} >
                <Form.Label><h3>Give yourself a performance score: {value}</h3></Form.Label>
                <Form.Range value={value} onChange={
                    e => {
                        console.log("slider change to: " + value)
                        setValue(e.target.value)
                    }
                } />
                <PopUpMessage value={value} />
            </div>
        </>
    );
}


export default PerformanceForm;