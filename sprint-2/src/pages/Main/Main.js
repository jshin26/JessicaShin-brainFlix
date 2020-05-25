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

const api = 'https://project-2-api.herokuapp.com/videos';
const key = '?api_key=ae8e8f77-8ae3-41ea-9efd-04a70d523ddf';

const mainURL = '/1af0jruup5gu';


class Main extends React.Component {
    
    state ={
        videoData: [],
        selectedVideo: {
            comments: []
        },
        updateComments: {comments:[]}
    }

    // function for re-using axios
    getfromAPI ( urlId ) {
        axios
            .get(api + urlId + key)
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
        this.getfromAPI(mainURL)
        axios
            .get(api+key)
            .then(response => {
                this.setState({
                    videoData: response.data
                })
            })
    };     


    componentDidUpdate(prevProps) {
        const matchUrl = this.props.match.url;
        const prevUrl = prevProps.match.url;

        if (matchUrl !== prevUrl && matchUrl === '/') {

            this.getfromAPI(mainURL)

        } else if (matchUrl !== prevUrl) {

            this.getfromAPI(`/${this.props.match.params.id}`)
            
        }
    }
    

    // onSubmit EventHandler
    submitHandle = (e) => {
        e.preventDefault();

        if (!e.target.name.value || !e.target.comment.value) {

            alert ('Please type your name');

        } else {
            
            return axios.post(`${api}/${this.props.match.params.id}/comments${key}`, {
                'name' : e.target.name.value,
                'comment' : e.target.comment.value
            })
                .then(response => {
                    console.log(response)
                    this.setState({
                        updateComments: response.data.comments
                    })
                    
                })
               
        }
        e.target.reset()
    };


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
                                {...this.state.selectedVideo}
                                submitHandle={this.submitHandle}
                            />

                            <Comment 
                                displayComment={this.state.selectedVideo.comments}
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