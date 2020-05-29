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

// const api = 'https://project-2-api.herokuapp.com/videos';
// const key = '?api_key=ae8e8f77-8ae3-41ea-9efd-04a70d523diw';

// const mainURL = '/1af0jruup5gu';

const api = 'http://localhost:8080/video';

const mainURL = '/1af0jruup5gu';


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
            .get(api + urlId)
            .then(response => {
                this.setState({
                    selectedVideo: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getfromAPI(mainURL);
        axios
            .get(api)
            .then(response => {
                console.log(this.state.selectedVideo)
                this.setState({
                    videoData: response.data
                })
            })
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.match)

        const matchUrl = this.props.match.url;
        const prevUrl = prevProps.match.url;
        if (matchUrl !== prevUrl && matchUrl === '/') {

            this.getfromAPI(mainURL)

        } else if (matchUrl !== prevUrl) {
            
            this.getfromAPI(`/${this.props.match.params.id}`)
            
        }
    }

    // onSubmit button for posting comments
    // could not figure out how to change each url for the side videos

    submitHandle = (event) => {
        event.preventDefault();

        console.log(this.props.match.url)

        if (typeof this.props.match.url === "undefined") {
            this.props.match.url = '1af0jruup5gu'
        } 

        if (!event.target.comment.value) {

            alert ('Please type comment');
        
        } else {
            axios
                .post(`${api}${this.props.match.url}/comments`, {
                    "comment" : event.target.comment.value,
                    "name" : "USER_NAME"
                })
                .then(() => {
                    this.componentDidMount();
              
                })
                event.target.reset();                
        }
    }

    // Could not figure out how to put each commentId in .post/.delete :(

    // likesHandle = (event) => {
    //     event.preventDefault();

    //     let sideUrl = this.props.match.params.id;

    //     if (typeof sideUrl === "undefined") {
    //         sideUrl = '1af0jruup5gu'
    //     }
    //     axios
    //         .post(`${api}/${sideUrl}/comments/${this.props.match.params.comments}`)
    //         .then(
    //             this.setState({
    //                 clickCounter: ++this.state.clickCounter
    //             })
    //         )        
    // }

    // deleteHandle = (event) => {
    //     event.preventDefault();

    //     let sideUrl = this.props.match.params.id;

    //     if (typeof sideUrl === "undefined") {
    //         sideUrl = '1af0jruup5gu'
    //     }
        
    //     axios
    //         .delete(`${api}/${sideUrl}/comments/:comments_id`)
    // }


    render () {

        return (
            <React.Fragment>
                
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
                                // likesHandle={this.likesHandle}
                                // deleteHandle={this.deleteHandle}
                                likes={this.state.clickCounter}
                            />
            
                        </div>
        
                        <div className="main--right">
                            <VideoSide 
                                videoList={this.state.videoData.filter(content => content.id !== this.state.selectedVideo.id)}
                            /> 
                        </div>
                    </div>

                </main>

            </React.Fragment>
        )
    };
};

export default Main;