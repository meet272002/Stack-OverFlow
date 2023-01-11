import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../Components/Rightsidebar/Rightsidebar';
import QuestionDetails from './QuestionDetails';

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <QuestionDetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default DisplayQuestions
