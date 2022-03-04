// import useLineScroll from '../../hooks/useLineScroll'
import { Title } from '../../components';
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillBehanceSquare, } from 'react-icons/ai';
import './home.css'
import { useEffect } from 'react';

const Home = ()=>{

    // const {ref, scroller} = useLineScroll({reverse:true})
    const scrollHandler = ()=>{
        const scroll = document.querySelector('html').scrollTop
        const target = document.querySelectorAll(".scroll");
        for (let i = 0; i <target.length; i++){
            var pos = scroll * target[i].dataset.rate;
            if (target[i].dataset.horizontal)
            target[i].style.transform = `translate3d(${pos*-0.2}px, ${pos}px, 0px)`;
            else
            target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
            
            // console.log(`target: ${i} ${pos}`)
        }
        console.log(scroll);
    }
    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        scrollHandler()
    })  
    return(
        <div className="main-home" id='main-home' >
            <div className="home home-title">
                <div className="big-background">
                    <h1 data-rate="0.4" data-horizontal={true} className='scroll'>g</h1>
                </div>
                <div className="title">
                    <Title/>
                </div>
            </div>
            <div className="home home-social">
                <h2>
                    Contact Us
                </h2>
                <div className="social-cont">
                    {/* <h4>Social:</h4> */}
                    <a data-rate="-0.15" className='scroll'href="https://www.instagram.com/gulamanentertainment/">
                        <AiFillInstagram  size={50} color='#d4d4d4'/>
                    </a>
                    <a data-rate="-0.15" className='scroll'href="https://www.facebook.com/GulamanEntertainment">
                        <AiFillFacebook  size={50} color='#d4d4d4'/>
                    </a>
                    <a data-rate="-0.15" className='scroll'href="https://www.youtube.com/GulamanEntertainment">
                        <AiFillYoutube  size={50} color='#d4d4d4'/>
                    </a>
                    <a data-rate="-0.15" className='scroll'href="https://twitter.com/GulamanEnt">
                        <AiFillTwitterSquare  size={50} color='#d4d4d4'/>
                    </a>
                    <a data-rate="-0.15" className='scroll' href="https://www.behance.net/gulamanenterta">
                        <AiFillBehanceSquare  size={50} color='#d4d4d4'/>
                    </a>
            
                </div>
                <div data-rate="-0.1" data-horizontal="true" className="circle scroll"/>
                <div data-rate="-0.5" data-horizontal="true" className="circle scroll"/>
                {/* <div data-rate="-0.3" className="circle scroll"/> */}

            </div>
        </div>
    )
}
export default Home;