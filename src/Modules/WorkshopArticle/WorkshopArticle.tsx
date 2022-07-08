import React, { useEffect, useState } from 'react';
import clock from '../../images/clock.png';
import calendar from '../../images/calendar.png';
import brush from '../../images/brush.png';
import { Workshop, User, userDefault } from '../../types';
import BuyTicketCard from '../../Components/BuyTicketCard/BuyTicketCard';
import { fetchData } from '../../fetch';
import './WorkshopArticle.css';
import { getIcon } from '../../Components/Category/Category';

const WorkshopArticle = ({workshop}:{workshop:Workshop}) => {
    
    const [author, setAuthor] = useState<User>(()=>userDefault);
    
    const fetchAuthor = async() => {
        let data = await fetchData(`http://localhost:3000/users/${workshop.userId}`);
        setAuthor(data);
    };

    useEffect(()=>{
        fetchAuthor();
    }, []);

    return(
        <div className="workshop-article">
            <div className="article-cover">
                <img src={workshop.imageUrl} alt="Cover"/>
            </div>
            <div className="article">
                <div className="article-left">
                    <div id="article-timestamps-and-brush">
                        <button id="article-brush-button">                    
                            <img src={getIcon(workshop.category, "-", true)} alt="Brush"/>
                        </button>
                        <p className="article-stamp">
                            <img src={calendar} className="date-time-icon" alt="Date"/>{ new Date(workshop.date).toLocaleDateString("en-UK")} 
                            <span id="article-timestamp" className="article-stamp">
                                <img src={clock} className="date-time-icon" alt="Time"/>{new Date(workshop.date).toLocaleTimeString("en-UK")}h
                            </span> 
                        </p>
                    </div>
                    <h1 id="article-title">{workshop.title}</h1>
                    <h2 id="article-author"> <span>WITH </span>{author.name}</h2>
                    <p className="article-text">{workshop.desc}</p>
                </div>
                <div className="article-right">
                    <BuyTicketCard workshop={workshop}/>
                </div>
            </div>
        </div>
    );
};

export default WorkshopArticle;