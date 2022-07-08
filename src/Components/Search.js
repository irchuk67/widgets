import React, {useEffect, useState } from "react";
import axios from 'axios';

let Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect( () => {
        let search = async () => {
          const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`,{
              params:{
                  action: 'query',
                  list: 'search',
                  format: 'json',
                  origin: '*',
                  srsearch: term,
              }
          })
            setResults(data.query.search);
        };
        if (term){
            search();
        }

    }, [term]);

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