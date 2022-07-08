import React from 'react';
import WorkshopCardInfo from './WorkshopCardInfo';
import { Workshop } from '../../types';
import { getIcon } from '../Category/Category';
import './WorkshopCard.css';
import { Link } from 'react-router-dom';

const WorkshopCard = ({workshop}: {workshop:Workshop}) => {

    return(
        <div className="card">
            <Link to={`/workshop/${workshop.id}`} className="card-cover">
                <div className="card-cover">
                    <img src={workshop.imageUrl} alt="Cover." />
                </div>
            </Link>
            <div className="card-info-container">
                <button id="card-brush-button">                    
                    <img src={getIcon(workshop.category, "-", true)} alt="Brush"/>
                </button>
                <WorkshopCardInfo workshop={workshop}/>
            </div>
        </div>
    );
};

export default WorkshopCard;