import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm';
import User from '../../utils/userAPI'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Login = props => {
  const [registerState, setRegisterState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })

  const handleRegisterInputChange = ({ target }) => {
    setRegisterState({ ...registerState, [target.name]: target.value })
  }

  const handleRegisterUser = event => {
    event.preventDefault()
    User.register(registerState)
      .then(() => {
        alert('user registered')
        handleChangeIndex({}, 0)
      })
      .catch(err => console.error(err))
  }

  const [index, setIndex] = useState(0)

  const handleChangeIndex = (event, newIndex) => {
    setIndex(newIndex)
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', marginTop: '20px', justifyContent: 'center', alignContent: 'center' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              aria-label="basic tabs example"
              variant="fullWidth"
              indicatorColor="secondary"
              value={index}
              onChange={handleChangeIndex}
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={index} index={0}>
            <LoginForm updateMe={props.updateMe}/>
          </TabPanel>
          <TabPanel value={index} index={1}>
            <RegisterForm
              state={registerState}
              onChange={handleRegisterInputChange}
              onClick={handleRegisterUser}
            />
          </TabPanel>
        </Box>
      </Container>
    </>
  )
}

export default Login
