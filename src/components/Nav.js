import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="absolute top-0 flex justify-between sm:flex-row p-5 md:justify-between items-center z-50 w-full">
            <a href="/"><img className="w-10 md:w-14 z-50" src="./images/logo.svg" alt="logo"/></a>
            <div className="hidden md:flex flex-grow justify-evenly max-w-2xl text-white-secondary">
                <a className="hover:text-white-primary z-50 font-medium" href="/">Home</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/search">Search</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/">Credits</a>
                <a className="hover:text-white-primary z-50 font-medium" href="/">About</a>
            </div>
            <div className="w-10 overflow-hidden h-10 md:w-14 md:h-14 md:hidden z-50">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon fontSize="large"/>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><a className="text-black-primary" href="/">Home</a></MenuItem>
                    <MenuItem onClick={handleClose}><a className="text-black-primary" href="/search">Search</a></MenuItem>
                    <MenuItem onClick={handleClose}><a className="text-black-primary" href="/">Credits</a></MenuItem>
                    <MenuItem onClick={handleClose}><a className="text-black-primary" href="/">About</a></MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default Nav;
