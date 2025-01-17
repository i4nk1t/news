import axios from 'axios';

const key = 'a5f589146a274fd3b3724730e456cc57'

const get_topStories = () => {

return(
    axios.get('http://newsapi.org/v2/top-headlines?' +
          'country=us&apiKey=' + key

).then(res => {return res.data.articles}))
    }


    const get_searchData = async (term) => {
        console.log('from search action', term)
        return(
                await axios.get('http://newsapi.org/v2/everything?' +
        'q='+ term  + '&' +
        'apiKey=' + key
            ).then(res => {return res.data.articles}))}

            export  { get_topStories, get_searchData };