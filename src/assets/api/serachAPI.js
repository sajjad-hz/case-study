import httpInstance from "../../utils/httpInstasnce";

export class SearchApi {
    constructor(baseURL = `https://api.themoviedb.org/3/search/movie?api_key=2ff2b842380979ada1e6bc585b8d84bd&language=de-DE&query=`) {
        this.instance = httpInstance({
            baseURL,
            timeout: 15000
        })

        this.defaultConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    getSearchResult(query, page, config = this.defaultConfig) {
        const reqConfig = this._includeQuery(query, config);
        return this.instance.get(`${query}&page=${page}`, reqConfig);
    }

    _includeQuery(query = {}, config = this.defaultConfig) {
        if (Object.keys(query).length === 0) {
          return config;
        }
    
        return {
          ...config,
          params: query,
        };
      }
}

const searchHandler = new SearchApi();

export default searchHandler;