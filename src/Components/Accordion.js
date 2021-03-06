import React, {useState} from "react";

let Accordion = ({items}) => {
    let [activeIndex, setActiveIndex] = useState();

    let onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderItems = items.map((item, index )=> {
        const active =  activeIndex === index ? 'active' : '';
       return(
           <React.Fragment key={item.title}>
               <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
               >
                   <i className="dropdown icon"></i>
                   {item.title}
               </div>
               <div className={`content ${active}`}>
                   <p>{item.content}</p>
               </div>
           </React.Fragment>

       )
    });
    return(
        <div className={'ui styled accordion '}>{renderItems}</div>
    )
}

export default Accordion;