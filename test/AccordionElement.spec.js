import AccordionElement from '../src/components/accordion/AccordionElement';

describe('Accordion Element', () => {
    const accordionElement = new AccordionElement({'title':'test','content':'test content'})

    it('should be an instance of AccordionElement', ()=>{
        expect(accordionElement).toBeInstanceOf(AccordionElement)
    })

    it('should return a correct AccordionElement', ()=>{
        const correctAccordionElement = `
            <dt class="accordion-header">test</dt>
            <dd class="accordion-content"><p>test content</p></dd>
            `
        expect(accordionElement.createElement().replace(/\s/g, ''))
            .toEqual(correctAccordionElement.replace(/\s/g, ''))
    })
})