

import React, {useState} from "react"
export default function Card({name , email , age , info , src, id, onRemove , height , transform}) {

  const [isFading, setIsFading] = useState(false)

   let heightCss = ''

  if(height === '200px') {
      heightCss = 'last'
  }else if (height === '300px' ){
    heightCss = 'second-last'
  } else {
    heightCss = 'general'
  }

  const handleFadeOut = () => {
    setIsFading(true);
  
    setTimeout(() => {
      onRemove(id); 
    }, 500)
  }

  return (
    <div>
       <div className="users-container"> </div>

<div id="user-template" className={`w-[240px] p-3  ${heightCss} ${transform} relative rounded-[10px] user-template ${isFading ? 'fade-out' : ''} `}   
     
 >
  <div className="user-container relative ">
    <img src={src} alt="User Image" className="user-image w-[100px] h-[100px] rounded-[100%] object-cover" />
    <div className="user-details ">
      <h2 className="user-name font-bold text-[20px]">{name}</h2>
      <p className="user-email mb-[5px]">{email}</p>
      <p className="user-age mb-[5px]">{age}</p>
      <p className="user-info text-[15px]">{info}</p>
    </div>

    <a className="btn-close absolute top-0 right-0"  onClick={handleFadeOut} ></a>
  </div>
</div>
    </div>
  )
}
