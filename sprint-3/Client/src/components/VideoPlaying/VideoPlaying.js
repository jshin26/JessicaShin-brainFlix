import React from 'react';
import './VideoPlaying.scss';

import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
// import pauseIcon from '../../assets/Icons/SVG/Icon-pause.svg';
import fullScreenIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';


// main VIDEO that is PLAYING

const VideoPlaying = (props) => {

    let {image, video, duration} = props;

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
                        <p className="main-video__process-text">0:00/{duration}</p>
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

export default VideoPlaying;