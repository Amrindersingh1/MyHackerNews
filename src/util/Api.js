const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';


export function fetchSearchTopstories(searchTerm, page = 0) {

    if(!searchTerm) searchTerm = DEFAULT_QUERY;
    return fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => {
          return result;
      })
      .catch(e => e);
  }