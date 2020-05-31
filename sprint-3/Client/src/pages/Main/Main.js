import React from 'react';
import'./Main.scss';
import axios from 'axios';

// import each components

import VideoPlaying from '../../components/VideoPlaying/VideoPlaying'
import Description from '../../components/Description/Description';
import Form from '../../components/Form/Form';
import Comment from '../../components/Comments/Comment';
import VideoSide from '../../components/VideoSide/VideoSide';


// MAIN VIDEO SECTION

const api = 'http://localhost:8080/video';
const mainURL = '1af0jruup5gu';


class Main extends React.Component {
    
    state ={
        videoData: [],
        selectedVideo: {
            comments: []
        }
        // clickCounter: 0
    }

    // function for re-using axios
    getfromAPI ( urlId ) {
        axios
            .get(api + '/' + urlId)
            .then(response => {
                this.setState({
                    selectedVideo: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    mountFx () {
       this.getfromAPI(mainURL)
        axios
            .get(api)
            .then(response => {
                this.setState({
                    videoData: response.data
                })
            })
    }

    componentDidMount() {
        this.mountFx();
    }

    componentDidUpdate(prevProps) {
        const matchUrl = this.props.match.url;
        const prevUrl = prevProps.match.url;
        if (matchUrl !== prevUrl && matchUrl === '/') {

            this.getfromAPI(mainURL)

        } else if (matchUrl !== prevUrl) {
            
            this.getfromAPI(`${this.props.match.params.id}`)
            
        }
    }

    submitHandle = (event) => {
        event.preventDefault();

        console.log(this.props.match)
        let dynamicVideo = this.props.match.params.id;

        if (typeof dynamicVideo === "undefined") {
            dynamicVideo = '1af0jruup5gu'
        } 

        if (!event.target.comment.value) {

            alert ('Please type comment');
        
        } else {
            axios
                .post(`${api}/${dynamicVideo}/comments`, {
                    "comment" : event.target.comment.value,
                    "timestamp" : Date.now(),
                    "name" : "USER_NAME"
                })
                .then((res) => {
                    console.log(res)
                    this.mountFx()            
                })
                event.target.reset();                
        }
    }

    render () {

        return (
                
            <main className="main">

                <VideoPlaying 
                    {...this.state.selectedVideo}
                />

                <div className="main--flexbox">
                    
                    <div className="main--left">
                        <Description 
                            {...this.state.selectedVideo}
                        />
        
                        <Form 
                            comments={this.state.selectedVideo}
                            submitHandle={this.submitHandle}
                        />

                        <Comment 
                            displayComment={this.state.selectedVideo}
                        />
        
                    </div>
    
                    <div className="main--right">
                        <VideoSide 
                            videoList={this.state.videoData.filter(content => content.id !== this.state.selectedVideo.id)}
                        /> 
                    </div>
                </div>

            </main>
        )
    };
};

export default Main;