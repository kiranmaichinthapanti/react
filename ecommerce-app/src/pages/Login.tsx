import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
    const { register, handleSubmit, formState: { errors }, watch} = useForm();

    const loginUser = async (formValues: any) => {
        try{
            const response = await axios.post('http://localhost:4000/login', formValues);
        
            localStorage.setItem("token", response.data.accessToken);

            alert("Login Successful ✅");
            console.log(response.data);

        } catch (error: any) {
            alert("Invalid email or password ❌");
            console.error(error.response?.data);
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">
                            <h1 className="card-title h3 fw-bold text-center mb-4">
                                Login
                            </h1>
                            <form onSubmit = { handleSubmit(loginUser)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address<span className="text-danger">*</span></label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Email Address"
                                        {...register("email",{ required: { value: true, message: "Email is required"}, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format' }})}
                                    />
                                    {errors.email?.message && <p className="text-danger small mb-0">{String(errors.email.message)}</p>}
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        id="password"
                                        placeholder="Password"
                                        {...register("password",{ required: { value:true, message: "Password is required"}, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Password must be at least 8 characters, include uppercase, lowercase, number and special character'}})}
                                    />
                                    {errors.password?.type === 'pattern' ? (
                                        <div>
                                            <p className="form-text small text-danger mb-0 mt-1">Password must have:</p>
                                            <ul className="form-text small text-danger list-unstyled mb-0 ps-3">
                                                <li>Minimum 8 characters</li>
                                                <li>At least 1 uppercase letter</li>
                                                <li>At least 1 lowercase letter</li>
                                                <li>At least 1 digit</li>
                                                <li>At least 1 special character (e.g. !@#$%^&*) </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <>
                                            {errors.password?.message && <p className="text-danger small mb-0">{String(errors.password.message)}</p>}
                                        </>
                                    )}
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg"
                                    >
                                        Login
                                    </button>
                                </div>
                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;