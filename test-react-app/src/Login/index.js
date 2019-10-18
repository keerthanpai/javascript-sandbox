import React from 'react';

export class Login extends React.Component{
        constructor(props){
        super(props);
        if(sessionStorage.getItem('login') != null){
            alert( sessionStorage.getItem('login') + ' is already logged in.')
            this.props.history.push("/");
        }
        this.state = {
            msg:''
        }
    }

    doSignIn = () => {
        let user = this.refs.userref.value;
        let pass = this.refs.passref.value;

        if(user === 'john' && pass === '123'){
            sessionStorage.setItem('login', user);
            this.props.history.push("/");      //Redirection
            //this.props.history.push('/userhome/' + user);      //Redirection
            //this.setState({msg:'Welcome'});       
        }
        else
            this.setState({msg:'Invalid login!'});
      }

    render(){

        return (
            <div>

                <h3>Sign In *only validates john/123*</h3>
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