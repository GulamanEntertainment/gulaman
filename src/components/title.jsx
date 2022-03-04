// import { useEffect } from 'react';
import styled from 'styled-components'
const MainTitle = styled.div`
    font-weight: 600;
    font-size:4em;
    line-height:0.7em;
    margin: 0;
    overflow:visible;
`
const SubTitle = styled.h2`
    font-weight:100;
    font-size:0.85em;
    letter-spacing: 0.4em;
    margin: 0;

`
const Title = ()=>{
    const t = ['g','u','l','a','m','a','n'];
    
    return(
        <div>
            <MainTitle data-rate="-0.1" className="scroll">
                {
                    t.map((value, index)=>{
                        return(
                        <span  key={index}>
                            {value}
                        </span>)
                    })
                }
            </MainTitle>
            <SubTitle data-rate="-0.3" className="scroll">ENTERTAINMENT</SubTitle>
        </div>
    )
}
export default Title;