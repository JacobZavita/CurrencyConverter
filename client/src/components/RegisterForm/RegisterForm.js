import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterForm = props => {


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
            label="Name"
            name='name'
            value={props.state.name}
            onChange={props.onChange}
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            name='username'
            value={props.state.username}
            onChange={props.onChange}
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
            />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
          }}
        >
        <TextField
          id="outlined-basic"
          label="Email"
          name='email'
          value={props.state.email}
          onChange={props.onChange}
          variant="outlined"
          sx={{ flexGrow: 1, m: 1 }}
          />
        <TextField
          id="outlined-basic"
          label="Password"
          name='password'
          value={props.state.password}
          onChange={props.onChange}
          variant="outlined"
          sx={{ flexGrow: 1, m: 1 }}
          />
          </Box>
        <Button
          fullWidth
          onClick={props.onClick}
          variant="contained">Register</Button>
      </form>
    </Box>
  )
}

export default RegisterForm
