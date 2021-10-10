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


const Login = () => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = (event, newIndex) => {
    setIndex(newIndex)
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '60vh', marginTop: '20px' }}>
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
            <LoginForm />
          </TabPanel>
          <TabPanel value={index} index={1}>
            <RegisterForm />
          </TabPanel>
        </Box>
      </Container>
    </>
  )
}

export default Login
