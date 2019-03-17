import AccordionElement from './AccordionElement'

class Accordion {
  constructor(app,service){
    if(!app) throw Error('Not Element to create the Accordion')
    if(typeof service.getArticles !== 'function') throw Error('Service is not a correct service')
    this.app = app
    this.service = service
  }
  init(){
    this._createAccordion()
    this._handleToggle()
  }
  _createAccordion(){
    this.dl = document.createElement("DL")
    this.dl.className='accordion'
    this._addArticle(this.dl)
    this.app.appendChild(this.dl)
  }

  _articleToAccordionItem (article) {
    return new AccordionElement(article).createElement()
  }
  async _addArticle(container){
    const elements = (await this.service.getArticles())
      .map(this._articleToAccordionItem)
      .join('')
    
    container.insertAdjacentHTML('beforeend',elements)
  }
  _handleToggle(){
    this.dl.addEventListener('click',({target}) => {
      this._toggleElement(target)
    })
  }
  _toggleElement(target){
    const toogle = {
      dt:()=>{
        target.classList.contains('is-active') || this._hideElements(Array.from(this.dl.children))
        this._showElements([target,target.nextElementSibling])
      },
      dd:()=>{this._hideElements([target.previousElementSibling,target])},
      p:()=>{this._hideElements([target.parentElement.previousElementSibling,target.parentElement])}
    }

    toogle[target.tagName.toLowerCase()]()
  }
  _hideElements(elements = []){
    elements.forEach(element => {element.classList.remove('is-active')})
  }
  _showElements(elements = []){
    elements.forEach(element => {element.classList.toggle('is-active')})
  }
}

export default Accordion