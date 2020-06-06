A video platform full-stack app using React and Node Express

Front-End Functionality;

 - Using the API and state, data is passed down as props to generate side videos, all main video content including comments
 - There are 3 routes of Home/Video Player Page, Video Upload Page, and Side vidoe with video id
 - Clicking on a video in the "Next Video" list goese to the Video Details Page for the selected video and display all the information for the video such as likes, view, author, description, etc.


Back-End Functionality;

 - The end-point and reponse structure of back-end server contains GET/video, GET/video/:id, POST/video
 - Submitting a new video from the form (Upload Page) POSTs to the API.


Main Page;

 - The "Next Video" list does not contain the current video being displayed
 - Used componentDidUpdate lifecycle method and match.params from react-router to determine when to update the main video data

![screencapture-localhost-3000-1591402713599](https://user-images.githubusercontent.com/59567530/83931510-23ab7580-a76b-11ea-8da9-b39d8049d4c3.png)



Upload Page;

 - Added event handler for the upload form so that when a user submits a new video, it POSTs the video to the back server in order to save it to the list of videos

 ![screencapture-localhost-3000-upload-1591402782076](https://user-images.githubusercontent.com/59567530/83931516-2dcd7400-a76b-11ea-88d3-75d0e5883204.png)



When posted a video and a comment;

![screencapture-localhost-3000-1591402825061](https://user-images.githubusercontent.com/59567530/83931523-3756dc00-a76b-11ea-879e-cb697ee99f42.png)
