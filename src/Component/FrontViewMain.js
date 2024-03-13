
import SearchAppBar from "./SearchAppBar";
import SimpleContainer from "./FrontView";
import React from 'react';

export default function FrontViewMain() {
  return (
    <div style={{  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url("https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg")' , backgroundColor: "black" , height: "93vh", backgroundRepeat: "no-repeat" , backgroundSize: 'cover', backgroundPosition: "center" }}>
    <SearchAppBar/>
    <SimpleContainer/>
    </div>
  )
}
