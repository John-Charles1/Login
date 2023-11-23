import './Login.css'

function Login(){
    return(
        <>
            <div className='body'>
                <form>
                    <h1>Login</h1>
                    <div className='textBox'>
                        <input type="text" placeholder="username" />
                    </div>
                    <div className='textBox'>
                        <input type="text" placeholder="password" />
                    </div>
                    <input type="submit" className='loginBtn'/>
                    <div>
                        Don't have an account?
                        <br />
                        <a href="#">Sign up</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;