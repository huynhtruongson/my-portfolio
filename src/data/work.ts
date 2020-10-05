import Images from "constants/images";

export default {
    Career : [
        {
            logo : Images.PI,
            title : 'PI Solution',
            time : 'June 2020 - Aug 2020',
            intro : 'A provider of comprehensive technology solutions for businesses, especially newly established businesses',
            desc : `A company i worked for during my internship.
            I was able to learn a lot about processes, new techs and best practices,
            and apply to my daily work especially React Native.`,
            activities : [
                'Develop mobile app based on customer requirements',
                'Define, apply and continually improve technologies to adapt and overcome challenges',
                'Actively review and improve individual skills competency over the time'
            ],
            techs : 'React Native, Redux, Javascript, Restful API, Axios'
        }
    ],
    Sidework : [
        {
            logo : Images.HTMLTAG,
            title : 'Hotel Booking Management',
            time : 'Sep 2019 - Nov 2019',
            intro : 'A website for hotel booking management',
            desc : `A project I did while learning website programming course in university
            .That was an opportunity for me to know what front-end is like and started loving it.`,
            features : [
                'Customer can login, register, update profile and booking',
                'Admin can see the number of rooms booked and available, and has the four basic functions of CRUD.'
            ],
            github : 'https://github.com/huynhtruongson/project-web',
            techs : 'HTML, CSS, Bootstrap, Javascript, Jquery, PHP, SQL, XAMPP'
        },
        {
            logo : Images.HTMLTAG,
            title : 'Student Score Management',
            time : 'March 2020 - May 2020',
            intro : 'A website for hotel student score management',
            desc : `A project I did while learning distributed database course in university
            .In this course In this course I learned how to distribute databases and make them interact with each other.`,
            features : [
                'Login, create accounts, account decentralization',
                'Add students, subjects, scores',
                'Sort students by class, subject,',
                'Calculate scores by class, subject'
            ],
            github : 'https://github.com/huynhtruongson/project-distributedDataBase',
            techs : 'HTML, CSS, Bootstrap, Pug, Javascript, NodeJs, SQL Server.'
        },
        {
            logo : Images.ANDROID,
            title : 'Accommodation Management',
            time : 'Sep 2019 - Nov 2019',
            intro : 'A mobile app for hotel accommodation management',
            desc : `A project I did while learning mobile programming course in university
            .I learn many things about Android and Java language in this project,
            Further more I have also learned about React Native`,
            features : [
                'Login, register, forgot password, update profile',
                'The four basic functions of CRUD.',
                'Sort by price,street,district'
            ],
            github : 'https://github.com/huynhtruongson/project-android',
            techs : 'Java, XML, Android Studio.'
        }
    ]
}