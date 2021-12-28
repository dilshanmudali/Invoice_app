import React, {useState} from 'react'

const LoginForm = ({onLogin}) => {

    // const [testLogin, setTestLogin] = useState({
    //   username: '',
    //   password: ''
    // })

    const [errors, setErrors] = useState([])
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [isloading, setIsLoading] = useState(false)
    

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((error) => setErrors(error.error));
          }
        });
    }

    const handleTest = () => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: 'recruiter',
          password: '123456'
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((error) => setErrors(error.error));
        }
      });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input className='input-box'  placeholder='Your Username' type='text' id='username' 
            name = "username"autoComplete='off' value={login.username} 
            onChange={handleChange}
            />
            <input className='input-box'  placeholder='Password' type='password' id='password' 
            name = "password"
            autoComplete='current-password' value={login.password} 
            onChange={handleChange}
            />

            <button className='login-btn' type='submit'>
            {isloading ? "Loading...." : "Login"}

            </button>
            {/* {console.log(errors)} */}
              <span className="err-container">{errors}</span>
            {/* {errors.map(err => {
              return (
                <span key={err}>
                {err}
                </span>
                )
              })} */}
            
              <button style={{backgroundColor: '#3e374c'}} onClick={() =>handleTest()}>Recruiter Login</button>
        </form>
    )              
}

export default LoginForm
