import React from 'react';
import CommonTabs from '../components/CommonTabs';

const SoftwareDevelopment = () => {
    const data = {
        tabs: [
            {
                title: 'Services',
                content: ['Custom Software Development...', 'Enterprise Application Development...', 'Mobile App Development...']
            },
            {
                title: 'Technologies',
                content: ['Technologies we use: React, Node.js, Python...', 'Best practices for building scalable software...']
            },
            {
                title: 'Process',
                content: ['Our software development process...', 'Agile development methodology...', 'Steps to build a successful application...']
            },
        ]
    };

    return <CommonTabs data={data} />;
};

export default SoftwareDevelopment;
