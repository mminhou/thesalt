import React from 'react';
import Button from '@material-ui/core/Button';

const Home = ({history}) => {
    return (
        <div>
            홈
            <Button variant="contained" color="primary">asdf</Button>
            <button onClick={()=>{history.push('/Product')}}>
                버튼
            </button>
        </div>
    );
};

export default Home;