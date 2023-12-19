import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,

}
    from 'mdb-react-ui-kit';
import login, { isUserLoggedIn } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, [])

    const handleClickLogin = (e) => {
        e.preventDefault();


        const user = {
            email, password
        }
        dispatch(login(user));
    }

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
                    <form onSubmit={handleClickLogin}>
                        <MDBInput
                            wrapperClass='mb-4'
                            value={email}
                            placeholder='Email address'
                            type='email'
                            size="lg"
                            onChange={(e) => setEmail(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Password'
                            type='password'
                            size="lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        {/* <MDBBtn className="mb-4">Sign in</MDBBtn> */}
                        <input
                            type="submit"
                            value="SignIn"
                            className='btn btn-primary w-100 py-2' />
                    </form>
                    <SocialLogin />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}
export default Login;

