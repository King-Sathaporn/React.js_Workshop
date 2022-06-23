import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import data from "../../assets/data/data";

const ContentComponent = ({title, description}) => {

    const [showContent, setShowContent] = useState(false);

    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>
                    {showContent ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showContent && <p>{description}</p>}
        </article>
    )
}

export default ContentComponent;