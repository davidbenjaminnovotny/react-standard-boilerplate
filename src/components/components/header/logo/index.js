import React from 'react';
import { useTranslation } from 'react-i18next';


function Logo() {
    const { t } = useTranslation();
    return (
        <div className="logo">
            <h1 className="text-5xl">{t('logo.1')}</h1>
            <p className="text-xs">Some stuff about the brand</p>
        </div>
    );
}

export default Logo;
