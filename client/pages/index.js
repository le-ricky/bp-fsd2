import React from 'react';
import Layout from '../components/Layout';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Tabs, Tab } from '@material-ui/core'

import CreateUser from '../pages/createuser'
import ListUser from '../pages/listusers'


const Home = () => {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    return (
        <Container maxWidth='sm'>
            <CssBaseline />
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Create User" />
                    <Tab label="List User" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <CreateUser />}
            {selectedTab === 1 && <ListUser />}
        </Container>
    )
}


export default Home;