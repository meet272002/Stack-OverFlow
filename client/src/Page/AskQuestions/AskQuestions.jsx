import React, {useState} from 'react';
import './AskQuestions.css';
import {useNavigate} from 'react-router';
import {useDispatch,useSelector} from 'react-redux';
import {askQuestion} from '../../actions/question';

const AskQuestions = () => {
    // const navigate = useNavigate();
    const [questionTitle,setQuestionTitle] = useState('');
    const [questionBody,setQuestionBody] = useState('');
    const [questionTags,setQuestionTags] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => state.currentUserReducer)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({questionTitle,questionBody,questionTags})
        dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted: User.result.name, userId : User?.result._id},navigate));
    }

    const handleEnter = (e) => {
        if(e.key === "Enter")
        {
            setQuestionBody(questionBody + "\n");
        }
    }
    return (
    <div className='ask-question'>
        <div className='ask-ques-container'>
            <h1>Ask a public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be Specific you are asking question questio to other person</p>
                        <input type='text' id='ask-ques-title' onChange={(e)=>{setQuestionTitle(e.target.value)}} placeholder='e.g is there an R function for finding index of an element in the vector'></input>
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer to your question.</p>
                        <textarea id='ask-ques-body' onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyPress={handleEnter}></textarea> 
                        {/* split the pace btween the words */}
                     </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        
                        <input type='text' id='ask-ques-tags' onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}} placeholder='e.g (xml typescript wordpress'></input>
                    </label>
                </div>
                <input type='submit' value='Review your Question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestions;
