import AccordionService from '../src/service/AccordionService';
import articlesFromData from '../src/data/data.json';


describe('Accordion Service', () => {
    it('should return a list of articles',async () => {
        global.fetch = jest.fn()
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => Promise.resolve(articlesFromData),
          });
          jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        const articles = await new AccordionService('data/data.json').getArticles()
        expect(articles).toEqual(articlesFromData.articles)
    })
})