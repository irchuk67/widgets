import React, {useState} from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Navigation from "./Components/Navigation";
import Route from "./Components/Route";

let App = () => {
    const items = [
        {
            title: "What is React?",
            content: "React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components."
        },
        {
            title: "Why use React?",
            content: "React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template."
        },
        {
            title: "How do you use React?",
            content: "You use React by creating components"
        }
    ];

    const dropdownOptions = [
        {
            label: 'The Color Red',
            value:'red'
        },
        {
            label: 'The Color Green',
            value:'green'
        },
        {
            label: 'A Shade Of Blue',
            value:'blue'
        }
    ]

    const translateOptions = [
        {
            label: 'Ukrainian',
            value: 'uk'

        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ]

    const [selected, setSelected] = useState(dropdownOptions[0]);

    return (
        <div className="ui container">
            <h1>Widgets</h1>
            <Navigation/>
            <Route path={'/accordion'}>
                <Accordion items={items}/>
            </Route>
            <Route path={'/list'}>
                <Search/>
            </Route>
            <Route path={'/dropdown'}>
                <Dropdown selected={selected}
                          onSelectedChange={setSelected}
                          options={dropdownOptions}
                          label={'Color'}
                />
            </Route>
            <Route path={'/translate'}>
                <Translate options={translateOptions}/>
            </Route>
        </div>
    );
}

export default App;
