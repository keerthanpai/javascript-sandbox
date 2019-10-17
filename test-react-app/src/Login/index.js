import React from 'react';

export class Login extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            msg:''
        }
    }

    doSignIn = () => {
        let uname = this.refs.userref.value;
        let pass = this.refs.passref.value;

        if(uname === 'john' && pass === '123'){
            this.props.history.push('/ibmcomp/bangalore');      //Redirection
            //this.setState({msg:'Welcome'});       
        }
        else
            this.setState({msg:'Invalid login!'});
      }

    render(){

        return (
            <div>

                <h3>Sign In</h3>
                <p> Login: <input type='text' id='username' ref="userref"></input></p>
                <p> Password: <input type="password" id='password' ref="passref"></input></p>
                <p>
                    <button onClick={this.doSignIn}>Ok</button>
                </p>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}