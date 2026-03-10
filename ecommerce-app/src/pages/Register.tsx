import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const registerUser = async (formValues: any) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/register",
                formValues
            );

            console.log("Registered Successfully:", response.data);
            alert("Registration Successful!");

        } catch (error: any) {
            console.error("Error:", error.response?.data || error.message);
            alert(error.response?.data || "Registration Failed");
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4 p-md-5">

                            <h1 className="card-title h3 fw-bold text-center mb-4">
                                Register
                            </h1>

                            <form onSubmit={handleSubmit(registerUser)}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address<span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        placeholder="Email Address"
                                        {...register("email",{ required: { value: true, message: "Email is required"}, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format' }})}
                                    />
                                    {errors.email?.message && <p className="text-danger small mb-0">{String(errors.email.message)}</p>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="full-name" className="form-label">Full Name<span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="full-name"
                                        placeholder="Full Name"
                                        {...register("fullName",{ required: { value: true, message: "Full name is required"}, pattern: { value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/, message: "Enter valid full name (letters only, first and last name required )"}})}
                                    />
                                    {errors.fullName?.message && <p className="text-danger small mb-0">{String(errors.fullName.message)}</p>}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile-no" className="form-label">Mobile No<span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="mobile-no"
                                        placeholder="Mobile No"
                                        {...register("mobileNo",{ required: { value:true, message: "Mobile No is required"}, pattern: { value: /^(?:\+91|91)?[6-9]\d{9}$/, message: "Enter a valid Indian mobile number (with or without +91)"}})}
                                    />
                                    {errors.mobileNo?.message && <p className="text-danger small mb-0">{String(errors.mobileNo.message)}</p>}

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
                                        Register
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;