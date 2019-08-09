import { connect } from "react-redux";
import { signup, login, receiveErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => {
    
    let errors;
    if (Array.isArray(state.errors.session)){
        errors = state.errors.session;
    } else {
        errors = state.errors.session.responseJSON;
    }
    return {
        errors,
        formType: 'signup'
    };
};


const mdp = (dispatch) => {
    
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: (demo) => dispatch(login(demo)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),

    };
};

export default connect(msp, mdp)(SessionForm)