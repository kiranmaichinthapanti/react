import { useRef, useEffect } from 'react';

function Test(){
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    useEffect(()=> {
        emailRef.current.value='test@gmail.com';
    }, []);

    const loginUser = () => {
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };

    return(
        <div className="container">
            <div className="my-4">
                <label>Email: </label>
                <input type="email" className="form-control" ref={emailRef} defaultValue="test1234"/>
            </div>
            <div className="my-4">
                <label>Password:</label>
                <input type="password" className="form-control" ref={passwordRef}/>
            </div>
            <button onClick={loginUser} className="btn btn-success">Submit</button>
        </div>
    )
}
export default Test;