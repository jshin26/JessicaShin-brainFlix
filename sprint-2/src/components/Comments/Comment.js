import React from 'react';
import './Comments.scss';


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

    let {name, timestamp, comment} = props;

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
    
                    </div>
    
                </div>
            </div>
        </section>
    )
}

const Comment = props => {

    let {displayComment} = props;

    return (
        <div>

            {displayComment.map((content) => {
                return (
                    <CommentComponent
                    key={content.id}
                    name={content.name}
                    timestamp={content.timestamp}
                    comment={content.comment}
                    />
                )
            })}

        </div>  
    )

}

export default Comment;
