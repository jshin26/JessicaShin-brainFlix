import React from 'react';
import './Comments.scss';
// import axios from 'axios';

// const api = 'http://localhost:8080/video';

// TImestamp

export function updateTime (unix) {
    const getDate = new Date(unix);

    const year = getDate.getFullYear();
    const month = getDate.getMonth();
    const day = getDate.getDate();


    let calSeconds = Math.floor((new Date() - getDate) / 1000);
    let timeAgo = Math.floor(calSeconds / 2592000);
    if (timeAgo > 1) {
    return (month+1) + '/' + day + '/' + year;
    }
    timeAgo = Math.floor(calSeconds / 86400);
    if (timeAgo > 1) {
      return timeAgo + " days ago";
    }
    timeAgo = Math.floor(calSeconds / 3600);
    if (timeAgo > 1) {
      return timeAgo + " hours ago";
    }
    timeAgo = Math.floor(calSeconds / 60);
    if (timeAgo > 1) {
      return timeAgo + " minutes ago";
    }
    return Math.floor(calSeconds) + " seconds ago";

};


// VIDEO COMMENTS

const CommentComponent = (props) => {

    let {name, timestamp, comment, likesHandle, deleteHandle} = props;

    return (

        <section className="comment">
            <div className="comment--inner">
                <div className="comment__box">
    
                    <div className="comment--left">
    
                    </div>
    
                    <div className="comment--right">
    
                        <div className="comment__info">
                            <p className="comment__name">{name}</p>
                            <p className="comment__date">{updateTime(timestamp)}</p>
                        </div>
    
                        <div>
                            <p className="comment__comments">{comment}</p>
                        </div>

                        <div className="comment__button-box">
                            <button className="comment__button btn btn--white" onClick={likesHandle}>0</button>
                            <button className="comment__button btn btn--white" onClick={deleteHandle}>Delete</button>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </section>
    )
}

const Comment = (props) => {

    let {displayComment} = props;

    const likesHandle = (event) => {
        event.preventDefault();
        console.log('likes');

        // const dynamicVideo= this.props.match.params.id
        // axios.get(`${api}/`)

        // if (typeof dynamicVideo === "undefined") {
        //     dynamicVideo = '1af0jruup5gu'
        // }
        // axios
        //     .post(`${api}/${dynamicVideo}/comments/${this.props.match.params.comments}`, {
        //         "likes": 2
        //     })
    }

    const deleteHandle = (event) => {
        event.preventDefault();
        console.log('delete')

        // let sideUrl = this.props.match.params.id;

        // if (typeof sideUrl === "undefined") {
        //     sideUrl = '1af0jruup5gu'
        // }
        
        // axios
        //     .delete(`${api}/${sideUrl}/comments/:comments_id`)
    }
    return (
        <div>

            {displayComment.comments.map((content) => {
                return (
                    <React.Fragment key={content.id}>
                        <CommentComponent                        
                        name={content.name}
                        timestamp={content.timestamp}
                        comment={content.comment}
                        likesHandle={likesHandle}
                        deleteHandle={deleteHandle}
                        />
                        
                    </React.Fragment>
                )
            }).reverse()}
        </div>  
    )

}

export default Comment;




