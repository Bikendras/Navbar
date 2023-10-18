import React from 'react'
import { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component"


const styles ={
    border: "2px solid green",
    margin: "12px",
    padding: "8px",
};
export default function Scroller() {
    const [dataSource,setDataSource]=useState(Array.from({length:20}))
    const [hasMore,setHasmore]=useState(true);
    const fetchMoreData = ()=>{
        if(dataSource.length<200){
            // Making ApPI Call...
            setTimeout(()=>{
                setDataSource(dataSource.concat(Array.from({length:20})))
            },1000)
        } 
        else{
            setHasmore(false);
        }
    }
  return (
    <div className='App'>
        <h1>Scroller</h1>
        <h3 id='parentScrolldiv' style={{height: 500,overflow: "auto"}}>
        <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore} loader={<p>Loading...</p>} endMessage={<p>You are All set</p>} scrollableTarget= "parentScrolldiv">
            {
                dataSource.map((item,index)=>{
                    return (
                        <h1 style={styles}>thtis is a div #{index+1} inside InfiniteScroll</h1>
                    )
                })
            }
        </InfiniteScroll>
        </h3>
    </div>
  )
}
