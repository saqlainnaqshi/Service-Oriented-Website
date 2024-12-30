import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from "../assets/logoorg.png";

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#2d3748', boxShadow: 3 }}>
            <Toolbar>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: 90, borderRadius: '10px', height: 100 }}
                    />
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                    <Button component={Link} to="/" color="inherit" sx={{ marginRight: 2 }}>
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit" sx={{ marginRight: 2 }}>
                        About
                    </Button>
                    <Button
                        color="inherit"
                        sx={{ marginRight: 2 }}
                        onClick={handleMenuClick}
                    >
                        Services
                    </Button>
                    <Button component={Link} to="/customer" color="inherit" sx={{ marginRight: 2 }}>
                        Customer
                    </Button>
                    <Button component={Link} to="/tools" color="inherit" sx={{ marginRight: 2 }}>
                        Tools
                    </Button>
                    <Button component={Link} to="/resources" color="inherit" >
                        Resources
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                        sx={{ mt: 1 }}
                    >
                        <MenuItem component={Link} to="/hyper-automation" onClick={handleCloseMenu}>
                            Hyper Automation
                        </MenuItem>
                        <MenuItem component={Link} to="/digital-transformation" onClick={handleCloseMenu}>
                            Digital Transformation
                        </MenuItem>
                        <MenuItem component={Link} to="/software-development" onClick={handleCloseMenu}>
                            Software/Web Design & Development
                        </MenuItem>
                        <MenuItem component={Link} to="/consultation" onClick={handleCloseMenu}>
                            Consultation / Training
                        </MenuItem>
                    </Menu>
                    <Button component={Link} to="/contact" color="inherit">
                        Contact Us
                    </Button>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    color="inherit"
                    sx={{ display: { xs: 'block', lg: 'none' } }}
                    onClick={handleMobileMenuToggle}
                >
                    <MenuIcon />
                </IconButton>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <Box sx={{ position: 'absolute', top: '64px', right: 0, backgroundColor: 'white', boxShadow: 3 }}>
                        <Button component={Link} to="/" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Home
                        </Button>
                        <Button component={Link} to="/about" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            About
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ width: '100%', textAlign: 'left' }}
                            onClick={handleMenuClick}
                        >
                            Services
                        </Button>
                        <Button component={Link} to="/customer" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Customer
                        </Button>
                        <Button component={Link} to="/tools" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Tools
                        </Button>
                        <Button component={Link} to="/resources" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Resources
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            sx={{ mt: 1 }}
                        >
                            <MenuItem component={Link} to="/hyper-automation" onClick={handleCloseMenu}>
                                Hyper Automation
                            </MenuItem>
                            <MenuItem component={Link} to="/digital-transformation" onClick={handleCloseMenu}>
                                Digital Transformation
                            </MenuItem>
                            <MenuItem component={Link} to="/software-development" onClick={handleCloseMenu}>
                                Software/Web Design & Development
                            </MenuItem>
                            <MenuItem component={Link} to="/consultation" onClick={handleCloseMenu}>
                                Consultation / Training
                            </MenuItem>
                        </Menu>
                        <Button component={Link} to="/contact" color="inherit" sx={{ width: '100%', textAlign: 'left' }}>
                            Contact Us
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
