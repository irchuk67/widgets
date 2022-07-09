import React, {useEffect, useState} from "react";
import axios from "axios";

const Convert = ({text, language}) => {
    const [output, setOutput] = useState('');
    const [debouncedText, setDebouncedText] = useState(output);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedText(text), 500);
        return () =>{
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(()=>{
        const doTranslation = async () => {

            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    q: debouncedText,
                    target: language.value,
                }
                }
            );
            setOutput(data.data.translations[0].translatedText)
        }

        doTranslation();
    }, [debouncedText, language])
    return(
        <div>
            <h1 className="ui header">{output}</h1>
        </div>
    )
}

export default Convert;