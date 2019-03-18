import Accordion from '../src/components/accordion'
import AccordionService from '../src/service/AccordionService'
import articlesFromData from '../src/data/datatest.json';

describe('Accordion', () => {
    const div = document.createElement("div")
    const service = new AccordionService('../src/data/data.json')
    const accordion = new Accordion(div, service)
    global.fetch = jest.fn()
    const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(articlesFromData),
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    it('should be an instance of Accordion', () => {
        expect(accordion).toBeInstanceOf(Accordion)
    })

    it('shoud return a Error when no div', () => {
        expect(() => new Accordion(0, service)).toThrow(Error)
    })

    it('shoud return a Error when incorrect service', () => {
        expect(() => new Accordion(div, 'service')).toThrow(Error)
    })

    it('should return a Correct Accordion', () => {
        accordion.init()
        expect(div.childElementCount).toEqual(1)
        expect(div.firstChild.className).toEqual('accordion')
        expect(div.firstChild).toBeInstanceOf(HTMLDListElement)
    })

})