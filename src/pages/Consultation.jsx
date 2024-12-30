import React from 'react';
import CommonTabs from '../components/CommonTabs';

const Consultation = () => {
    const data = {
        tabs: [
            {
                title: 'Our Expertise',
                content: ['Consulting in AI & Automation...', 'Consulting in Cloud Transformation...', 'Consulting in Digital Strategy...']
            },
            {
                title: 'Approach',
                content: ['Our consulting approach...', 'Collaborative and tailored solutions...', 'Steps in our consulting process...']
            },
            {
                title: 'Case Studies',
                content: ['Case Study 1: Consulting in Healthcare...', 'Case Study 2: Consulting for Retail...', 'Case Study 3: Consulting in Manufacturing...']
            },
        ]
    };

    return <CommonTabs data={data} />;
};

export default Consultation;
