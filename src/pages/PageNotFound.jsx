import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f7fafc',
                padding: 3,
            }}
        >
            <ErrorOutline sx={{ fontSize: 100, color: '#f44336', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2d3748', mb: 2 }}>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ color: '#718096', mb: 4 }}>
                The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{
                    backgroundColor: '#3182ce',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#2b6cb0',
                    },
                    fontWeight: 'bold',
                    borderRadius: 2,
                    padding: '10px 20px',
                }}
            >
                Go Back to Home
            </Button>
        </Box>
    );
};

export default PageNotFound;
