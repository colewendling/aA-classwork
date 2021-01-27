import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => {
    const tabInfoArr = [{title: "one", content: "I am the first Tab."},
                        {title: "two", content: "I am the second Tab."},
                        {title: "three", content: "I am the third Tab."},
                        {title: "four", content: "I am the fourth Tab."}
                       ];
    return(<div>
                <Clock />
                <Tabs tabInfoArr={tabInfoArr} />
           </div>
    );
}


export default Root;

// passing function as argument vs invoking
// anonymous functions :   function(args){code} or (args)=>{code}