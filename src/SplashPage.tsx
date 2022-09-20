import React, {useState, useEffect} from 'react'
import "./SplashPage.scss";

export const SplashPage = () => {

    const [imgAnimation, setImgAnimation] = useState("animate__rotateIn");
    const [titleAnimation, setTitleAnimation] = useState("animate__fadeIn");

    useEffect(()=>{
        setTimeout(()=>{
            setImgAnimation("animate__rotateOut")
            setTitleAnimation("animate__fadeOut");
        }, 2000)
    },[])

  return (
    <div className="splash-content">
        <img className={`splash-img animate__animated ${imgAnimation}`} src="/img/mental-health.png" />
        <h1 className={`titleH1 animate__animated ${titleAnimation}`}>Memory game</h1>
    </div>
  )
}
