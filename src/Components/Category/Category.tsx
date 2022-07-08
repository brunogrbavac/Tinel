import React from 'react';
import clsx from 'clsx';
import bolt from '../../images/bolt.png';
import table from '../../images/table.png';
import brackets from '../../images/brackets.png';
import brush from '../../images/brush.png';
import brushB from '../../images/brushB.png';
import boltB from '../../images/boltB.png';
import tableB from '../../images/tableB.png';
import bracketsB from '../../images/bracketsB.png';
import boltBL from '../../images/boltBL.png';
import tableBL from '../../images/tableBL.png';
import bracketsBL from '../../images/bracketsBL.png';
import brushBL from '../../images/brushBL.png';
import './Category.css';

export const getIcon = (category: string, state: string, forCard: boolean) => {

    switch(category.toLowerCase()){
        case "frontend":
            if(forCard) return table;
            else if(state.toLowerCase()=="frontend") return tableB;
            else return tableBL;
        case "backend":
            if(forCard) return brackets;
            if(state.toLowerCase()=="backend") return bracketsB;
            else return bracketsBL;
        case "design":
            if(forCard) return brush;
            if(state.toLowerCase()=="design") return brushB;
            else return brushBL;
        case "marketing":
            if(forCard) return bolt;
            if(state.toLowerCase()=="marketing") return boltB;
            else return boltBL;
        default:
            return brush; 
    };
};

const Category = ({category, filter, setFilter}:{category: string, filter: string, setFilter: any}) => {
    return(
        <p className={clsx("workshops-filter-option", (filter==category)&&'wfo-blue')} onClick={()=>{setFilter(category);}}>
            <img src={getIcon(category, filter, false)} alt="icon" className="option-icon"/>
            {category}
        </p>
    ); 
};

export default Category;