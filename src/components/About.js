import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PeopleIcon from '@mui/icons-material/People';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const style = {
    width: '60%',
    bgcolor: 'background.paper',
    margin: '5% 20%'
};

function About() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem >
                <PeopleIcon />
                <ListItemText primary="The Film" />
            </ListItem>
            <Divider />
            <ListItem divider>
                <ListItemText primary="Here you can see the film, which consist of 50 soccer films from all over ther world." />
            </ListItem>
            <ListItem >
                <LocationOnIcon />
                <ListItemText primary="Nations" />
            </ListItem>
            <Divider light />
            <ListItem >
                <WhatshotIcon />
                <ListItemText primary="Daily News" />
            </ListItem>
        </List>

    );
}

export default About;