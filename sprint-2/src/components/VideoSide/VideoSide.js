import React from 'react';
import './VideoSide.scss';
import { NavLink } from 'react-router-dom';


// NEXT VIDEO LISTS

const VideoList = (props) => {

    let {image, title, channel, navlinks} = props;

    return (

        <NavLink className="next__video" to={navlinks}>
                    
            <img className="next__thumbnail" src={image} alt={title}/>
            <div className="next__info">
                <p className="next__info-title">{title}</p>
                <p className="next__info-channel">{channel}</p>
            </div>

        </NavLink>
    ) 
 
};

const VideoSide = (props) => {

    let {videoList} = props;

    return (
        <React.Fragment>

            <section className="next">
                <div className="next--inner">

                    <p className="next__title">NEXT VIDEO</p>

                    {videoList.map((content) => {
                        return <VideoList
                            key={content.id}
                            image={content.image}
                            title={content.title}
                            channel={content.channel}
                            navlinks={`/${content.id}`}
                            
                        ></VideoList>
                    })}

                </div>
            </section>

        </React.Fragment>  
    )

}

export default VideoSide;