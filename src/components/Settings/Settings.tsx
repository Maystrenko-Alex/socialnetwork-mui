import React from 'react';
import { AuthRedirect } from '../../hoc/AuthRedirect';

const Settings = () => {
    return (
        <div>
            sett
        </div>
    );
};

export const SettingsContainer = AuthRedirect(Settings)