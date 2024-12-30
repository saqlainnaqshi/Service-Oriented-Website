import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample image URL for the carousel
const carouselImages = [
    'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735406818183-a1162c38e6e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// Arrow button style
const arrowStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    color: '#FF6F61',
    cursor: 'pointer',
    outline: 'none',
    padding: '0', // Remove default padding to adjust the button size
    zIndex: 10, // Ensure the arrows are on top of images
};

const Customer = () => {
    // Carousel settings with custom arrows
    const settings = {
        dots: true, // Show dots at the bottom of the carousel
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 images at a time
        slidesToScroll: 1, // Scroll one image at a time
        centerMode: true, // To make the selected image appear in the center
        focusOnSelect: true, // Focus on the selected image
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // On small screens, show 2 images
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // On extra small screens, show 1 image
                },
            },
        ],
        nextArrow: (
            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                <button style={arrowStyle}>→</button>
            </div>
        ),
        prevArrow: (
            <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                <button style={arrowStyle}>←</button>
            </div>
        ),
    };

    return (
        <Box sx={{ width: '100%', padding: '30px' }}>
            {/* Heading with Gradient Text */}
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #FF6F61, #6B5B95)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    fontSize: '2rem',
                    letterSpacing: '1px',
                }}
            >
                Trusted by top analysts, loved by customers.
            </Typography>

            {/* Carousel for Images */}
            <Slider {...settings} style={{ position: 'relative' }}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Customer ${index}`}
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                margin: '0 auto', // Center the images
                                display: 'block', // Ensures images are block level
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default Customer;
