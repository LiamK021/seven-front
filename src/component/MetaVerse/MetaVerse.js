import React from "react";
import MetaVerseRight from "./MetaVerseRight";
import './MetaVerse.css';
import metaverseLeft from "../../asset/image/metaverseLeft.png"

class MetaVerse extends React.Component{
    render(){
        return(
            <div className = "metaverse-control">
                <h1 className = "metaverse-control-title">Our salvation is the metaverse.</h1>
                <div className = "metaverse-control-row">
                    <div className = "metaverse-control-left">
                        <img className= "metaverse-control-image" src = {metaverseLeft} alt = ""/>
                    </div>
                    <div className = "metaverse-control-right">
                        <MetaVerseRight/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MetaVerse;