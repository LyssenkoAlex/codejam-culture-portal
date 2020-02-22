export const SHOW_DIRECTOR = 'SHOW_DIRECTOR';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export function showDirector(id) {
    return {type:SHOW_DIRECTOR, id}
}

export function changeLanguage(langCode) {
    return {type:CHANGE_LANGUAGE, langCode}
}
