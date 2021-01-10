import HttpService from "./services";

export default class NewsService {

    static topNews() {
        return HttpService.get(`/news/latest`, {})
            .then(res => res.articles);
    }
}