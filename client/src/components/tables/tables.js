import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Body from "./tablebody";
import Cell from "./cell";
import Container from "./container";
import Header from "./header";
import Row from "./row";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Jane Smitty", 159, 6.0, 24),
  createData("Jose Eskes", 237, 9.0, 37),
  createData("James Claire", 262, 16.0, 24),
  createData("Jinny Potter", 305, 3.7, 67),
  createData("Jay Coulee", 356, 16.0, 49),
];

export default function Tables() {
  const classes = useStyles();

  return (
    <Container component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <Header>
          <Row>
            <Cell>
              <b>Student Name</b>
            </Cell>
            <Cell align="right">
              <b>Total</b>
            </Cell>
            <Cell align="right">
              <b>Assignments</b>
            </Cell>
            <Cell align="right">
              <b>Tests</b>
            </Cell>
          </Row>
        </Header>
        <Body>
          {rows.map((row) => (
            <Row key={row.name}>
              <Cell component="th" scope="row">
                {row.name}
              </Cell>
              <Cell align="right">{row.calories}</Cell>
              <Cell align="right">{row.fat}</Cell>
              <Cell align="right">{row.carbs}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </Container>
  );
}
