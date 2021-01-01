import HttpService from "./services";

export default class NewsService {

    static topNews() {
        const data = {
            headers: {
                // eslint-disable-next-line
                Authorizarion : 'Bearer ' + 'ea4ece992b904dc395442151314fe525',
                "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"
            },
            country: 'us'
        };
        return HttpService.get(`https://newsapi.org/v2/top-headlines`, data);
    }
}