import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm = () => {
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
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flexGrow: 1, m: 1 }}
          />
        </Box>
        <Button fullWidth variant="contained">Login</Button>
      </form>
    </Box>
  )
}

export default LoginForm
