import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import User from '../../utils/userAPI'

const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = ({ target }) => {
    setLoginState({ ...loginState, [target.name]: target.value })
  }

  const handleLoginUser = event => {
    event.preventDefault()
    User.login(loginState)
      .then(({ data: token }) => {
        localStorage.setItem('token', token)
        window.location = '/'
      })
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <form>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            name='username'
            value={loginState.username}
            onChange={handleInputChange}
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            name='password'
            value={loginState.password}
            onChange={handleInputChange}
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
          />
        </Box>
        <Button
          onClick={handleLoginUser}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default LoginForm
