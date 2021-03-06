import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CivilWorks from './civilWorks';
import WallFinishes from './WallFinishes';
import FloorFinishes from './FloorFInishes';
import Formwork from './Formwork'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden ={value !==index}
            id = {`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Civil Works" {...a11yProps(0)} />
            <Tab label="Wall Finishes" {...a11yProps(1)} />
            <Tab label="Floor Finishes" {...a11yProps(2)} />
            <Tab label="Formwork" {...a11yProps(3)} />
            <Tab label="Screed" {...a11yProps(1)} />
            <Tab label="Reinforcement" {...a11yProps(1)} />
            <Tab label="External Works" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <CivilWorks />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WallFinishes />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FloorFinishes />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Formwork />
        </TabPanel>
      </div>
    );
  }
  