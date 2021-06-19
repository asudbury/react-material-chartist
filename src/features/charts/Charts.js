import React, { useState } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import TimelineIcon from '@material-ui/icons/Timeline';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import { makeStyles } from '@material-ui/core/styles';
import BarChartsConfig from './BarChartsConfig';
import LineChartsConfig from './LineChartsConfig';
import PieChartsConfig from './PieChartsConfig';
import ChartsCategory from './ChartsCategory';

const useStyles = makeStyles({
  tab: {
    textTransform: 'none',
    fontSize: '12px'
  }
});

function Charts() {
  const classes = useStyles();
  const [value, setValue] = useState('line');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: 'aliceblue' }}>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab
              className={classes.tab}
              label="Line Charts"
              value="line"
              icon={<TimelineIcon fontSize="small" />}
            />
            <Tab
              className={classes.tab}
              label="Bar Charts"
              value="bar"
              icon={<BarChartIcon fontSize="small" />}
            />
            <Tab
              className={classes.tab}
              label="Pie Charts"
              value="pie"
              icon={<PieChartIcon fontSize="small" />}
            />
          </Tabs>
        </AppBar>
        <TabPanel value="line">
          <ChartsCategory chartsConfig={LineChartsConfig} />
        </TabPanel>
        <TabPanel value="bar">
          <ChartsCategory chartsConfig={BarChartsConfig} />
        </TabPanel>
        <TabPanel value="pie">
          <ChartsCategory chartsConfig={PieChartsConfig} />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Charts;
