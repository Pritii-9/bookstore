import React from "react";
function Hello(){
  return (
    <>
    <h2 style={ { color: 'black' } }>Hello Class 👋</h2>
    <h2 style={ { color: 'black' } }>This is my hello sub Comp</h2>
    </>
  )
}

// .jsx to write html code in js file

// not to write js in html file

// { <h1></h1>  } // ye batayega iske anadr html ka ek element he
// { <p></p> }

// { {style css} } {{color:"pink"}} // ye batayega iske andr ek object he jisme css styles he

export default Hello; //we can import this comp in any file
