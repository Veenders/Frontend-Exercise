import AccordionService from '../src/service/AccordionService';
import articlesFromData from '../src/data/datatest.json';

describe('Accordion Service', () => {

    it('should be an instance of AccordionService', () => {
        const accordionService = new AccordionService('data/data.json')
        expect(accordionService).toBeInstanceOf(AccordionService)
    })

    it('should return a list of articles', async () => {
        global.fetch = jest.fn()
        const mockFetchPromise = Promise.resolve({
            json: () => Promise.resolve(articlesFromData),
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        const articles = await new AccordionService('data/data.json').getArticles()
        expect(articles).toEqual(articlesFromData.articles)
    })
})