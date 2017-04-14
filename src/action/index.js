export const SET_LOCALE = 'SET_LOCALE';

export function localSelector(local, text) {
    switch (local.local){
        case 'en':
            return text.en;
        case 'es':
            return text.es;
        case 'fr':
            return text.fr;
    }
}

export function setlocale(local) {
    let localeShort = '';

    switch (local){
        case 'ENGLISH':
            localeShort = 'en';
            break;
        case 'ESPAÑOL':
            localeShort = 'es';
            break;
        case 'FRANÇAIS':
            localeShort = 'fr';
            break;
    }
    console.log(localeShort);

    return{
        type: SET_LOCALE,
        payload: localeShort
    }
}