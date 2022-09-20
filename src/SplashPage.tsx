import React, {useState, useEffect} from 'react'
import "./SplashPage.scss";

export const SplashPage = () => {

    const [imgAnimation, setImgAnimation] = useState("animate__rotateIn");

    useEffect(()=>{
        setTimeout(()=>{
            setImgAnimation("animate__rotateOut")
        }, 2000)
    },[])

  return (
    <div className="splash-content">
        <img className={`splash-img animate__animated ${imgAnimation}`} src="/img/mental-health.png" />
    </div>
  )
}
