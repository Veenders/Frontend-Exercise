import AccordionElement from './AccordionElement';

class Accordion {
  constructor(app,service){
    this.App = app;
    this.service = service;
  }
  init(){
    this.createAccordion();
    this.handleToggle();
  }
  createAccordion(){
    this.dl = document.createElement("DL");
    this.dl.className='accordion';
    this.addArticle()
    this.App.appendChild(this.dl);
  }
  async addArticle(){
    const articles = await this.service.getArticles();
    articles.forEach(article => {
      const element = new AccordionElement(article,this.dl);
      element.init();
    });
  }
  handleToggle(){
    this.dl.addEventListener('click',event => {
      const target = event.target;
      this.toggleElement(target);
    })
  }
  toggleElement(target){
    const toogle = {
      DT:()=>{
        target.classList.contains('isActive') || this.hideElements(Array.from(this.dl.children));
        this.showElements([target,target.nextElementSibling]);
      },
      DD:()=>{this.hideElements([target.previousElementSibling,target]);},
      P:()=>{this.hideElements([target.parentElement.previousElementSibling,target.parentElement]);}
    }

    toogle[target.tagName]();
  }
  hideElements(elements = []){
    elements.forEach(element => {element.classList.remove('isActive')})
  }
  showElements(elements = []){
    elements.forEach(element => {element.classList.toggle('isActive')})
  }
}

export default Accordion;