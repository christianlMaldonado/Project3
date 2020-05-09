import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./style.css";
import logout from "../../helpers/logout";

export default function Mobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mobile-nav">
      <Button
        className="menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <i className="fa fa-bars fa-2x"></i>
      </Button>
      <Menu
        className="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="menu-item-mobile">
          <a href="/home">Home</a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-item-mobile">
          <a href="/grades">Grades</a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-item-mobile">
          <a href="/attendance">Attendance</a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-item-mobile">
          <a href="/assignments">Assignments</a>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menu-item-mobile">
          <a href="/virtual">Virtual</a>
        </MenuItem>

        <MenuItem onClick={logout} className="menu-item-mobile">
          <a href="/">Sign Out</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
