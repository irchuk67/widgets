import React, {useEffect, useState } from "react";
import axios from 'axios';

let Search = () => {
    const [term, setTerm] = useState('team');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerID);
        };
    }, [term]);


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`,{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                }
            })
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])


    let resultList = results.map((item) => {
        return(
            <div className={'item'} key={item.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${item.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">{item.title}</div>
                    <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
                </div>
            </div>
        )
    })
    
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input className={'input'}
                           type="text"
                           value={term}
                           onChange={(event) => setTerm(event.target.value)}/>

                </div>
            </div>
            <div className="ui celled list">
                {resultList}
            </div>
        </div>
    )
}

export default Search;