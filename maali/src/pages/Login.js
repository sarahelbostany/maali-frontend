
    import axios from 'axios'
    import { useState } from 'react'
    const Login = (props)=>{
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault()
            // console.log(process.env.REACT_APP_BACKEND_URL)
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,{ email, password})
            .then((response)=>{
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.user.id)
            })
            .catch((error)=>{
                console.log(error);
            })
        }

        return(
            <div>
                Login
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="new-email">Email:</label>
                        <input id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="new-password">Password:</label>
                        <input id="new-password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div>
                    <input type="submit" value="Log in" />
                    </div>
                </form>

            </div>
        )
    }
export default Login
