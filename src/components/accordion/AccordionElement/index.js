class AccordionElement {
    constructor({title = '', content = ''}){
      this.title = title
      this.content = content
    }
    createElement(){
      return `
        <dt class="accordion-header">${this.title}</dt>
        <dd class="accordion-content"><p>${this.content}</p></dd>
      `
    }
}

export default AccordionElement