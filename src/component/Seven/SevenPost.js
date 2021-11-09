import React from "react";

import "./SevenPost.css";

class SevenPost extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <h2>The Sevens are</h2>
                <h2 className="sevenpost-control-red">NFT Collectible</h2>
                <p className="sevenpost-control-paragraph">7,000 unique aesthetic collectibles with references from pop culture, anime, games, memes, movies, and more. Find your fit in the metaverse.</p>
            </div>
        )
    }
}
export default SevenPost;