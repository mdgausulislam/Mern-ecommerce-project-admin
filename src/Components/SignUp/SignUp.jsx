
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SignUp = () => {

    const auth = useSelector(state => state.auth);
    if (auth.authenticate) {
        return <Navigate to='/' />
    }
    return (
        <MDBContainer className="p-3 my-5 container">

            <MDBRow>
                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid animated-image" alt="Phone image" />
                </MDBCol>
                <MDBCol col='4' md='6'>
                    <form onSubmit={handleSignup}>
                        <MDBInput
                            wrapperClass='mb-4 mt-3'
                            placeholder='FirstName'
                            type='text'
                            size="lg" />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='LastName'
                            type='text'
                            size="lg" />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Email address'
                            type='email'
                            size="lg" />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Password'
                            type='password'
                            size="lg" />

                        <input
                            type="submit"
                            value="SignUp"
                            className='btn btn-primary w-100 py-2' />
                    </form>
                    <SocialLogin />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
};

export default SignUp;