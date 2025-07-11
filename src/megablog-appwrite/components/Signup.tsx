import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { login } from '../redux/authSlice';
import Input from './Input';
import Button from './Button';

import loginCover from '../assests/logincover.jpg';

type Inputs = {
    name: string;
    email: string
    password: any
}

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const SignUpUser = async (data: any) => {
        const { email, password, name } = data;
        try {
            const session = await authService.createAccount({ email, password, name })
            console.log(session);

            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    console.log(userData);

                    dispatch(login({ userData }))
                    navigate('/');
                }
            }
        } catch (error) {
            throw error;
        }

    }

    const styleObj = {
        margin: '20px 0px'
    }
    const buttonStyle = {
        border: 'none',
        padding: '5px',
        width: '100%',
        marginTop: '20px'
    }
    return (
        <div style={{
            width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
            backgroundImage: `url(${loginCover})`, backgroundSize: 'cover', position: 'relative'
        }}>
            <div>
                <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>
                    <h2>REGISTER</h2>
                </div>


                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px', width: '300px', backgroundColor: '#f3f1f1f5', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>


                    <form onSubmit={handleSubmit(SignUpUser)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* register your input into the hook by invoking the "register" function */}
                        <Input placeholder='Enter your name'
                            {...register("name")}
                            type='text'
                        />
                        <Input placeholder='Enter your email'
                            {...register("email")}
                            type='email'
                            style={styleObj}
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <Input placeholder='Enter your password'
                            type='password'
                            autoComplete='off'
                            {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}

                        <Button bgColor='gray' style={buttonStyle} type='submit' > SignUp</Button >
                        <p style={{ marginTop: '20px', fontSize: '14px' }}>Already have a account
                            <Link to={'/login'} style={{ textDecoration: 'none', marginLeft: '5px' }}>
                                Sign In
                            </Link>
                        </p>
                        <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.25)', marginTop: '25px' }} />
                    </form>

                </div>

            </div>


        </div>
    )
}


export default SignUp;