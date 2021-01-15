import React from 'react';

const locale = {
    language: 'en',
    setLanguage : () => { console.log("hello umair")}
}

const LanguageContext = React.createContext(locale);

export default LanguageContext;
