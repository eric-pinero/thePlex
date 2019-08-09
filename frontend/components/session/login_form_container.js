import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
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
        formType: 'login'
    };
};


const mdp = (dispatch) => {
    return{
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(msp, mdp)(SessionForm);