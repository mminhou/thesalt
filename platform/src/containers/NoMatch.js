import React from 'react';

const NoMatch = ({match}) => {
    return (
        <div>
            {match.params.username} 의 소개
        </div>
    );
};

export default NoMatch;