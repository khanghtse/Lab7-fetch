import { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function Players() {
    const [APIData, setAPIData] = useState([])
    const baseURL = `https://6531223c4d4c2e3f333c700b.mockapi.io/players`;
    useEffect(() => {
        fetch(baseURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => { setAPIData(data) })
            .catch(error => console.log(error.message));
    }, []);

    return (
        <Grid container spacing={2} className='new-container'>
            {
                APIData.map((data, index) => {
                    return (
                        <Grid item xs={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={data.img}
                                    alt={data.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.club}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">{data.nation}</Button>
                                    <Button size="small">Detail</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default Players;