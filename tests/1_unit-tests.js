const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let testFunc = new Translator()

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', () => {
        let test = testFunc.americanToBritish('Mangoes are my favorite fruit.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'favourite', 'The translatable word must be translated')
    })
    
    test('Translate I ate yogurt for breakfast. to British English', () => {
        let test = testFunc.americanToBritish('I ate yogurt for breakfast.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'yoghurt', 'The translatable word must be translated')
    })
    
    test("Translate We had a party at my friend's condo. to British English", () => {
        let test = testFunc.americanToBritish("We had a party at my friend's condo.")
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'flat', 'The translatable word must be translated')
    })
    
    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        let test = testFunc.americanToBritish('Can you toss this in the trashcan for me?')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'bin', 'The translatable word must be translated')
    })
    
    test('Translate The parking lot was full. to British English', () => {
        let test = testFunc.americanToBritish('The parking lot was full.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'car park', 'The translatable word must be translated')
    })
    
    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        let test = testFunc.americanToBritish('Like a high tech rube goldberg machine.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Heath Robinson device', 'The translatable word must be translated')
    })
    
    test('Translate To play hooky means to skip class or work. to British English', () => {
        let test = testFunc.americanToBritish('To play hooky means to skip class or work.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'bunk off', 'The translatable word must be translated')
    })
    
    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        let test = testFunc.titleTranslator('No Mr. Bond, I expect you to die.', 'american-to-british')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Mr', 'The translatable word must be translated')
    })
    
    test('Translate Dr. Grosh will see you now. to British English', () => {
        let test = testFunc.titleTranslator('Dr. Grosh will see you now.', 'american-to-british')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Dr', 'The translatable word must be translated')
    })
    
    test('Translate Lunch is at 12:15 today. to British English', () => {
        let test = testFunc.mergeAndFormat('Lunch is at 12:15 today.', [], [])
        let findExpected = test.output.match(/12\.15/)
        
        assert.isNotNull(findExpected)
        assert.isObject(test)
        assert.equal(findExpected, '12.15', 'The translatable word must be translated')
    })
    
    test('Translate We watched the footie match for a while. to American English', () => {
        let test = testFunc.britishToAmerican('We watched the footie match for a while.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'soccer', 'The translatable word must be translated')
    })
    
    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        let test = testFunc.britishToAmerican('Paracetamol takes up to an hour to work.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Tylenol', 'The translatable word must be translated')
    })
    
    test('Translate First, caramelise the onions. to American English', () => {
        let test = testFunc.britishToAmerican('First, caramelise the onions.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'caramelize', 'The translatable word must be translated')
    })
    
    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        let test = testFunc.britishToAmerican('I spent the bank holiday at the funfair.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.isAbove(test.length, 1, 'The translator must have the ability to translate multiple words')
        assert.equal(test[1][1], 'carnival', 'The translatable word must be translated')
        assert.equal(test[0][1], 'public holiday', 'The translatable word must be translated')
    })

    test('Translate I had a bicky then went to the chippy. to American English', () => {
        let test = testFunc.britishToAmerican('I had a bicky then went to the chippy.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.isAbove(test.length, 1, 'The translator must have the ability to translate multiple words')
        assert.equal(test[1][1], 'fish-and-chip shop', 'The translatable word must be translated')
        assert.equal(test[0][1], 'cookie', 'The translatable word must be translated')
    })
    
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        let test = testFunc.britishToAmerican("I've just got bits and bobs in my bum bag.")
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.isAbove(test.length, 1, 'The translator must have the ability to translate multiple words')
        assert.equal(test[1][1], 'odds and ends', 'The translatable word must be translated')
        assert.equal(test[0][1], 'fanny pack', 'The translatable word must be translated')
    })
    
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        let test = testFunc.britishToAmerican('The car boot sale at Boxted Airfield was called off.')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'swap meet', 'The translatable word must be translated')
    })
    
    test('Translate Have you met Mrs Kalyani? to American English', () => {
        let test = testFunc.titleTranslator('Have you met Mrs Kalyani?', 'british-to-american')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Mrs.', 'The translatable word must be translated')
    })
    
    test("Translate Prof Joyner of King's College, London. to American English", () => {
        let test = testFunc.titleTranslator("Prof Joyner of King's College, London.", 'british-to-american')
        assert.isArray(test, 'Must have a an array with the translated word')
        assert.equal(test[0][1], 'Prof.', 'The translatable word must be translated')
    })
    
    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        let test = testFunc.mergeAndFormat('Tea time is usually around 4 or 4.30.', [], [])
        let findExpected = test.output.match(/4:30/)
        
        assert.isNotNull(findExpected)
        assert.isObject(test)
        assert.equal(findExpected, '4:30', 'The translatable word must be translated')
    })
    
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        let getTranslation = testFunc.americanToBritish('Mangoes are my favorite fruit.')

        assert.isArray(getTranslation, 'Must have a an array with the translated word')
        let test = testFunc.mergeAndFormat('Mangoes are my favorite fruit.', getTranslation)
        let findHighlight = test.output.match(/<span class="highlight">favourite<\/span>/)

        assert.isNotNull(findHighlight)
        assert.isObject(test)
        assert.isTrue(test.translated)
        assert.equal(findHighlight, '<span class="highlight">favourite</span>', 'The translatable word must be translated')
    })
    
    test('Highlight translation in I ate yogurt for breakfast.', () => {
        let getTranslation = testFunc.americanToBritish('I ate yogurt for breakfast.')

        assert.isArray(getTranslation, 'Must have a an array with the translated word')
        let test = testFunc.mergeAndFormat('I ate yogurt for breakfast.', getTranslation)
        let findHighlight = test.output.match(/<span class="highlight">yoghurt<\/span>/)

        assert.isNotNull(findHighlight)
        assert.isObject(test)
        assert.isTrue(test.translated)
        assert.equal(findHighlight, '<span class="highlight">yoghurt</span>', 'The translatable word must be translated')
    })
    
    test('Highlight translation in We watched the footie match for a while.', () => {
        let getTranslation = testFunc.britishToAmerican('We watched the footie match for a while.')

        assert.isArray(getTranslation, 'Must have a an array with the translated word')
        let test = testFunc.mergeAndFormat('We watched the footie match for a while.', getTranslation)
        let findHighlight = test.output.match(/<span class="highlight">soccer<\/span>/)

        assert.isNotNull(findHighlight)
        assert.isObject(test)
        assert.isTrue(test.translated)
        assert.equal(findHighlight, '<span class="highlight">soccer</span>', 'The translatable word must be translated')
    })
    
    test('Highlight translation in paracetamol takes up to an hour to work.', () => {
        let getTranslation = testFunc.britishToAmerican('paracetamol takes up to an hour to work.')

        assert.isArray(getTranslation, 'Must have a an array with the translated word')
        let test = testFunc.mergeAndFormat('paracetamol takes up to an hour to work.', getTranslation)  
        let findHighlight = test.output.match(/<span class="highlight">Tylenol<\/span>/)

        assert.isNotNull(findHighlight)
        assert.isObject(test)
        assert.isTrue(test.translated)
        assert.equal(findHighlight, '<span class="highlight">Tylenol</span>', 'The translatable word must be translated')
    })
    
});
