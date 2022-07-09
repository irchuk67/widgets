import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event, href) => {
        if(event.mataKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={(event) => onClick(event, href)} href={href} className={className}>{children}</a>
    )
}

export default Link;