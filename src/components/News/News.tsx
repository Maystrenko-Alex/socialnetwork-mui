import React from 'react';
import { AuthRedirect } from '../../hoc/AuthRedirect';

const News = () => {
    return (
        <div>
            news
        </div>
    );
};


export const NewsContainer = AuthRedirect(News);
