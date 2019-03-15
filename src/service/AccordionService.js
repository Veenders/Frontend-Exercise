class AccordionService{
    constructor(url){
        this.url = url;
    }
    getArticles(){
        return fetch(this.url)
          .then(res=>res.json())
          .then(({ articles }) => articles)
          .catch(error=>console.error(error));
    }
}
export default AccordionService;

/*

const api = (function () {
    const variablesPrivadas = ''
    return {
        getArticles
    }
})()

*/
