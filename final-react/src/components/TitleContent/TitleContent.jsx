import React, { useState } from 'react'
import "./TitleContent.css"

const TitleContent = ({category,setCategory}) => {

    

  return (
    <div className="sub-header">
            <button className={`container ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                All
            </button>
            <button className={`title-containers${category===10?"active":""}`} onClick={()=>setCategory(10)} >
                Music
            </button>
            <button className={`title-containers${category===22?"active":""}`} onClick={()=>setCategory(22)} >
                Travel
            </button>
            <button className={`title-containers${category===17?"active":""}`} onClick={()=>setCategory(17)} >
                Sports
            </button>
            <button className={`title-containers${category===24?"active":""}`} onClick={()=>setCategory(24)} >
                Entertainment
            </button>
            <button className={`title-containers${category===28?"active":""}`} onClick={()=>setCategory(28)} >
                Technology
            </button>
            <button className={`title-containers${category===10?"active":""}`} onClick={()=>setCategory(10)} >
                Music
            </button>
            <button className={`title-containers${category===22?"active":""}`} onClick={()=>setCategory(22)} >
                Blogs
            </button>
            <button className={`title-containers${category===25?"active":""}`} onClick={()=>setCategory(25)} >
                News
            </button>
            <button className={`title-containers${category===20?"active":""}`} onClick={()=>setCategory(20)} >
                Gaming
            </button>
            <button className={`title-containers${category===2?"active":""}`} onClick={()=>setCategory(2)} >
                Automobiles
            </button>
            <button className={`title-containers${category===0?"active":""}`} onClick={()=>setCategory(0)} >
                Recently Uploaded
            </button>
            <button className={`title-containers${category===10?"active":""}`} onClick={()=>setCategory(0)} >
                Watched
            </button>
            <button className={`title-containers${category===10?"active":""}`} onClick={()=>setCategory(0)} >
                New to you
            </button>
        <div className="other-container">
            <button className="next">
                &#8250;
            </button>
        </div>
    </div>
  )
}

export default TitleContent
