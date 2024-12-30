import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Image } from "./image";

export const Gallery = (props) => {
    return (
        <div id="portfolio" style={{ backgroundColor: "#f7fafc", paddingTop: "3rem", paddingBottom: "3rem" }}>
            <Container>
                {/* Section Title */}
                <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2d3748" }}>
                        Gallery
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#718096",
                            maxWidth: "42rem",
                            margin: "auto",
                            marginTop: "1rem",
                        }}
                    >
                        Explore our AI Gallery, showcasing innovative projects that harness
                        the power of artificial intelligence to transform industries. From
                        automation to data analysis, see how AI is shaping the future.
                    </Typography>
                </Box>

                {/* Gallery Items */}
                <Grid container spacing={4}>
                    {props.data ? (
                        props.data.map((d, i) => (
                            <Grid
                                item
                                key={`${d.title}-${i}`}
                                xs={12}
                                sm={6}
                                md={4}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <div
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        overflow: "hidden",
                                        borderRadius: "12px",  // Round corners for images
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    }}
                                >
                                    <Image
                                        title={d.title}
                                        largeImage={d.largeImage}
                                        smallImage={d.smallImage}
                                        sx={{
                                            borderRadius: "12px",  // Round corners for images
                                            width: "100%",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.05)",  // Zoom on hover
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Shadow on hover
                                            },
                                        }}
                                    />
                                </div>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ color: "#718096", textAlign: "center" }}>
                            Loading...
                        </Typography>
                    )}
                </Grid>
            </Container>
        </div>
    );
};
