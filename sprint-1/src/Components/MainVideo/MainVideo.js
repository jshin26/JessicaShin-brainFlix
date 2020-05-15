import React from 'react';
import './MainVideo.scss';
import { dataArray } from '../dataArray'

import playIcon from '../../Assets/Icons/SVG/Icon-play.svg';
import pauseIcon from '../../Assets/Icons/SVG/Icon-pause.svg';
import fullScreenIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg';

// main VIDEO Class

export class VideoComp extends React.Component {
    render(){

        let {image, video} = this.props;

        return (
            <section className="main-video">
                <div className="main-video--inner">

                    <video className="main-video__video" poster={image} control="true">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="main-video__control">

                        <button className="main-video__play ctrl"><img src={playIcon} alt="playIcon"/></button>

                        <div className="main-video__process ctrl">
                            <div className="main-video__process-bar"></div>
                            <p className="main-video__process-text">0:00/0:42</p>
                        </div>

                        <div className="main-video__control--right ctrl">
                            <button className="main-video__screen"><img src={fullScreenIcon} alt="fullScreenIcon"/></button>
                            <button className="main-video__volume"><img src={volumeIcon} alt="volumeIcon"/></button>
                        </div>

                    </div>
                        
                </div>
            </section>
        )
    }
}

export class MainVideo extends React.Component {
    
    state ={
        video: dataArray[0]
    }

    render() {
        return (
            <VideoComp 
                image={this.state.video.image}
                video={this.state.video.video}
            />
        )
    }
}