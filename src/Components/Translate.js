import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

let Translate = ({options}) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>

            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label={'Language'}/>

            <div className="ui form">
                <div className="field">
                    <label>Output</label>
                    <Convert text={text} language={language}/>
                </div>
            </div>

        </div>
    )
}

export default Translate;