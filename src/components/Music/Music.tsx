import React from 'react';
import { AuthRedirect } from '../../hoc/AuthRedirect';

const Music = () => {
    return (
        <div>
            music
        </div>
    );
};

export const MusicContainer = AuthRedirect(Music);