import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import NewsService from '../services/newsService';
import '../../App.css'

export default class NewsContent extends Component {
    state = {allNews: []};
    
        componentDidMount() {
            NewsService.topNews();
        }


    render() {
        return (
            <div>
                <Card className="block">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className="bg-info">
                                FOX
                            </Avatar>
                            }
                        action={
                            <IconButton aria-label="settings">
                            <MoreVertIcon />
                            </IconButton>
                            }
                        title="This is the news"
                            subheader="September 14"
                    />
                </Card>
            </div>
        )
    }
}