import React from 'react';
import'./Upload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import uuidv4 from 'uuid';
import axios from 'axios';

const api = 'http://localhost:8080/video';

const UploadComp = (props) => {

    let {videoSubmitHandle} = props;

    return (
        <React.Fragment>

            <section className="upload">
                <div className="upload--inner">

                    <h1 className="upload__title">Upload Video</h1>

                    <form className="upload__form" onSubmit={videoSubmitHandle} method="POST">

                        <div className="upload__form-left">
                            <div className="upload__video">
                                <label className="upload__label">VIDEO THUMBNAIL</label>
                                <img className="upload__video-image" src={thumbnail} alt={thumbnail}></img>
                            </div>
    
                            <div className="upload--right">
                                <div className="upload__name">
                                    <label className="upload__label">TITLE YOUR VIDEO</label>
                                    <input className="upload__input" type="text" name="title" placeholder="Add a title to your video"></input>
                                </div>
    
                                <div className="upload__description">
                                    <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                                    <textarea className="upload__input upload__input-description" name="description" placeholder="Add a description of your video"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="upload__button">
                            <button className="upload__botton-publish btn" type="submit">PUBLISH</button>
                            <button className="upload__botton-cancel btn btn--white">CANCEL</button>
                        </div>
                                        
                    </form>
                      
                </div>
            </section>

        </React.Fragment>
    )

}

class Upload extends React.Component {

    videoHandle = (event) => {
        event.preventDefault();
        console.log('working?');
        axios
            .post(api, {
                "id": uuidv4(),
                "title": event.target.title.value,
                "channel": "Jessica",
                "image": thumbnail,
                "description": event.target.description.value,
                "views": "3,092,284",
                "likes": "75,985",
                "duration": "4:20",
                "video": "http://localhost:8080/sampleVideo.mp4",
                "timestamp": Date.now(),
                "comments": [
                    {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                    },
                    {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                    },
                    {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                    }
                ]
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            event.target.reset();           
    }

    render() {
        return (
            
            <React.Fragment>
                <UploadComp
                
                    videoSubmitHandle = {this.videoHandle}
    
                />
    
            </React.Fragment>
                    
                
        )
    }

}

export default Upload;