export const achievementData = [
    {
        achHeader: 'Scholarships.txt',
        title: 'Academic Scholarship',
        time: '2025',
        imgPath: 'QC_Icon.svg',
        url: 'https://www.qc.cuny.edu/',
        multiple: false,
        description: [
            { text: 'Recipient of the Samuel and Karola Wachsberger Scholarship for ', highlight: false },
            { text: 'outstanding academic achievement ', highlight: true },
            { text: "in the accelerated Master's program.", highlight: false },
            { text: '', break: true },            
            { text: '', break: true },
            { text: "Completed the Master's program in ", highlight: false },
            { text: "one intensive semester with a 7-course graduate load while simultaneously working part-time (24 hours/week)", highlight: true },
        ]
    },     
    {
        achHeader: 'Kung_Fu_Wu_Su_Association.txt',
        imgPath: 'kfwsu_logo.svg',
        url: 'https://kungfuwusu.com/',
        multiple: true,
        certifications: [
            {
                title: '2nd Degree Instructor',
                time: '2018 - 2021',
                description: [
                    { text: 'Earned my 2nd Degree and became an Instructor where ', highlight: false },
                    { text: 'I developed lesson plans and taught classes.', highlight: true },
                    { text: '', break: true },            
                    { text: '', break: true },
                    { text: 'Took and passed ', highlight: false },
                    { text: 'a rigorous physical and written assessment', highlight: true },
                ],
            },
            {
                title: '1st Degree Assistant Instructor',
                time: '2013 - 2018',
                description: [
                    { text: 'Earned my 1st Degree and became an Assistant Instructor where ', highlight: false },
                    { text: 'I helped teach new students.', highlight: true },
                    { text: '', break: true },            
                    { text: '', break: true },
                    { text: 'Took and passed ', highlight: false },
                    { text: 'a rigorous physical and written assessment', highlight: true },                
                ],
            },
        ]
    }
];
