import { SyntheticEvent, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './dashboardContent.scss';
import Homepage from './homepage/Homepage';

const DashboardContent = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const handleTabChange = (_: SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue);
    };

    return (
        <div className="dashboard-content">
            <TabContext value={currentTab}>
                <TabList onChange={handleTabChange} centered>
                    <Tab label="HomePage" value="1" />
                    <Tab label="Social Media" value="2" disabled />
                </TabList>
                <TabPanel value="1">
                    <Homepage />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
        </div>
    );
};

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent;
