import React, {useCallback} from 'react';
import './ProductCard.css'
import {useHistory} from 'react-router-dom';
import {Card, CardActionArea, CardMedia} from '@material-ui/core';

export default function ProductCard({item}) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(
      '/productDetail/' + item.id), [history]);

  return (
    <Card>
      <CardActionArea onClick={handleOnClick}>
        <CardMedia
          className="media"
          image={item.mainImage}
          title={item.title}
        />
      </CardActionArea>
    </Card>
  );
}
