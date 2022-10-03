import SignUpForm from '../../components/sign-up-from/sign-up-form.component';
import SignInForm from '../../components/sign-in-from/sign-in-form.component';
import './authentication.style.scss'

const Authentication = () => { 
    return (
      <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;