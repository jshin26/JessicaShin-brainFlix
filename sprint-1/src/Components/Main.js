import React from 'react';
import { dataArray } from './dataArray'

// import { Video } from './Video'
import { MainVideo } from './MainVideo/MainVideo'
import { Description } from './Description/Description';
import { Form } from './Form/Form';
import { Comment } from './Comments/Comment';
import { SideVideo } from './SideVideo/SideVideo';


// MAIN VIDEO SECTION

export class Main extends React.Component {

    state ={
        video: dataArray,
        selectedVideo: dataArray[0]        
    }

    render () {
        return (
            <React.Fragment>

                <MainVideo />

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

                <SideVideo 
                    videoList={this.state.video.filter(content => content !== this.state.selectedVideo)}
                /> 

            </React.Fragment>
        )
    }
}