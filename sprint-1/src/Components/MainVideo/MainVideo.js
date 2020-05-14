import React from 'react';
import './Mainvideo.scss';
import sampleVideo from '../../Assets/Video/BrainStation Sample Video.mp4';
import videoPoster from '../../Assets/Images/video-list-0.jpg'
import playIcon from '../../Assets/Icons/SVG/Icon-play.svg';
import pauseIcon from '../../Assets/Icons/SVG/Icon-pause.svg';
import fullScreenIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg';

export class MainVideo extends React.Component {
    render () {
        return (
            <section className="main-video">
                <div className="main-video--inner">

                    <video className="main-video__video" src="" poster={videoPoster} control="true">
                        <source src={sampleVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="main-video__control">
                        <button className="main-video__ctrl"><img src={playIcon} alt="playIcon"/></button>

                        <div className="main-video__process">
                            <div className="main-video__process-bar main-video__ctrl"></div>
                            <p className="main-video__process-text">0:00/0:42</p>
                        </div>

                        <div className="main-video__contro--right">
                            <button className="main-video__ctrl"><img src={fullScreenIcon} alt="fullScreenIcon"/></button>
                            <button className="main-video__ctrl"><img src={volumeIcon} alt="volumeIcon"/></button>
                        </div>

                    </div>
                        
                </div>
            </section>
        )
    }
}