import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Page/Home/home';
import Auth from './Page/Auth/Auth';
import Questions from './Page/Questions/Questions';
import AskQuestions from './Page/AskQuestions/AskQuestions';
import DisplayQuestions from './Page/Questions/DisplayQuestions';
import QuestionDetails from './Page/Questions/QuestionDetails';
import Tags from './Page/Tags/Tags';
import Users from './Page/Users/Users';
import UserProfile from './Page/UserProfile/UserProfile';
const Rou = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/Auth' element={<Auth/>}/>
        <Route path='/Questions' element={<Questions/>}></Route>
        <Route path='/AskQuestions' element={<AskQuestions/>}/>
        <Route path='/QuestionDetails' element={<QuestionDetails/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestions/>}/>
        <Route path='/Tags' element={<Tags/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default Rou
