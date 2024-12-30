import React from 'react';
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

// Dummy data for the tools with static Unsplash URLs for images in each category
const toolsData = {
    HyperAutomation: [
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    DigitalTransformation: [
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    SoftwareDevelopment: [
        'https://images.unsplash.com/photo-1506748686211-df07b4179b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDd8fHNvZnR3YXJlIGRldmVsb3BtZW50fGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1506796514233-ff699e0365d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDN8fHNvZnR3YXJlIGRldmVsb3BtZW50fGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1573497491209-bd0ab53fc5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    ],
    Consultation: [
        'https://images.unsplash.com/photo-1537737151-535aeb898e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1563062747-30d1c2f5fa83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580623391279-c45c7b4c6c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjA4OXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    ],
};

const QuestionsList = [
    'Why Choose BriskBold for HyperAutomation?',
    '• High quality Automatically Generated Documentation like PDDs and SDDs.',
    '• Reusable Component-based models for Accelerated Process Development.',
    '• Automated Quality Assurance lifecycle process.',
    '• Personalized Support Packages offered for your RPA programs.',
    '• Multi-Channel Support to achieve your automated business processes.',
];

const Tools = () => {
    return (
        <Box sx={{ width: '100%', paddingBottom: '30px' }}>
            {/* Table of Tools */}
            <TableContainer component={Paper} sx={{ marginBottom: '30px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Hyper Automation</TableCell>
                            <TableCell align="center">Digital Transformation</TableCell>
                            <TableCell align="center">Software Development</TableCell>
                            <TableCell align="center">Consultation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.keys(toolsData).map((category, index) => (
                                <TableCell key={index} align="center">
                                    {/* Container for Images in Each Column */}
                                    <Grid container direction="column" alignItems="center" spacing={2}>
                                        {toolsData[category].map((toolImage, imgIndex) => (
                                            <Grid item key={imgIndex}>
                                                <img
                                                    src={toolImage}
                                                    alt={`Tool ${imgIndex + 1}`}
                                                    style={{
                                                        width: '150px', // fixed size for each image
                                                        height: '150px',
                                                        objectFit: 'cover', // maintain aspect ratio
                                                        borderRadius: '8px',
                                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Generalized Questions */}
            <Box sx={{ marginTop: '40px' }}>
                {QuestionsList.map((question, index) => (
                    <Typography key={index} variant="body1" sx={{ fontWeight: index === 0 ? 'bold' : 'normal', marginBottom: '10px', color: index === 0 ? '#3182ce' : '#333' }}>
                        {question}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default Tools;
