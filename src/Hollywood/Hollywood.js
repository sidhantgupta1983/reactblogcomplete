import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Hollywood.css'
import axios from 'axios'
    

const Hollywood = () => {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios
        .get("https://reactblogbacken.herokuapp.com/api/v1/home/details")
        .then((req,res) => {
            const data = req.data;
            console.log(data);
            setRows(data);
        });
    }, []);


    const [loadMore, setLoadMore] = useState(false);
    const [loadBtntext, setLoadBtntext] = useState("Load More");


    const handleLoadMore = () =>{
        setLoadMore(!loadMore);
        console.log(loadMore);
        if(!loadMore){
            setLoadBtntext("Load Less");
        }
        else{
            setLoadBtntext("Load More");
        }
        // console.log(loadmorebtn);

    }

    // const [rows] = useContext(ContextAPI);

    


    return (
        <div>
            <div className='columns'>
                <div className="columns1">
                <div className="hollywoodTitle">Hollywood</div>
                {rows.map((item)=>(
                    loadMore === false ?( (item.id)>90 && (item.id)<98?(
                        <Link to={`/showblog/${item.id}`}><div className="hollywoodNewsCard">
                        <img alt={item.title} 
                            src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                            className="hollywoodNewsImage"
                        />
                        <div className="newsText">
                            <div>
                                <span className="hollywoodTextTitle">{item.title}</span>
                                    <br />
                                <div className="hollywoodDescription">{item.description}</div>
                            </div>
                            <div className="lowerNewsText">
                                <span className='category'>{item.category}</span>
                                <span className='date'> {item.date}</span>
                            </div>
                        </div>
                        </div></Link>):("")) :((item.id)>90 && (item.id)<101?(
                            <Link to={`/showblog/${item.id}`}><div className="hollywoodNewsCard">
                            <img alt={item.title} 
                                src={item.image ? item.image : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"}
                                className="hollywoodNewsImage"
                            />
                            <div className="newsText">
                                <div>
                                    <span className="hollywoodTextTitle">{item.title}</span>
                                    <br />
                                    <div className="hollywoodDescription">{item.description}</div>
                                </div>
                                <div className="lowerNewsText">
                                    <span className='category'>{item.category}</span>
                                    <span className='date'> {item.date}</span>
                                </div>
                            </div>
                        </div></Link>):(""))
                    ))}
                    <div>
                        <button className="loadMoreHollywood" onClick={()=>setLoadMore(handleLoadMore)}>{loadBtntext}</button>  
                    </div>
                </div>
                <div className="columns2">
                    <div className="topPostsHollywood">
                        <div className="topPostsHollywoodTitle">Top Posts</div>
                        <div className="topHollywoodPostsContent">
                            {rows.map((item)=>(
                                (item.id) === 111 ? (
                                    <Link to={`/showblog/${item.id}`}><div className="topHollywoodPostsContent1">
                                        <img src={item.image} alt="" className="topHollywoodPostsImage1"/>
                                        <span className="topHollywoodPostsTextTitle">{item.title}</span>                     
                                        <div className="lowerNewsText">
                                            <span className='category'>{item.category}</span>
                                            <span className='date'> {item.date}</span>
                                        </div>
                                    </div></Link>
                                    ) :("")         
                            ))}
                            {rows.map((item)=>(
                                (item.id) >112 && (item.id)< 116 ? (
                                    <Link to={`/showblog/${item.id}`}><div className="topHollywoodPostsContent2">
                                        <img src={item.image} alt="" className="topHollywoodPostsImage2"/>
                                            <div className="alignColumn">
                                                <span className="topHollywoodPostsTextTitle2">{item.title}</span>                     
                                                <div className="lowerNewsText2">
                                                    <span className='category'>{item.category}</span>
                                                    <span className='date'> {item.date}</span>
                                                </div>
                                            </div>
                                    </div></Link>) :("")
                            ))}
                        </div>
                    </div>
                    <div className="advertisement">
                        <span className='advText'>Advertisement</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hollywood
