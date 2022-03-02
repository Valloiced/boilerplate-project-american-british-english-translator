'use strict';

const { check } = require('../components/american-to-british-spelling.js');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body
      let wordsTranslated
      let titles

      if(text && locale){

        switch(locale){
          case 'american-to-british': 
            let translateEng = translator.americanToBritish(text)
            translateEng ? wordsTranslated = translateEng : false
            break 
          
          case 'british-to-american':
            let translateBri = translator.britishToAmerican(text)
            translateBri ? wordsTranslated = translateBri : false
            break

          default: 
            return res.json({error: "Invalid value for locale field"})
        }

        let title = translator.titleTranslator(text, locale)
        title ? titles = title : false

      } else if (text == ''){
        return res.json({error: "No text to translate"})

      } else if(!text || !locale) {
        return res.json({ error: 'Required field(s) missing' })
      }

      let finalFormat = translator.mergeAndFormat(text, wordsTranslated, titles)

      finalFormat.translated 
      ? res.json({text: text, translation: finalFormat.output})
      : res.json({text: text, translation: 'Everything looks good to me!'})

  
    });
};
