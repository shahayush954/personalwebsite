import html5 from './images/html5-logo.png';
import cssIcon from './images/css3-logo.png';
import javascriptIcon from './images/javascript-logo.png';
import reactIcon from './images/react.PNG';
import nodejsIcon from './images/node.PNG';
import javaIcon from './images/java.png';
import cppIcon from './images/cpp.png';
import dataScienceIcon from './images/datascience.PNG';
import firebaseIcon from './images/firebase.png';
import machineLearningIcon from './images/machine_learning.PNG';
import phpIcon from './images/php.png';
import pythonIcon from './images/python-logo.png';
import sqlIcon from './images/SQL.png';
import mediaDotNetIcon from './images/mediadotnet-logo.png';
import dhflIcon from './images/dhfl.jpg';
import kkplIcon from './images/KKPL.PNG';
import somaiyaIcon from './images/somaiya.svg';
import myImage from './images/post1.png';
import myResume from './docs/Ayush_Shah_Resume_2.doc'


const data = {
    name: "Ayush Shah",
    title: "Software Developer",
    SocialMediaLinks: {
        LinkedIn: 'https://www.linkedin.com/in/ayush-shah-8a7800148/',
        GitHub: 'https://github.com/shahayush954/',
        Instagram: 'https://www.instagram.com/ayush._.10_/?hl=en',
        Twitter: 'https://twitter.com/ayush_shah_954'
    },
    Skills : [
        {
            name: 'HTML5',
            image: html5,
            alt: 'HTML5 Logo'
        },
        {
            name: 'CSS',
            image: cssIcon,
            alt: 'CSS Logo'
        },
        {
            name: 'Javascript',
            image: javascriptIcon,
            alt: 'Javascript Logo'
        },
        {
            name: 'ReactJs',
            image:reactIcon,
            alt: 'ReactJs Logo',
        },
        {
            name: 'NodeJs',
            image: nodejsIcon,
            alt: 'NodeJs Logo'
        },
        {
            name: 'Java',
            image:javaIcon,
            alt: 'Java Logo',
        },
        {
            name: 'PHP',
            image:phpIcon,
            alt: 'PHP Logo',
        },
        {
            name: 'Python',
            image: pythonIcon,
            alt: 'Python Logo',
        },
        {
            name: 'C++',
            image: cppIcon,
            alt: 'C++ Logo',
        },
        {
            name: 'SQL',
            image: sqlIcon,
            alt: 'SQL Logo',
        },
        {
            name: 'Firebase',
            image: firebaseIcon,
            alt: 'Firebase Logo',
        },
        {
            name: 'Machine Learning',
            image: machineLearningIcon,
            alt: 'Machine Learning Logo',
        },
        {
            name: 'Data Science',
            image: dataScienceIcon,
            alt: 'Data Science Logo',
        },
    ],
    Experience:[
        {
            image: mediaDotNetIcon,
            name: 'Media.net Software Services',
            position:'Associate Application Developer',
            location: 'Mumbai, India',
            duration: 'Jan 21 - Present',
            description: [
                'Work in teams to develop game changing, low latency, applications that will help deliver ads in few 100 milli sceonds.',
                'Contribute in writing clean, testable and well designed code.',
                'Contribute to the core of Ad serving with millions of serving per day.',
                'Help in providing platform to scale Machine Learning Models.'
            ]
        },
        {
            image: dhflIcon,
            name: 'DHFL General Insurance',
            position: 'Machine Learning Intern',
            location: 'Mumbai, India',
            duration: "Jun'19 - Aug'19",
            description: [
            
                    'Created a Model for Motor Self Inspection to automate the process of inspecting cars by Policy Makers.',
                    'Conducted testing with 2-3 Algorithms to find the best accuracy of over 65%.',
                    'Conducted Data preparation and cleansing for more than 800 images.',
                    'Developed a basic portal in Django for using the system.'
            ]
        },
        {
            image: kkplIcon,
            name: 'Kadamba Kanan PVT LTD',
            position: 'Web Developer Intern',
            location: 'Mumbai, India',
            duration: "Jan'19 - Feb'19",
            description: [
                    'Assisted in the creation of a Milk Delivery System through database development.',
                    'Developed backend scripts using PHP to ensure the smooth interaction of the frontend and the UI components with the database.',
                    'Developed a database design to minimize memory usage and storage requirements.',
                    'Implemented auto bill generation, order maintaining system, notifications system and user-connection system for the portal.'
            ]
        },
        {
            image: somaiyaIcon,
            name: 'K. J. Somaiya College of Engineering',
            position: 'Web Developer Intern',
            location: 'Mumbai, India',
            duration: "Sep'18 - Nov'18",
            description: [
                    'Designed and developed an efficient database of an order placing system for college canteen.',
                    'Developed backend scripts in PHP to assist the website’s frontend and UI components.'
            ]
        },
        {
            image: somaiyaIcon,
            name: 'K. J. Somaiya College of Engineering',
            position: 'Machine Learning Intern',
            location: 'Mumbai, India',
            duration: "Dec'17 - Jan'18",
            description: [
                    'Created a Model for analyzing samples of skin images to distinguish diseased vs non-diseased samples.',
                    'Tuned the Model and tested with various Algorithms to get an accuracy of over 80%.',
            ]
        }
    ],
    Education:[
        {
            college: 'K. J. Somaiya College of Engineering',
            degree: 'B.Tech, Information Technology',
            duration: '2016-2020',
            location: 'Mumbai, India',
            result: 'GPA: 8.7/10'
        },
        {
            college: 'Mahila Samiti Jr. College',
            degree: 'H.S.C., Science',
            duration: '2014 - 2016',
            location: 'Mumbai, India',
            result: 'Percentage: 83.23%'
        },
        {
            college: 'C.M.S. Secondary School',
            degree: 'S.S.C.',
            duration: '2014',
            location: 'Mumbai, India',
            result: 'Percentage: 91%'
        }
    ],
    AboutMe: {
        image: myImage,
        description: [
            "It all started with my first exposure to Computer Science during my H.S.C. Everything was completely new for me and Programming had really caught my interest. From that very time I knew I had to pursue a career in Computer Science.",
            "I took Information Technology for my B.Tech. It had a variety of courses covering all corners of Computer Science and Information Technology. Not very long time after that, I realized this field is huge as a whole and I had to funnel my interest into one particular domain. I tried to take all kinds internships, which I could get as a student, from various domains to figure out my Interests. Finally I found out that, Software Development it is which really excites me.",
            "In short to summarize, I am a versatile developer with a ready to learn attitude and a great passion towards developing Software solutions to Real World problems. Strong in various development platforms with good problem solving and error resolving skills along with little experience in Data Science."
        ]
    },
    Contact: {
        phone: "+91 9769765491",
        mail: "ayushzz459@gmail.com"
    },
    Resume: myResume
}

export default data;