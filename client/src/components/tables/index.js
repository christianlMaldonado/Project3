import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

export function Container(props) {
  return <TableContainer {...props}>{props.children}</TableContainer>;
}

export function TBody(props) {
  return <TableBody {...props}>{props.children}</TableBody>;
}

export function Row(props) {
  return <TableRow {...props}>{props.children}</TableRow>;
}

export function Header(props) {
  return <TableHead {...props}>{props.children}</TableHead>;
}

export function Cell(props) {
  return <TableCell {...props}>{props.children}</TableCell>;
}

export function Tbl(props) {
  const useStyles = makeStyles({
    table: {
      mminWidth: 650,
    },
  });
  const classes = useStyles();

  return (
    <Table className={classes.table} size="small" aria-label="a dense table">
      {props.children}
    </Table>
  );
}
