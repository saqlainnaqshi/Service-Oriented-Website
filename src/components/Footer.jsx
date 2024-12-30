import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2d3748',
                color: '#fff',
                py: 4,
                position: 'relative',
                width: '100%',
                bottom: 0,
                mt: 'auto',  // This ensures footer is pushed to the bottom of the page when content is short
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                About Us
                            </Link>
                            <Link href="/services" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Services
                            </Link>
                            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>

                    {/* Contact Information */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Box>
                            <Typography variant="body2">Email: info@yourcompany.com</Typography>
                            <Typography variant="body2">Phone: (+123) 456-7890</Typography>
                            <Typography variant="body2">Address: 123 Street, City, Country</Typography>
                        </Box>
                    </Grid>

                    {/* Social Media */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton color="inherit" sx={{ mr: 2 }}>
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" sx={{ mr: 2 }}>
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" sx={{ mr: 2 }}>
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="inherit" sx={{ mr: 2 }}>
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Newsletter Signup */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '10px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    marginRight: '10px',
                                    width: '100%',
                                    maxWidth: '300px',
                                }}
                            />
                            <button
                                style={{
                                    backgroundColor: '#3182ce',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Subscribe
                            </button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Footer Copyright */}
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
