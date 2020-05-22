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
        updateComments: []
    }

    getfromAPI ( routeId ) {
        axios
            .get(api + routeId + key)
            .then(response => {
                this.setState({
                   selectedVideo : response.data
                })
            })
    }

    componentDidMount() {
        axios
            .get(api+mainURL+key)
            .then(response => {
                this.setState({
                    selectedVideo: response.data
                })
            })
        axios
            .get(api+key)
            .then(response => {
                this.setState({
                    videoData: response.data
                })
            })
    };

    componentDidUpdate(prevProps) {
        const { url } = this.props.match;
        const  previous  = prevProps.match.url;

        if (url !== previous && url !== '/') {
            axios.get(`${api}/${this.props.match.params.id}${key}`).then(response=>{
                this.setState({
                    selectedVideo: response.data
                })
            })
        } else if (url !== previous && url === '/') {
            axios.get(api+mainURL+key).then(response=>{
                this.setState({
                    selectedVideo: response.data
                })
            })
        }
        
        // if (prevProps.match.params.id !== this.props.match.params.id && prevProps.match.params.id !== '/') {
        //     axios
        //         .get(`${api}/${this.props.match.params.id}${key}`)
        //         .then(response => {
        //             this.setState({
        //                 selectedVideo: response.data
        //             })
        //         })
        // } 
        // else if (prevProps.match.params.id !== this.props.match.params.id && prevProps.match.params.id ==='/'){
        //     axios
        //         .get(api+mainURL+key)
        //         .then(response => {
        //             this.setState({
        //                 selectedVideo: response.data
        //             })
        //         })
        // }
    }

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
                    this.setState({
                        updateComments: response.data.comments
                    })
                    
                })
                // this.submitHandle.reset();
        }
    };


    render () {

        return (
            <React.Fragment>
                
                <main className="main">

                    <VideoPlaying 
                        image={this.state.selectedVideo.image}
                        video={this.state.selectedVideo.video}
                        duration={this.state.selectedVideo.duration}
                    />

                    <div className="main--flexbox">
                        
                        <div className="main--left">
                            <Description 
                                title={this.state.selectedVideo.title}
                                channel={this.state.selectedVideo.channel}
                                date={this.state.selectedVideo.timestamp}
                                views={this.state.selectedVideo.views}
                                likes={this.state.selectedVideo.likes}
                                description={this.state.selectedVideo.description}
                            />
            
                            <Form 
                                comments={this.state.selectedVideo.comments}
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