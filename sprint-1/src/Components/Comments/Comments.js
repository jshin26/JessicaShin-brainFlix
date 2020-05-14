import React from 'react';
import './Comments.scss';
import commentArr from './commentArr'
import { NewComment } from './NewComment';

export class Comments extends React.Component {

    state ={
        comment: commentArr
    }

    render () {
        return (
            <section className="comment">
                <div className="comment--inner">

                    {this.state.comment.map((comment, index) => {
                        return <NewComment 
                            key={index}
                            name={comment.name}
                            date={comment.date}
                            comment={comment.comment}    
                        />
                    })}
                    
                </div>
            </section>
        )
    }
}