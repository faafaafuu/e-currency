import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import ExchangePage from '../exchange_page/exchange_page'

import './header.scss'
import HeaderLogo from '../../img/e_currency_logo.png'
import TimeLogo from '../../img/24_7.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    minWidth: 700
  },

  root: {
    backgroundColor: theme.palette.background.paper,
  },
  login: {
    '& > *': {
      margin: theme.spacing(0.6),
    },
  },
  logo_img: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Container className={`${classes.navbar} container`}>
          <div className={classes.logo_img}>
            <Avatar alt="e-curr" src={HeaderLogo}/>
          </div>
        <Tabs
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="e-currency" href="/home" {...a11yProps(0)} />
          <LinkTab label="Правила обмена" href="/rules" {...a11yProps(1)} />
          <LinkTab label="Контакты" href="/contact" {...a11yProps(2)} />
          <LinkTab label="FAQ" href="/faq" {...a11yProps(3)} />
          <LinkTab label="Новости" href="/news" {...a11yProps(4)} />
        </Tabs>
          <div className={classes.login + ' login_btn'}>
            <Button variant="contained">Войти</Button>
          </div>
        </Container>
      </AppBar>
      <Container>
      <TabPanel className="tabpanel" value={value} index={0}>
      <ExchangePage/>
      </TabPanel>
        <Avatar alt="e-curr" src={TimeLogo}/>
      <TabPanel className="tabpanel" value={value} index={1}>
      Правила обмена
      </TabPanel>
      <TabPanel className="tabpanel" value={value} index={2}>
      Контакты
      </TabPanel>
      <TabPanel className="tabpanel" value={value} index={3}>
      FAQ
      </TabPanel>
      <TabPanel className="tabpanel" value={value} index={4}>
      Новости
      </TabPanel>
      </Container>
    </div>
  );
}
