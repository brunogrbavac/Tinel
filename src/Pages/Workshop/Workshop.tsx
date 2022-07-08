import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import WorkshopArticle from '../../Modules/WorkshopArticle/WorkshopArticle';
import WorkshopsGrid from '../../Modules/WorkshopsGrid/WorkshopsGrid';
import { Workshop as WorkshopT, workshopDefault } from '../../types';
import { fetchData } from '../../fetch';
import ReactLoading from 'react-loading';
import back from '../../images/back.png';
import './Workshop.css';

const Workshop = ({workshop}:{workshop?: WorkshopT}) => {
    
    const WS_SIMILAR_LIMIT=3;
    let workshopID  = useParams().id;
    const [workshopsSimilar, setWorkshopsSimilar] = useState<WorkshopT[]>(()=>[workshopDefault]);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [_workshop, setWorkshop] = useState<WorkshopT>(()=>(workshop!=null)?workshop:workshopDefault);

    const fetchWorkshop = async() => {
        let data = await fetchData(`https://brunogrbavac-tinel.herokuapp.com/workshops/${workshopID}`);
        setWorkshop(data);
        fetchSimilarWorkshops(data);
        setLoading(false);
    };

    const fetchSimilarWorkshops = async(ws: WorkshopT) => {
        console.log(`https://brunogrbavac-tinel.herokuapp.com/workshops?&_limit=${WS_SIMILAR_LIMIT}&_sort=date&_order=desc&title_ne=${ws.title}&category=${ws.category}`);
        let data = await fetchData(`https://brunogrbavac-tinel.herokuapp.com/workshops?&_limit=${WS_SIMILAR_LIMIT}&_sort=date&_order=desc&title_ne=${ws.title}&category=${ws.category}`);
        setWorkshopsSimilar(data);
    };

    useEffect(() => {
        if(workshop==null) fetchWorkshop();
        else fetchSimilarWorkshops(workshop);
    }, []);

    return(
        <div className="workshop">
        {loading?
            <ReactLoading type="bubbles" color="sky-blue" className="loading"/>
            :<><div className="workshop-top">
                <Link to="/">
                    <div className="workshop-back">
                        <img src={back} alt="back"/> Natrag
                    </div>
                </Link>
                <WorkshopArticle workshop={_workshop}/>
            </div>
            <div className="workshop-bottom">
                <div className="workshop-back" id="workshop-lb"></div>
                <div id="similar-workshops">
                    <h1 id="workshop-similar-title">Similar workshops</h1>
                    <WorkshopsGrid workshopsArray={workshopsSimilar} landingPage={false}/>
                </div>
            </div></>
        }
        </div>
    );
};

export default Workshop;