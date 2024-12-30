import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Paper } from '@mui/material';

const CommonTabs = ({ data }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', bgcolor: '#f4f6f8', paddingBottom: '30px' }}>
            {/* Tabs Header */}
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                aria-label="common tabs"
                sx={{
                    borderBottom: 2,
                    borderColor: 'divider',
                    marginBottom: '20px',
                }}
            >
                {data.tabs.map((tab, index) => (
                    <Tab
                        label={tab.label}
                        key={index}
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            textTransform: 'none',
                            '&.Mui-selected': {
                                color: '#3182ce',
                            },
                        }}
                    />
                ))}
            </Tabs>

            {/* Tab Content */}
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={{ padding: '20px', borderRadius: '8px', boxShadow: 3, width: '70%' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                marginBottom: '16px',
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {data.tabs[selectedTab].title}
                        </Typography>
                        {data.tabs[selectedTab].content.map((content, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    paddingBottom: '10px',
                                    color: '#333',
                                    lineHeight: '1.6',
                                }}
                            >
                                {content}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CommonTabs;
