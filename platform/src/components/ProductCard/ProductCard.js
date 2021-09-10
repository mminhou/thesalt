import React, {useCallback, useState} from 'react';
import './ProductCard.css'
import {useHistory} from 'react-router-dom';
import {Card, CardActionArea, CardMedia} from '@material-ui/core';

export default function ProductCard({item}) {
    const [activeImage, setActiveImage] = useState(-1);
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push(
        '/productDetail/' + item.id), [history]);

    return (
        <Card>
            <CardActionArea onClick={handleOnClick}
                            onMouseOver={() => setActiveImage(item.id)}
                            onMouseLeave={() => setActiveImage(-1)}>
                <CardMedia
                    className="media"
                    image={item.id === activeImage ? item.subImage : item.mainImage}
                    title={item.title}
                />
            </CardActionArea>
        </Card>
    );
}
