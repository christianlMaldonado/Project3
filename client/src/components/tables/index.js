import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

export function Container(props) {
  return <TableContainer {...props} />;
}
export function Body(props) {
  return <TableBody {...props} />;
}
export function Row(props) {
  return <TableRow {...props} />;
}
export function Header(props) {
  return <TableHead {...props} />;
}
export function Cell(props) {
  return <TableCell {...props} />;
}
