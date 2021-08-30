import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function ProductCard({item}) {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(
      '/productDetail/' + item.styleCode), [history]);

  return (
    <Card>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          className={classes.media}
          image={item.mainImage}
          title={item.title}
        />
      </CardActionArea>
      {/*  <CardContent>*/}
      {/*    <Typography gutterBottom variant="h5" component="h2">*/}
      {/*      {item.style_code}*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="body2" color="textSecondary" component="p">*/}
      {/*      {item.product_detail}*/}
      {/*    </Typography>*/}
      {/*  </CardContent>*/}
      {/*  <CardContent>*/}
      {/*    <LinearProgress variant="determinate" value={30} />*/}
      {/*  </CardContent>*/}
      {/*</CardActionArea>*/}
      {/*<CardActions>*/}
      {/*  <Button size="small" color="primary">*/}
      {/*    30%*/}
      {/*  </Button>*/}
      {/*  <Button size="small" color="primary">*/}
      {/*    1,000,000₩*/}
      {/*  </Button>*/}
      {/*</CardActions>*/}
    </Card>
  );
}
