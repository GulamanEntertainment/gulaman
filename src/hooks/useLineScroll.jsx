import React,{useCallback, useEffect, useState,useRef} from 'react';

const useLineScroll = ({offset=0.9, reverse=false})=>{
    
    const ref = useRef(null);
    const [path, setPath] =useState(0);
    const defaults = ()=>{
        setPath(ref.current.getTotalLength());
        ref.current.style.strokeDasharray = path + ' ' + path;
        ref.current.style.strokeDashoffset = path;
    }
    const scroller = useCallback((e)=>{
        // console.log("onScroll: "+( e.target.scrollTop*.9)/(e.target.scrollHeight-e.target.clientHeight));
        var scrollPercent;
        if (!reverse)
            scrollPercent = ( e.target.scrollTop*offset)/(e.target.scrollHeight-e.target.clientHeight);
        else
            scrollPercent =  (e.target.scrollTop*offset)/(e.target.scrollHeight-e.target.clientHeight) - 1;
        var draw = path * scrollPercent;
        // console.log("draw: " + draw + "scroll%: " + scrollPercent)
        ref.current.style.strokeDashoffset = path-draw;
        
        // console.log(ref.current.style.strokeDashoffset);
    },[path, ref])
    useEffect(()=>{
        defaults();
        console.log(path);
        
    }, [path, scroller, defaults])
    return {ref, scroller};
}
export default useLineScroll;