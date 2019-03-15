import Accordion from './components/accordion'
import './index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const dl = document.ElementById('accordion')
  const accordion = new Accordion('accordion');
  accordion.init()
})



