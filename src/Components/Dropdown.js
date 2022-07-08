import React, {useEffect, useRef, useState} from "react";

let Dropdown = ({options, onSelectedChange, selected}) => {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if(ref.current !== null){
            const onBodyClick = (event) => {
                if(ref.current.contains(event.target)){
                    return;
                };
                setIsActive(false);


            }
            document.body.addEventListener('click', onBodyClick, {capture: true});
            return () => {
                document.body.removeEventListener('click', onBodyClick, {capture: true});
            }
        }

    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null
        }
        return(
            <div key={option.value}
                 className={'item'}
                 onClick={() => {
                     onSelectedChange(option);
                 }}
            >
                {option.label}
            </div>
        )
    })

    return(
        <div className={'ui form'} ref={ref}>
            <div className="field">
                <label className="label">Select a Color: </label>
                <div className={`ui selection dropdown  ${isActive ? 'visible active' : ''}`}
                     onClick={() => setIsActive(!isActive)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${isActive ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
            <p className={'text'} style={{color: selected.value}}>This is {selected.value}!</p>


        </div>
    )
}
export default Dropdown