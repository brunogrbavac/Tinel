import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Workshop, workshopDefault } from '../../types';
import Category from '../../Components/Category/Category';
import WorkshopsGrid from '../../Modules/WorkshopsGrid/WorkshopsGrid';
import { fetchData } from '../../fetch';
import ReactLoading from 'react-loading';
import up from '../../images/up.png';
import down from '../../images/down.png';
import './Workshops.css';

const Workshops = () => {

    const WS_PER_PAGE = 9;
    const [page, setPage] = useState<number>(()=>1);
    const [loading, setLoading] = useState<boolean>(()=>true);
    const [filter, setFilter] = useState<string>(()=>"All");
    const [openCategories, setOpenCategories] = useState<boolean>(()=>true);
    const [workshopsFetched, setWorkshopsFetched] = useState<Workshop[]>(()=>[workshopDefault]);
    const [categoriesFetched, setCategoriesFetched] = useState<string[]>(()=>[" "]);

    const fetchWorkshops = async() => {
        let data = await fetchData(`http://localhost:3000/workshops?&_limit=${WS_PER_PAGE*page}&_sort=date&_order=desc${(filter!="All")?`&category=${filter.toLowerCase()}`:""}`);
        setWorkshopsFetched(data);
        setLoading(false);
    };

    const fetchCategories = async() => {
        let data = await fetchData(`http://localhost:3000/categories`);
        setCategoriesFetched(data);
    };

    useEffect(() => { 
        fetchWorkshops();
    }, [page, filter]);

    useEffect(() => { 
        fetchCategories();
    }, []);

    return(
        <div className='workshops'>
            
            <div className={clsx("workshops-sidebar", !openCategories&&'closed-sidebar', !openCategories&&'display-none-md')}>
                <p className='workshops-filter-text'>Filter by category:</p>
                <Category category="All" filter={filter} setFilter={(i:string)=>{setFilter(i); setPage(1); setOpenCategories(false);}} />
                {categoriesFetched.map( item => 
                    <Category category={item[0].toUpperCase()+item.substring(1,item.length)} filter={filter} setFilter={(i:string)=>{setFilter(i); setPage(1); setOpenCategories(false);}} />
                )}
            </div>

            <div className={clsx("workshops-sidebar", !openCategories&&'closed-sidebar','display-none', openCategories&&'display-none-md')}>
                <img src={openCategories?up:down} alt="Icon" className="fold-icon" onClick={()=>setOpenCategories(true)}/>
                <p className={clsx("workshops-filter-sel-option",'wfo-blue')} onClick={()=>{setOpenCategories(true);}}>
                    {filter}
                </p>
            </div>

            <div className="workshops-right">
                <h1 className="workshops-title">Workshops</h1>
                <p className="workshops-number">Displayed: <span>{workshopsFetched.length}</span></p>
                {loading?
                    <ReactLoading type="bubbles" color="sky-blue" className="loading"/>:
                    <><WorkshopsGrid workshopsArray={workshopsFetched} landingPage={true}/>
                    {(workshopsFetched.length<9)?
                        null
                        :(page==1)?
                            <p className="workshops-load-more" onClick={()=>setPage(2)}>Load more</p>
                            :<p className="workshops-load-more" onClick={()=>setPage(1)}>Show less</p>
                    }</>
                }
            </div>
        </div>
    );
};

export default Workshops;