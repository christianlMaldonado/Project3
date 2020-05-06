import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";

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
