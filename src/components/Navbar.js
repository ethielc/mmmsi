import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));



function Navbar() {
    let history = useHistory();
    
    function cuenta(){
        history.push("/cuenta")
    }

    function home(){
        history.push("/home")
    }

    function postular(){
        history.push("/postular")
    }

    function postulaciones(){
        history.push("/mis-postulaciones")
    }

    function login(){
        history.push("/")
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    return (
		<nav className="navbar">

            <Link className='navbar-logo' to="/home">
                SPA
                <i class="fas fa-university"></i>
            </Link>

            <ul className="nav-menu">
                <li className="nav-item">
                    <div className="nav-links">
                    <Button type="button" onClick={home}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#009879",
                        padding: "5px 5px",
                        fontSize: "16px",
                        margin: "10px",
                        color: "white",
                        font: "sans-serif"
                    }}>
                        Home
                    </Button>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="nav-links">
                    <Button type="button" onClick={postular}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#009879",
                        padding: "5px 5px",
                        fontSize: "16px",
                        margin: "10px",
                        color: "white",
                        font: "sans-serif"
                    }}>
                        Postular
                    </Button>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="nav-links">
                    <Button type="button" onClick={postulaciones}
                    style={{
                        borderRadius: 5,
                        backgroundColor: "#009879",
                        padding: "5px 5px",
                        fontSize: "16px",
                        margin: "10px",
                        color: "white",
                        font: "sans-serif"
                    }}>
                        Postulaciones
                    </Button>
                    </div>
                </li>

                <li className="nav-item">
                <div className="nav-links">
                    
                    <div>
                        <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#009879",
                            padding: "5px 5px",
                            fontSize: "16px",
                            margin: "10px",
                            color: "white",
                            font: "sans-serif"
                        }}
                        >
                        Cuenta
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={cuenta}>Mi perfil</MenuItem>
                                   
                                    <MenuItem onClick={login}>Cerrar sesión</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div>
                </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
