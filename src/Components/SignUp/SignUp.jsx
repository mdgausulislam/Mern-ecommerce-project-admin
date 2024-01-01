
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
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/actions/userAction';
import { useEffect, useState } from 'react';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user.loading) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }
    }, [user.loading]);

    const userSignup = (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password,
        };

        dispatch(signup(user));
    };

    if (auth.authenticate) {
        return <Navigate to={`/`} />;
    }

    if (user.loading) {
        return <p>Loading...!</p>;
    }

    return (
        <MDBContainer className="p-3 my-5 container">
            <MDBRow>
                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid animated-image" alt="Phone image" />
                </MDBCol>
                <MDBCol col='4' md='6'>
                    <form onSubmit={userSignup}>
                        <MDBInput
                            wrapperClass='mb-4 mt-3'
                            placeholder='FirstName'
                            type='text'
                            size="lg"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='LastName'
                            type='text'
                            size="lg"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Email address'
                            type='email'
                            size="lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <MDBInput
                            wrapperClass='mb-4'
                            placeholder='Password'
                            type='password'
                            size="lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <input
                            type="submit"
                            value="SignUp"
                            className='btn btn-primary w-100 py-2' />
                    </form>
                    {user.message}
                    <SocialLogin />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
};

export default SignUp;