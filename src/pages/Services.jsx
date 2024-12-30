import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Typography, Box, Card, CardContent } from "@mui/material";
// Importing the required icons
import { faCogs, faThumbsUp, faPrint, faLanguage, faChild, faRobot } from "@fortawesome/free-solid-svg-icons";


export const Services = ({ data }) => {
    // Mapping icon class names to the correct FontAwesome icons
    const iconMapping = {
        "fa fa-cogs": faCogs,
        "fa fa-thumbs-up": faThumbsUp,
        "fa fa-print": faPrint,
        "fa fa-language": faLanguage,
        "fa fa-robot": faRobot,
        "fa fa-child": faChild,
    };

    return (
        <div id="services" className="py-16 bg-gradient-to-r from-blue-50 via-white to-gray-100" style={{ marginBottom: '50px' }}>
            <Container>
                {/* Section Title */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" className="text-4xl font-bold text-gray-800">
                        Our Services
                    </Typography>
                    <Typography variant="h5" className="text-lg text-gray-600 mt-4">
                        We Build Robots. For a Better Future of Human Force.
                    </Typography>
                </Box>

                {/* Service Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {data
                        ? data.map((service, i) => {
                            // Getting the correct icon from the mapping
                            const icon = iconMapping[service.icon] || faCogs;  // Default to faCogs if no match

                            return (
                                <Grid item xs={12} sm={6} md={4} key={`${service.name}-${i}`}>
                                    <Card
                                        sx={{
                                            borderRadius: "12px",
                                            boxShadow: 3,
                                            height: "100%",  // Ensures consistent card height
                                            display: "flex",
                                            flexDirection: "column",  // Aligns content properly
                                            "&:hover": {
                                                boxShadow: 6,
                                                transform: "scale(1.05)",
                                                transition: "all 0.3s ease",
                                            },
                                        }}
                                    >
                                        <CardContent className="text-center py-6 px-4 flex-grow">
                                            {/* Icon */}
                                            <Box mb={3}>
                                                <FontAwesomeIcon
                                                    icon={icon}
                                                    className="text-indigo-600"
                                                    style={{ fontSize: "3rem" }}
                                                />
                                            </Box>

                                            {/* Service Description */}
                                            <Typography variant="h6" className="text-xl font-medium text-gray-800 mb-2">
                                                {service.name}
                                            </Typography>
                                            <Typography variant="body2" className="text-gray-600">
                                                {service.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            );
                        })
                        : "Loading..."}
                </Grid>
            </Container>
        </div>
    );
};
