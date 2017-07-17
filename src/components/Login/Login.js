import React, {Component} from 'react';
import './Login.css'

export default class Login extends Component {
    render(){
        return(
            <div className="login">
    testing
               <div className='logintext'><span>Username:</span><div className='loginInput'></div></div>
                <div id="spacerDivLogin"></div>
              <div className='logintext'><span>Password:</span><div className='loginInput'></div></div>
              
            </div>
        )
    }
}