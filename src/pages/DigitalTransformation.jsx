import React from 'react';
import CommonTabs from '../components/CommonTabs';

const DigitalTransformation = () => {
    const data = {
        tabs: [
            {
                title: 'Introduction',
                content: ['What is Digital Transformation?', 'Importance of Digital Transformation for businesses...', 'Key drivers for transformation...']
            },
            {
                title: 'Implementation',
                content: ['How to implement Digital Transformation...', 'Stages of implementing Digital Transformation...', 'Challenges and solutions...']
            },
            {
                title: 'Trends',
                content: ['Latest trends in Digital Transformation...', 'Emerging technologies in Digital Transformation...']
            },
        ]
    };

    return <CommonTabs data={data} />;
};

export default DigitalTransformation;
