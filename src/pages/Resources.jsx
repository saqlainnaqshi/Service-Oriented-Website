import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Resources = () => {
    // Replace these with your actual YouTube video links
    const videos = [
        { title: 'How to use AI in our daily lives', url: 'https://www.youtube.com/embed/b0Aj0EPE-_s?si=08hcepOydefAAokE' },
        { title: 'UiPath Vs Automation', url: 'https://www.youtube.com/embed/iBhJW1rpLww?si=Z29Gbfom_GrFVMCd' },
    ];

    return (
        <div sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
                    YouTube Resources
                </Typography>

                <Grid container spacing={4}>
                    {videos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 2,
                                            fontWeight: 'bold',
                                            display: 'block',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {video.title}
                                    </Typography>

                                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={video.url}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={video.title}
                                            style={{ position: 'absolute', top: 0, left: 0 }}
                                        ></iframe>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Resources;
