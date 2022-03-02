const americanOnly                    = require('./american-only.js');
const americanToBritishSpelling       = require('./american-to-british-spelling.js');
const britishOnly                     = require('./british-only.js')
const { britishTitle, americanTitle } = require("./titles.js")
let translatables

class Translator {

    americanToBritish(text){
        let translated = []
        let lower = text.toLowerCase()   
        translatables = Object.assign(americanToBritishSpelling, americanOnly)

        for(let word in translatables){
            let regex = new RegExp(word, 'g')
            let findWord = lower.match(regex)
            findWord ? translated.push([word, translatables[word]]) : false
        }

        return translated
    }

    britishToAmerican(text){
        let britishToEnglish = {}
        let translated = []
        let lower = text.toLowerCase()   


        for(let objects in americanToBritishSpelling){
            var columnName = americanToBritishSpelling[objects];
            britishToEnglish[columnName] = objects
        }

        translatables = Object.assign(britishToEnglish, britishOnly)

        for(let word in translatables){
            let regex = new RegExp(word, 'g')
            let findWord = lower.match(regex)
            findWord ? translated.push([word, translatables[word]]) : false
        }
        
        return translated
    }

    titleTranslator(text, translation){
        let wordsTranslated = []
        
        text = text.toLowerCase()
        if(translation == 'american-to-british'){
            translatables = americanTitle

            for(let word in translatables){
                let regex = new RegExp(word, 'g')
                let findWord = text.match(regex)
                findWord ? wordsTranslated.push([word, translatables[word]]) : false
            }
        } else if(translation == 'british-to-american'){
            translatables = britishTitle

            for(let word in translatables){
                let regex = new RegExp(word, 'g')
                let findWord = text.match(regex)
                findWord ? wordsTranslated.push([word, translatables[word]]) : false
            }
        }
        return wordsTranslated.length ? wordsTranslated : false 
    }

    mergeAndFormat(text, words, titles){
        let finalText = text
        let findTimeFormat = text.match(/([0-1]?[0-9]|2[0-3]).[0-5][0-9]/)

        for(let i = 0; i < words.length; i++){
            let wordToFind = words[i][0]
            let regex = new RegExp(wordToFind)
             finalText = finalText.replace(regex, `<span class="highlight">${words[i][1]}</span>`)
        }

        if(titles){
            for(let i = 0; i < titles.length; i++){
                let titleToFind = titles[i][0]
                let upCaseTitle = titleToFind.replace(titleToFind.charAt(0), titleToFind.charAt(0).toUpperCase())

                let regex = new RegExp(`${upCaseTitle}|${titleToFind}`)

                 finalText = finalText.replace(regex, `<span class="highlight">${titles[i][1]}</span>`)
            }
        }

        if(findTimeFormat){
            let newFormat;
            let americanTime = findTimeFormat[0].match(/:/g);

            if(americanTime){
                newFormat = findTimeFormat[0].replace(americanTime, ".")
            } else {
                newFormat = findTimeFormat[0].replace(/\./, ":")
            }
            
            finalText = finalText.replace(findTimeFormat[0],  `<span class="highlight">${newFormat}</span>`)
        }

        let finalCheck = finalText.match(/span/g) 
        return { output: finalText, translated: finalCheck ? true : false }
    }
}

module.exports = Translator;