import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
    // Fallback image if no smallImage or largeImage is provided
    const defaultImage = "/assets/background.jpg"; // Add a valid placeholder image path here

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for the image container
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for hover
            }}
        >
            {/* Hover Effect */}
            <a
                href={largeImage || defaultImage} // Fallback to default image if largeImage is not provided
                title={title}
                data-lightbox-gallery="gallery1"
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    {/* Hover Text */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                            color: "white",
                            fontSize: "1.25rem",
                            fontWeight: "600",
                            textAlign: "center",
                            padding: "1rem",
                        }}
                        className="group-hover:opacity-100 group"
                    >
                        <h4>{title}</h4>
                    </div>
                    {/* Image */}
                    <img
                        src={smallImage || defaultImage} // Fallback to default image if smallImage is not provided
                        alt={title}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                            borderRadius: "12px", // Rounded corners for images
                        }}
                        className="group-hover:scale-105"
                    />
                </div>
            </a>
        </div>
    );
};
