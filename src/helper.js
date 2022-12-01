export const isEmptyObjParams = (obj) => {
    return !Object.keys(obj).every(key => obj[key] !== null && obj[key]!== '');
}