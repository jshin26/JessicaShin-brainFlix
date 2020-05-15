import React from 'react';
import { dataArray } from '../../dataArray';
import'./Main.scss'

// import each components
import { VideoPlaying } from '../VideoPlaying/VideoPlaying'
import { Description } from '../Description/Description';
import { Form } from '../Form/Form';
import { Comment } from '../Comments/Comment';
import { VideoSide } from '../VideoSide/VideoSide';


// MAIN VIDEO SECTION

export class Main extends React.Component {

    state ={
        video: dataArray,
        selectedVideo: dataArray[0]        
    }

    render () {
        return (
            <main className="main">

                <VideoPlaying 
                    image={this.state.selectedVideo.image}
                    video={this.state.selectedVideo.video}
                    duration={this.state.selectedVideo.duration}
                />

                <div className="main--flexbox">
                    <div className="main__description">
                        <Description 
                            title={this.state.selectedVideo.title}
                            channel={this.state.selectedVideo.channel}
                            date={this.state.selectedVideo.timestamp}
                            views={this.state.selectedVideo.views}
                            likes={this.state.selectedVideo.likes}
                            description={this.state.selectedVideo.description}
                        />
        
                        <Form 
                            comment={this.state.selectedVideo.comments}
                        />
        
                        <React.Fragment>
        
                            {this.state.selectedVideo.comments.map((content, index) => {
                                return <Comment
                                    key={index}
                                    name={content.name}
                                    date={content.date}
                                    comment={content.comment}
                                ></Comment>
                            })}
        
                        </React.Fragment>
                    </div>
    
                    <VideoSide 
                        videoList={this.state.video.filter(content => content !== this.state.selectedVideo)}
                    /> 
                </div>

            </main>
        )
    }
}