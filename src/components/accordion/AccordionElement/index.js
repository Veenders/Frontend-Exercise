class AccordionElement {
    constructor({title = '', content = ''} ,dl){
      this.title = title;
      this.content = content;
      this.dl = dl;
    }
    init(){
      const element = `
        <dt class="accordion-header">${this.title}</dt>
        <dd class="accordion-content"><p>${this.content}</p></dd>
      `;
      this.dl.insertAdjacentHTML('beforeend', element)
    }
}

export default AccordionElement;