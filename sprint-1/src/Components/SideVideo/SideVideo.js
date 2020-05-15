import React from 'react';
import './SideVideo.scss';
import { dataArray } from '../dataArray'


export class VideoList extends React.Component {
    render () {

        let {image, title, channel} = this.props;

        return (

            <div className="next__video" >
                        
                <img className="next__thumbnail" src={image}/>
                <div className="next__info">
                    <p className="next__info-title">{title}</p>
                    <p className="next__info-channel">{channel}</p>
                </div>

            </div>
        )
    }
};

export class SideVideo extends React.Component {
    
    state ={
        video: dataArray,
    }

    nextVideoList = this.state.video.filter(video => video !== this.state.onVideo)

    render() {
        return (
            <React.Fragment>

                <section className="next">
                    <div className="next--inner">

                        <p className="next__title">NEXT VIDEO</p>

                        {this.state.video.map((content, index) => {
                            return <VideoList
                                key={index}
                                image={content.image}
                                title={content.title}
                                channel={content.channel}
                            ></VideoList>
                        })}

                    </div>
                </section>

            </React.Fragment>  
        )
    }
}