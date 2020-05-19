import React from 'react';
import { dataArray } from '../../dataArray';
import'./Main.scss';

// import each components
import Header from '../../components/Header/Header';
import VideoPlaying from '../../components/VideoPlaying/VideoPlaying'
import Description from '../../components/Description/Description';
import Form from '../../components/Form/Form';
import Comment from '../../components/Comments/Comment';
import VideoSide from '../../components/VideoSide/VideoSide';


// MAIN VIDEO SECTION

class Main extends React.Component {

    state ={
        video: dataArray,
        selectedVideo: dataArray[0],  
    }

    render () {
        return (
            <React.Fragment>
                <Header />
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
                                comment={this.state.selectedVideo.comments}
                            />
            
                            <React.Fragment>
            
                                {this.state.selectedVideo.comments.map((content) => {
                                    return <Comment
                                        key={content.id}
                                        name={content.name}
                                        date={content.date}
                                        comment={content.comment}
                                ></Comment>
                                })}
            
                            </React.Fragment>
                        </div>
        
                        <div className="main--right">
                            <VideoSide 
                                videoList={this.state.video.filter(content => content !== this.state.selectedVideo)}
                            /> 
                        </div>
                    </div>

                </main>
            </React.Fragment>
        )
    }
}

export default Main;