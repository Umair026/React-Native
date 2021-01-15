
import * as RNLocalize from "react-native-localize";
import I18n from 'i18n-js'

import en from './ui/locals/en'
import urdu from './ui/locals/urdu'

const locale = RNLocalize.getLocales();

// if (Array.isArray(locale)) {
//     I18n.locale = locale[0].languageTag;
// }


I18n.fallbacks = true;
I18n.translations = {
    en,
    urdu
}

export function setLocal(language){
    // console.log('bool: '+bool +" and language= "+ language)
    I18n.locale = language;
    console.log(I18n.locale+"-- selected: "+ language+'\n');
    
    // if(bool){
    //     I18n.locale = 'urdu';
    // } else {
    //     I18n.locale = 'en';
    // }
    
}

export function strings(name, params = {}) {
    return I18n.t(name, params);
};

export default I18n;