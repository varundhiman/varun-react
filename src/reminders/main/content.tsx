import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import NewsService from '../services/newsService';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import '../../App.css';
import {CardActions, CardContent, Collapse, Grid, Typography} from "@material-ui/core";

class Article {
    title: string;
    url: string;
    urlToImage: string;
    description: string;
    content: string;
    publishedAt: Date;
    source: Source;
    expanded: boolean = false;
}

class Source {
    name: string;
    logo: string;
}

export const LOGO_URL = "https://www.google.com/s2/favicons?domain=";


export default class NewsContent extends Component {
    state = {
        isLoading: false,
        allNews: [] as Article[]
    };

    componentDidMount() {
        NewsService.topNews().then(res => this.setState({allNews: res}));
    }


    render() {
        function handleExpandClick(expanded: boolean) {

        }

        return (
            <div>
                <Grid container className="newsBackground">
                    {this.state.allNews.map((news, index) => {
                        console.log(news.title);
                        return <Grid item sm key={index}>
                            <Card className="block">
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className="bg-info" src={LOGO_URL + news.url}/>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon/>
                                        </IconButton>
                                    }
                                    title={news.title}
                                    subheader={news.publishedAt}
                                />
                                <CardMedia
                                    className="media"
                                    image={news.urlToImage}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {news.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        {/* eslint-disable-next-line react/jsx-no-undef */}
                                        <ShareIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        console.log(news.expanded);
                                        news.expanded = true
                                    }}>
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                </CardActions>
                                <Collapse in={news.expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        {news.content}
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </div>
        )
    }


}