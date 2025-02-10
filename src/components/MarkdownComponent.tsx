import ReactMarkdowm from 'react-markdown'
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
//import markdownContent from "./posts/test.md?raw";

const MarkdowmComponent = () => {

  const[trymd, setMdContent] = useState("");

  useEffect(() => {
    fetch("/posts/test.md")
      .then((res) => res.text())
      .then((text) => {
        setMdContent(text);
        console.log(text);
    })
  }, []);


  return (
    <> 
      <ReactMarkdowm remarkPlugins={[remarkGfm]}>{trymd}</ReactMarkdowm>
    </>
  )
}

export default MarkdowmComponent