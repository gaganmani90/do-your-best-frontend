import React, { Fragment } from 'react'
import { Container, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { ScoreItem } from './model/ScoreItem'

const ScoreItemRow = ({ scoreItem, row }) => {
  return (
        <tr key={row}>
            <td>{row}</td>
            <td>{scoreItem.date} </td>
            <td>{scoreItem.score} </td>
            <td>{scoreItem.updateCount} </td>
            <td>{scoreItem.timestamp} </td>
        </tr>
  )
}

ScoreItemRow.propTypes = {
  scoreItem: PropTypes.objectOf(ScoreItem).isRequired,
  row: PropTypes.number.isRequired
}

const ScoreHistoryTable = (props) => {
  // console.log(props.scoreItems)
  return (
        <Container>
                    <Table striped bordered hover>
                        <TableHeader></TableHeader>
                        <TableBody scoreItems={props.scoreItems}></TableBody>
                    </Table>
        </Container>

  )
}

ScoreHistoryTable.propTypes = {
  scoreItems: PropTypes.arrayOf(PropTypes.shape(ScoreItem)).isRequired
}

const TableBody = (props) => {
  return (
        <tbody key="table-body">
            {props.scoreItems.map((scoreItem, i) => {
              return (
                    <Fragment key={i}>
                        <ScoreItemRow scoreItem={scoreItem} row={i + 1}></ScoreItemRow>
                    </Fragment>
              )
            })}
        </tbody>
  )
}

TableBody.propTypes = {
  scoreItems: PropTypes.arrayOf(ScoreItem).isRequired
}

const TableHeader = () => {
  return (
        <thead className="thead-dark" key="header-1">
            <tr key="header-0">
                <th>#</th>
                <th>Date</th>
                <th>Score</th>
                <th>Update Count</th>
                <th>Most recent Update</th>
            </tr>
        </thead>
  )
}

export default ScoreHistoryTable
