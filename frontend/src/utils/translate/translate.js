import enTranslate from './en.json';

export const translate = textPath => {
  console.log('textpath', textPath);
  return enTranslate[textPath];
}