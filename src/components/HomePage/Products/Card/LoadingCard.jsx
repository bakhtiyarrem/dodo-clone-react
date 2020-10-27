import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingCard = () => {
    return (
        <ContentLoader
            speed={2}
            width={325}
            height={520}
            viewBox="0 0 325 520"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="30" rx="200" ry="200" width="260" height="260"/>
            <rect x="0" y="310" rx="8" ry="8" width="260" height="30"/>
            <rect x="0" y="355" rx="0" ry="0" width="260" height="105"/>
            <rect x="0" y="480" rx="0" ry="0" width="110" height="40"/>
            <rect x="150" y="480" rx="11" ry="11" width="110" height="40"/>
        </ContentLoader>
    );
};

export default LoadingCard;
