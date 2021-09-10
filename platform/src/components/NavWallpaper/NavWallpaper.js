import React, {useEffect, useState} from 'react';

const NavWallpaper = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWindowDimensions);
    }, []);

    return (
        <div style={{backgroundColor: props.color, height: width <= 850 ? 55 : 120}}>
        </div>
    );
}

export default NavWallpaper;