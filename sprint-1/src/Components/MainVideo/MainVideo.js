import React from 'react';
import { dataArray } from '../dataArray'

import { Video } from './Video'
import { Description } from '../Description/Description';
import { Form } from '../Form/Form';
import { Comment } from '../Comments/Comment';


// MAIN VIDEO SECTION

export class MainVideo extends React.Component {

    state ={
        video: dataArray[0]
    }

    render () {
        return (
            <React.Fragment>

                <Video 
                    image={this.state.video.image}
                    video={this.state.video.video}
                />

                <Description 
                    title={this.state.video.title}
                    channel={this.state.video.channel}
                    date={this.state.video.timestamp}
                    views={this.state.video.views}
                    likes={this.state.video.likes}
                    description={this.state.video.description}
                />

                <Form 
                    comment={this.state.video.comments}
                />

                <React.Fragment>

                    {this.state.video.comments.map((content, index) => {
                        return <Comment
                            key={index}
                            name={content.name}
                            date={content.date}
                            comment={content.comment}
                        ></Comment>
                    })}

                </React.Fragment>   

            </React.Fragment>
        )
    }
}