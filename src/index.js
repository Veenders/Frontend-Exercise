import Accordion from './components/accordion';
import AccordionService from './service/AccordionService';
import './css/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('App')
  const service = new AccordionService('data/data.json');
  new Accordion(app, service).init();
})



