import React from 'react';
import'./Upload.scss';
import thumbnail from '../../assets/Images/Upload-video-preview.jpg'

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
                                    <input className="upload__input" type="text" placeholder="Add a title to your video"></input>
                                </div>
    
                                <div className="upload__description">
                                    <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                                    <textarea className="upload__input upload__input-description" placeholder="Add a description of your video"></textarea>
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

    videoHandle = (e) => {
        e.preventDefault();
        console.log('working?')
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