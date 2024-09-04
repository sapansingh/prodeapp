import React from "react";  



function Cardchart({onClick,title,data}){

    const handleClick = () => {
        
        if (onClick) onClick(); // Call the passed in onClick function
      };
    return(
<>

<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"  onClick={handleClick}>


<div className="text-center" style={{width:420}}>
  <h1 className="font-semibold text-blue-800 font-bold mt-10" style={{fontSize:40}}>{title}</h1>
  <h1 className="font-semibold text-blue-800 mt-4 font-bold" style={{fontSize:40}}>{data}</h1>
</div>
</div>

</>
    )

}

export default Cardchart;
