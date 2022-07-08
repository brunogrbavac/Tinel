import React from 'react';
import clsx from 'clsx';
import WorkshopCard from '../../Components/WorkshopCard/WorkshopCard';
import { Workshop } from '../../types';
import './WorkshopsGrid.css';


const WorkshopsGrid = ({workshopsArray, landingPage }:{workshopsArray: Workshop[], landingPage: boolean}) => {

    return(
        <div className = {clsx((landingPage)?"grid-landing":"grid-article","workshops-grid")}>
            {workshopsArray.map( (item: Workshop) => <WorkshopCard workshop={item}/>)}
        </div>
    );
};

export default WorkshopsGrid;