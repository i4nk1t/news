import axios from 'axios';

// const key = 'e357622f1f7d4c1d9492f992e9b266bf'
const key = 'c334fa4fb459474281a7e91c41ef37c5'

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