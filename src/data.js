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
import myResume from './docs/AyushShah_Resume.pdf'
import sassIcon from './images/sass.png';
import gitIcon from './images/git.png';
import hdfsIcon from './images/hadoop-hdfs-logo.png';
import kafkaIcon from './images/kafka-logo.png';
import druidIcon from './images/druid-logo.png';
import vueIcon from './images/vue-logo.png';

const data = {
    name: "Ayush Shah",
    title: "Software Developer",
    SocialMediaLinks: {
        LinkedIn: 'https://www.linkedin.com/in/ayush-shah-8a7800148/',
        GitHub: 'https://github.com/shahayush954/',
        Instagram: 'https://www.instagram.com/shahayush954/?hl=en',
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
            name: 'Vue',
            image:vueIcon,
            alt: 'Vue Logo',
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
            name: 'Sass',
            image: sassIcon,
            alt: 'Sass Logo',
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
            name: 'Git',
            image: gitIcon,
            alt: 'Git Logo',
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
        {
            name: 'HDFS',
            image: hdfsIcon,
            alt: 'HDFS Logo',
        },
        {
            name: 'Kafka',
            image: kafkaIcon,
            alt: 'Kafka Logo',
        },
        {
            name: 'Druid',
            image: druidIcon,
            alt: 'Druid Logo',
        },
    ],
    Experience:[
        {
            image: mediaDotNetIcon,
            name: 'Media.net Software Services',
            position:'Web Application Developer 2',
            location: 'Mumbai, India',
            duration: 'Jan 21 - Present',
            description: [
                'Working on the development and enhancement of a Data Engineering project that moves data across multiple sources like Kafka, HDFS, DRUID, GCP, etc through Stream and Batch Processes',
                'Carried out the development of a tool utilized by Data Analysts as Full Stack Developer with Automation and OptimizationTeam.',
                'Collaborate with the Data Analysts to understand and implement their requirements.',
                'Build interactive UI’s using ReactJs, VueJs and Redux, adhering to designs and best practices.',
                'Create time efficient API’s using JAVA Servlets.',
                'Write MySQL Procedures to interact with database'
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
    Projects: [
        {
            projectName: 'Social Media: A twitter based Replica',
            projectDescription: [
                'Have been creating a twiiter based repplica for learning React.js, Node.js and Express.js.',
                'The users are able to create an account, upload profile images, upload their thoughts(similar to a tweet), view others users posts, like a post, comment on a post, etc.',
                'The system uses Google Firebase for its backend database requirements.',
                'Created Api’s in Node.js and Express.js to fetch data from Firebase as per needs.',
                'Developed a Frontend using React.js and integrated Redux for effective state management.',
            ],
            projectSkills: [
                'ReactJs',
                'Redux',
                'NodeJs',
                'Firebase',
            ],
            githubLink: 'https://github.com/shahayush954/SocialMedia'
        },
        {
            projectName: 'Motor Self Inspection',
            projectDescription: [
                'Created a Model for Motor Self Inspection to automate the process of inspecting cars by Policy Makers.',
                'Conducted testing with 2-3 Algorithms to find the best accuracy of over 65%.',
                'Conducted Data preparation and cleansing for more than 800 images.',
                'Developed a basic portal in Django for using the system.'
            ],
            projectSkills: [
                'Python',
                'Data Science',
                'Image Processing'
            ],
            githubLink: 'https://github.com/shahayush954/Motor-Self-Inspection'
        },
        {
            projectName: 'Easyfy: Milk Delivery System',
            projectDescription: [
                'Assisted in the creation of a Milk Delivery System through database development.',
                'Developed backend scripts using PHP to ensure the smooth interaction of the frontend and the UI components with the database.',
                'Developed a database design to minimize memory usage and storage requirements.',
                'Implemented auto bill generation, order maintaining system, notifications system and user-connection system for the portal.'
            ],
            projectSkills: [
                'HTML',
                'CSS',
                'Javascript',
                'Php'
            ],
            githubLink: 'https://github.com/shahayush954/Milk-Delivery-System-Easyfy'
        },
        {
            projectName: 'Labour Management System',
            projectDescription: [
                'Designed and developed the database of a basic job portal as a part of college project.',
                'Developed backend scripts in PHP to assist the websites frontend components.',
                'Worked on with PHP to integrate the backend of the website to the frontend developed by other team members.',
                'Developed industry level documentation for the entire project.'
            ],
            projectSkills: [
                'HTML',
                'CSS',
                'Javascript',
                'Php'
            ],
            githubLink: 'https://github.com/shahayush954/Labour-Management-System'
        },
        {
            projectName: 'College Canteen Website',
            projectDescription: [
                'Designed and developed an efficient database of an order placing system for college canteen.',
                'Developed backend scripts in PHP to assist the website’s frontend and UI components.'
            ],
            projectSkills: [
                'HTML',
                'CSS',
                'Javascript',
                'Php'
            ],
            githubLink: 'https://github.com/shahayush954/College-Canteen-Website'
        },
        {
            projectName: 'GameHubZ: E-Commerce Website',
            projectDescription: [
                'My first ever interaction with webite development, especially frontend development while creating my first ever frontend website',
                'Developed a website that replicates modern day online shopping sites as a part of college project.',
                'Used HTML and CSS for the complete design.',
                'Used Javascript to replicate functionalities from modern sites.'
            ],
            projectSkills: [
                'HTML',
                'CSS',
                'Javascript'
            ],
            githubLink: 'https://github.com/shahayush954/GameHubZ'
        }
    ],
    Resume: myResume
}

export default data;
