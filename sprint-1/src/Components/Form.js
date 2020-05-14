import React from 'react';
import './header.scss'

export class Form extends React.Component {
    render () {
        return (
            <section className="form">
                <div className="form--inner">
                
                    <div className="form-input--left">
                        <img src="" alt="userimage" />
                    </div>

                    <form className="form-input--right" action="#">
                        <label className="form-input__text" for="name"></label>
                        <input className="form-input__name" type="text" name="name" placeholder ="Enter your name" />
                        <label className="form-input__text" for="comment">COMMENT</label>
                        <textarea className="form-input__comment form-input__comment--bgrgray" name="comment" cols="10" rows="4" placeholder="Add a new comment"></textarea>
                        <div className="form-input__submit">
                            <button className="form-input__button btn" type="submit">COMMENT</button>
                        </div>
                    </form>                     
                    
                </div>
            </section>
        )
    }
}