import React, {useState} from "react";

let Search = () => {
    const [term, setTerm] = useState('');

    const onTermChange = (event) => {
        setTerm(event.target.value);
    }
    
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input className={'input'}
                           type="text"
                           value={term}
                           onChange={(event)=>onTermChange(event)}/>

                </div>
            </div>

        </div>
    )
}

export default Search;