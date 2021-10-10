import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RegisterForm = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
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
          variant="outlined"
          sx={{ flexGrow: 1, m: 1 }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          sx={{ flexGrow: 1, m: 1 }}
        />
      </Box>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ m: 2 }}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{ m: 2 }}
      />
      <Button variant="contained">Login</Button>
    </Box>
  )
}

export default RegisterForm
