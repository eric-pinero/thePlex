import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            reenterEmail: false,
            reenterPwd: false,
            email2: "",
            password2: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.confirmEmail = this.confirmEmail.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);

        if (this.props.formType === 'signup'){
            if (this.state.email !== this.state.email2 && this.state.password !== this.state.password2 ){
                this.props.receiveErrors(['Emails must match', 'Passwords must match' ]);
            }else if (this.state.email !== this.state.email2 && this.state.password === this.state.password2 ){
                this.props.receiveErrors(['Emails must match']);
            }else if ( this.state.email === this.state.email2 && this.state.password !== this.state.password2 ){
                this.props.receiveErrors(['Passwords must match']);
            } else {
                this.props.processForm(user).then(() => this.props.history.push("/"));
            }
        } else{
            this.props.processForm(user).then(() => this.props.history.push("/")); 
        }
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        }
    }

    demoSubmit(e){
        e.preventDefault();
        const demo ={email: "bootsonboots@bootjack.com", password: "test123"};
        if (this.props.formType === 'login') {
            this.props.processForm(demo).then(() => this.props.history.push("/"));
        } else {
            this.props.demoLogin(demo).then(() => this.props.history.push("/"));
        }
    }

    confirmEmail(){
            if (this.state.reenterEmail && this.props.formType === "signup"){
                return(<input
                    className="signup-input"
                    type="email"
                    placeholder="Re-enter Email"
                    value={this.state.email2}
                    onChange={this.handleChange('email2')}
                />
            )
            } else{
                return null;
            }
    }

    confirmPwd(){
            if (this.state.reenterPwd && this.props.formType === "signup"){
                return(<input
                    className="signup-input"
                    id=""
                    type="password"
                    placeholder="Re-enter Password"
                    value={this.state.password2}
                    onChange={this.handleChange('password2')}
                />
            )
            } else{
                return null;
            }
    }

    render(){
        let formHeader;
        let destination;
        let linkName;
        let submitName;

        const errors = !this.props.errors || this.props.errors.length == 0 ?
            null
            :
            <ul className="errors">
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>

        if (this.props.formType === 'login'){
            formHeader = "Log in";
            destination = "/signup";
            linkName = " Sign Up!"
            submitName = "Log me in!"
        } else{
            formHeader = "Sign up";
            destination = "/login";
            linkName = "Log in"
            submitName = "Create Account"
        }

        const nameInput = this.props.formType == "signup" ?
            <input
                id="username"
                className="signup-input"
                type="text" 
                value={this.state.username}
                placeholder="Name"
                onChange={this.handleChange('username')} 
            />
            :
            null
        ;

        const signupHeader = this.props.formType == "signup" ?
            <h3>Have an account? 
                <Link className="session-link" to={destination}> {linkName}</Link>
            </h3>
            :
            null
        ;

        const loginFooter = this.props.formType == "login" ?
            <div className="login-footer-frame">
                <p className="login-footer">New to Bootbeginner?  <Link className="session-link" to={destination}>{linkName}</Link></p>
            </div>
            :
            null
        ;
        
            return (
            <div className="session-form">
                <div className="signup-frame">
                    {signupHeader}
                    
                    <form onSubmit={this.handleSubmit}>
                        <h1>{formHeader}</h1>
                            
                        {errors}

                        {nameInput}

                        <input
                            id="email"
                            className="signup-input"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange('email')}
                            onFocus={() => this.setState({reenterEmail: true})}
                        />

                        {this.confirmEmail()}

                        <input 
                            id="password"
                            className="signup-input"
                            type="password" 
                            value={this.state.password}
                            placeholder="Password" 
                            onChange={this.handleChange('password')}
                            onFocus={() => this.setState({reenterPwd: true})}
                        />

                        {this.confirmPwd()}


                        <section className="submit-section">
                            <input  className="submit-button" type="submit" value={submitName}/>
                        </section>

                        <div className="line">
                            <div className="grey-line"></div>
                            <span>or</span>
                            <div className="grey-line"></div>
                        </div>

                        <button id="demo" onClick={this.demoSubmit}>Demo User</button>
                        
                            {loginFooter}
                    </form>
                </div>
            </div>
            )

    }
}

export default SessionForm;
