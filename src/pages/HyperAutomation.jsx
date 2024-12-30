import React from 'react';
import CommonTabs from '../components/CommonTabs';


const HyperAutomation = () => {
    const data = {
        tabs: [
            {
                label: "Tab 1",
                title: "Hyper Automation",
                content: [
                    "Hyper automation refers to automating complex processes using artificial intelligence and machine learning.",
                    "It improves efficiency and reduces human error in various business operations.",
                ],
            },
            {
                label: "Tab 2",
                title: "Digital Transformation",
                content: [
                    "Digital transformation is the integration of digital technologies into all areas of business.",
                    "It leads to fundamental changes in how businesses operate and deliver value to customers.",
                ],
            },
            {
                label: "Tab 3",
                title: "Software Development",
                content: [
                    "Software development involves writing, designing, and maintaining code for applications.",
                    "It includes testing, debugging, and deploying software for different platforms.",
                ],
            },
            {
                label: "Tab 4",
                title: "Consultation",
                content: [
                    "Consultation services provide expert advice to businesses looking to improve their operations.",
                    "Consultants guide organizations through complex business challenges and offer solutions.",
                ],
            },
        ],
    };


    return <CommonTabs data={data} />;
};

export default HyperAutomation;
