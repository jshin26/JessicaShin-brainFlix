import thumbnail0 from './assets/Images/video-list-0.jpg';
import thumbnail1 from './assets/Images/video-list-1.jpg';
import thumbnail2 from './assets/Images/video-list-2.jpg';
import thumbnail3 from './assets/Images/video-list-3.jpg';
import thumbnail4 from './assets/Images/video-list-4.jpg';
import thumbnail5 from './assets/Images/video-list-5.jpg';
import thumbnail6 from './assets/Images/video-list-6.jpg';
import thumbnail7 from './assets/Images/video-list-7.jpg';
import thumbnail8 from './assets/Images/video-list-8.jpg';

import sampleVideo from './assets/Video/BrainStation Sample Video.mp4';
import {v4 as uuidv4 } from 'uuid';



// Comment Array
// side video objects also contain the same keys as main video (it might need in the future)

export const dataArray = [
    {
        id: uuidv4(),
        title: 'BMX Rampage: 2018 Highlights',
        description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: thumbnail0,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments: [
            {
                id: uuidv4(),
                name: "Micheal Lyons",
                date: "12/18/2018",
                comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
            },
            {
                id: uuidv4(),
                name: "Gary Wong",
                date: "12/18/2018",
                comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
            },
            {
                id: uuidv4(),
                name: "Theodore Duncan",
                date: "11/15/2018",
                comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
            }
        ] 
    },
    {
        id: uuidv4(), 
        title: 'Become A Travel Pro In One Easy Lesson', 
        description: '',
        channel: 'Todd Welch', 
        image: thumbnail1,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Les Houches The Hidden Gem Of The Chamonix', 
        description: '',
        channel: 'Cornelia Blair', 
        image: thumbnail2,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Travel Health Useful Medical Information For', 
        description: '',
        channel: 'Glen Harper', 
        image: thumbnail3,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        description: '',
        channel: 'Emily Harper', 
        image: thumbnail4,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        description: '',
        channel: 'Ethan Owen',
        image: thumbnail5,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Choose The Perfect Accommodations', 
        description: '',
        channel: 'Lydia Perez', 
        image: thumbnail6,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Cruising Destination Ideas', 
        description: '',
        channel: 'Timothy Austin', 
        image: thumbnail7,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
    {
        id: uuidv4(), 
        title: 'Train Travel On Track For Safety', 
        description: '',
        channel: 'Scotty Cranmer', 
        image: thumbnail8,
        views: '1,001,023',
        likes: '110,985',
        duration: '0:42',
        video: sampleVideo,
        timestamp: '12/18/2018',
        comments:[]
    },
];