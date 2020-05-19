import React from 'react';
import './Form.scss';
import userImage from '../../assets/Images/Mohan-muruge.jpg';


// COMMENT SUBMIT FORM

const Form = (props) => {

    let {comment} = props;
    
    return (
        <section className="form">
            <div className="form--inner">
                <h2 className="form__comments">{comment.length} Comments</h2>
                <div className="form__input">
                    <div className="form--left">
                        <img src={userImage} alt="userimage" />
                    </div>

                    <form className="form--right" action="#">
                        <label className="form__text" htmlFor="comment">JOIN THE CONVERSATION</label>
                        <div className="form__container">
                            
                            <textarea className="form__new form__new--bgrgray" name="comment" cols="10" placeholder="Write comment here"></textarea>
                        
                            <div className="form__submit">
                                <button className="form__button btn" type="submit">COMMENT</button>
                            </div>
                        </div>
                    </form> 
                </div>                    
                
            </div>
        </section>
    )

}

export default Form;