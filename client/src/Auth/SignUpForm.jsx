import {useState} from 'react'

const SignUpForm = ({onLogin}) => {

    const [signup, setSignup] = useState({
        username: '',
        organization_name: '',
        password: '',
        password_confirmation: ''
    })

    const [isloading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

    const handleChange = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signup),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then(user => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input className='input-box' placeholder='Username' type='text' id='username' 
             name = "username"autoComplete='off' value={signup.username} 
            onChange={handleChange}
            />
            <input className='input-box' placeholder='Organization Name' type='text' id='organization' 
             name = "organization_name"autoComplete='off' value={signup.organization_name} 
            onChange={handleChange}
            />

            <input className='input-box' placeholder='Password' type='password' id='password' 
             name = "password"
            autoComplete='current-password' value={signup.password} 
            onChange={handleChange}
            />
            <input className='input-box' placeholder='Password Confirmation' type='password' 
             name = "password_confirmation"
            id='password_confirmation' autoComplete='current-password' value={signup.password_confirmation}
            onChange={handleChange} />
            <button type='submit' className='signup-btn'>
            {isloading ? "Loading...." : "Sign Up"}
            </button>
            {errors.map(err => {
                return (
                    <span className="err-container" key={err}>
                        {err}
                    </span>
                )
                })}
        </form>
        )
}

export default SignUpForm
