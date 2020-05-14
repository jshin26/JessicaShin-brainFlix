import React from 'react';
import './Mainvideo.scss';
import { dataArray } from '../dataArray'

import { Video } from './Video'
import { Description } from '../Description/Description';
import { Form } from '../Form/Form';
import { Comment } from '../Comments/Comment';

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
                    date={this.state.video.date}
                    views={this.state.video.views}
                    likes={this.state.video.likes}
                    description={this.state.video.description}
                />

                <Form />

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