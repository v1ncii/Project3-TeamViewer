import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    height: 590,
    width: 250,
    
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
    const [spacing] = React.useState(1);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="220"
                                image='https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/iwyqeuwashxpntwnuqqk.jpg'
                                title="Aaron Rodgers"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Aaron Rodgers
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Aaron Rodgers is an American football player who is currently the starting quarterback for the Green Bay Packers.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="secondary"> 
                                Share
                            </Button>
                            <Button size="small" color="secondary">
                                Player Info
                            </Button>
                            <Button size="small" color="secondary">
                                Stats
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="220"
                                image= 'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/lqmqworyl9z5conrpf0p.jpg'
                                title="Aaron Jones"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Aaron Jones
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Aaron Jones is an American football player who is currently the starting runnerback for the Green Bay Packers.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="secondary"> 
                                Share
                            </Button>
                            <Button size="small" color="secondary">
                                Player Info
                            </Button>
                            <Button size="small" color="secondary">
                                Stats
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="220"
                                image='https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/yggcr8adqvldz8tgvlwf.jpg'
                                title="Davante Adams"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Davante Adams
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Davante Adams is an American football player who is currently the starting receiver for the Green Bay Packers.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="secondary"> 
                                Share
                            </Button>
                            <Button size="small" color="secondary">
                                Player Info
                            </Button>
                            <Button size="small" color="secondary">
                                Stats
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>

            <Grid item xs={3}>
                <Grid container justify="center" spacing={spacing}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.paper}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="220"
                                image= 'https://static.clubs.nfl.com/image/private/t_thumb_squared_2x/f_auto/packers/jdax36xcbpwepossfnid.jpg'
                                title="Mason Crosby"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Mason Crosby
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Mason Crosby is an American football player who is currently the starting kicker for the Green Bay Packers.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="secondary"> 
                                Share
                            </Button>
                            <Button size="small" color="secondary">
                                Player Info
                            </Button>
                            <Button size="small" color="secondary">
                                Stats
                            </Button>
                        </CardActions>

                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}