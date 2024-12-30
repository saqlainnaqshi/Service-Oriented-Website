import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
} from "@mui/material";

const initialState = {
    name: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_50s3n9x",
                "template_zn3wt2e",
                e.target,
                "P_b7NZ9ItupI4_7oN"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    clearState();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const locations = [
        {
            name: "Dubai",
            address: [
                "Office 3507",
                "Churchill Executive Tower",
                "Business Bay, Dubai, UAE",
            ],
            mobile: "(+971) 554372731",
            whatsapp: "+971554372731",
            img: "src/assets/dubai.png",
        },
        {
            name: "Canada",
            address: [
                "100-4310, Sherwoodtowne Boulevard",
                "Mississauga, Ontario",
                "Canada, L4Z4C4",
            ],
            mobile: "(+1647) 4463712",
            whatsapp: "(+1647) 4463712",
            img: "src/assets/canada.png",
        },
        {
            name: "Japan",
            address: [
                "7th Floor Wakamatsu building",
                "Honchome 3-3-6, Chuo-ku",
                "Tokyo, Japan",
            ],
            mobile: "(+81) 8034365974",
            whatsapp: "(+81) 8034365974",
            img: "src/assets/Japan.png",
        },
        {
            name: "India",
            address: [
                "Bal Garden, Karan Nagar",
                "Srinagar, Jammu & Kashmir",
                "India",
            ],
            mobile: "(+91) 8899912129",
            whatsapp: "(+91) 8899912129",
            img: "src/assets/India.png",
        },
        {
            name: "United States",
            address: ["3400 COTTAGE WAY, STE G2 #24309", "Sacramento, CA 95825"],
            mobile: "(+1) 415 755 8939",
            img: "src/assets/Unitedstates.png",
        },
    ];

    return (
        <Box id="contact" sx={{ backgroundColor: "#f7fafc", py: 12 }}>
            <Container>
                {/* Contact Form */}
                <Box mb={8}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2d3748", mb: 4 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#718096", mb: 4 }}>
                        Please fill out the form below to send us an email, and we will get back to you as soon as possible.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        borderRadius: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        "& .Mui-focused": {
                                            borderColor: "#3182ce",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        borderRadius: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                        "& .Mui-focused": {
                                            borderColor: "#3182ce",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={handleChange}
                                    required
                                    sx={{
                                        borderRadius: 2,
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: 2,
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={4}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#3182ce",
                                    color: "#fff",
                                    "&:hover": {
                                        backgroundColor: "#2b6cb0",
                                    },
                                    fontWeight: "bold",
                                    borderRadius: 2,
                                    padding: "10px 20px",
                                }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </form>
                </Box>

                {/* Locations */}
                <Grid container spacing={4}>
                    {locations.map((location, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: 250, // Set a minimum height for consistency
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        height: "100%", // Ensure the content fills the card
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                        <img
                                            src={location.img}
                                            alt={`${location.name} icon`}
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: "50%" }}
                                        />
                                        <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
                                            {location.name}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ color: "#4a5568", mb: 2 }}>
                                        {location.address.map((line, idx) => (
                                            <Box key={idx}>{line}</Box>
                                        ))}
                                    </Typography>
                                    <Box sx={{ flexGrow: 1 }} /> {/* This pushes other content to the bottom */}
                                    <Typography variant="body2" sx={{ color: "#2d3748" }}>
                                        Mobile: {location.mobile}
                                    </Typography>
                                    {location.whatsapp && (
                                        <Typography variant="body2" sx={{ color: "#2d3748" }}>
                                            WhatsApp: {location.whatsapp}
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
