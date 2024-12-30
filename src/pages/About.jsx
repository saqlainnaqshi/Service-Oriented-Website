import React from "react";
import { Container, Typography, Box, List, ListItem, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import abouImage from "../assets/about.jpg"; // Ensure image is used effectively

export const About = (props) => {
    return (
        <div id="about" className="bg-gradient-to-r from-blue-50 via-gray-100 to-white py-20" style={{ marginBottom: '50px' }}>
            <Container>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Image Section */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundImage: `url(${abouImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "400px",
                                borderRadius: "10px",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            }}
                        ></Box>
                    </Grid>

                    {/* Text Section */}
                    <Grid item xs={12} md={6}>
                        <Box className="about-text space-y-6">
                            {/* About Us Title */}
                            <Typography
                                variant="h4"
                                className="font-bold text-gray-800"
                                sx={{ fontWeight: 600 }}
                            >
                                About Us
                            </Typography>

                            {/* Paragraph Text */}
                            <Typography
                                variant="body1"
                                className="text-gray-600"
                                sx={{
                                    lineHeight: 1.6,
                                    color: "#333",
                                    fontSize: "1.1rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                {props.data ? props.data.paragraph : "Loading..."}
                            </Typography>

                            {/* Why Choose Us Section */}
                            <Typography
                                variant="h5"
                                className="font-semibold text-gray-800"
                                sx={{
                                    fontWeight: 600,
                                    marginBottom: "1rem",
                                }}
                            >
                                Why Choose Us?
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <List className="list-disc pl-6">
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                <ListItem
                                                    key={`${d}-${i}`}
                                                    className="text-gray-600"
                                                    sx={{ fontSize: "1rem", lineHeight: 1.8 }}
                                                >
                                                    {d}
                                                </ListItem>
                                            ))
                                            : "Loading..."}
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <List className="list-disc pl-6">
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                <ListItem
                                                    key={`${d}-${i}`}
                                                    className="text-gray-600"
                                                    sx={{ fontSize: "1rem", lineHeight: 1.8 }}
                                                >
                                                    {d}
                                                </ListItem>
                                            ))
                                            : "Loading..."}
                                    </List>
                                </Grid>
                            </Grid>

                            {/* Call-to-Action Button */}
                            <Box mt={4}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        padding: "12px 30px",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        borderRadius: "5px",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                        "&:hover": {
                                            backgroundColor: "#1d4ed8", // Adjust hover color
                                        },
                                    }}
                                >
                                    Get In Touch
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
