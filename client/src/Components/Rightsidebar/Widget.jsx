import React from 'react';
import './Rightsidebar.css';
import comment from '../Rightsidebar/Pictures/comment.png';
import pen from '../Rightsidebar/Pictures/pen.png';
import logo from '../../assets/login.png';

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width="18px"/>
                <p>Observability is the key to the future of software (and your DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width="18px"/>
                <p>Podcast 374:How valuable is your screen name?</p>
            </div>
        </div>
        
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18px"/>
                <p>Review queue workflows - Final release..</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width="18px"/>
                <p>Please welcome valued Associates: #958-V2Blast #959- SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={logo} alt="pen" width="18px"/>
                <p>Outdated Answers:accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>

        <h4>Hot Meta Post</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Why was this spam flag declined,yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user has high enough rep to....</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link ti the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
