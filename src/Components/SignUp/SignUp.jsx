
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
const SignUp = () => {
    return (
        <MDBContainer className="p-3 my-5 container">
            <form>
                <MDBRow>
                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid animated-image" alt="Phone image" />
                    </MDBCol>
                    <MDBCol col='4' md='6'>
                        <MDBInput wrapperClass='mb-4 mt-3' placeholder='FirstName' id='formControlLg' type='text' size="lg" />

                        <MDBInput wrapperClass='mb-4' placeholder='LastName' id='formControlLg' type='text' size="lg" />

                        <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" />

                        <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />

                        {/* <MDBBtn className="mb-4">Sign in</MDBBtn> */}
                        <input type="submit" value="SignUp" className='btn btn-primary w-100 py-2' />
                        <SocialLogin />
                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
};

export default SignUp;