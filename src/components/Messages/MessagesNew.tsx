import { Box, Tabs, Tab, Typography } from '@mui/material';
import React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const MessagesNew = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dimich" {...a11yProps(0)} sx={{fontSize: '12px'}}/>
          <Tab label="Andrey" {...a11yProps(1)} sx={{fontSize: '12px'}}/>
          <Tab label="Sveta" {...a11yProps(2)} sx={{fontSize: '12px'}}/>
        </Tabs>
      </Box>
      <div>
          <CustomTabPanel value={value} index={0}>
            Hi
            Yo
            How are you?
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
      </div>
    </Box>
  );
};
