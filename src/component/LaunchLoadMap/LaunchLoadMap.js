import React from "react";

//import Components
import LaunchLoadMapItem from './LaunchLoadMapItem.js';

//import CSS
import './LaunchLoadMap.css';
class LaunchLoadMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadmaps: [
                {
                    percentage: '10%',
                    header: 'Grand Skyfall',
                    content: [
                        "7 new characters enter the metaverse, falling from the sky. Will you be one of 7 lucky community members to receive an airdropped NFT which we guarantee to have a minimum sale value of 0.7 eth if you decide to list!",
                        "The treasury is now also growing and contains 14ETH!",
                        "All done!"
                    ]
                },
                {
                    percentage: '25%',
                    header: 'The First Hints',
                    content: [
                        "Sketches of previous generations will be sent to 7 lucky community members. Rumours are, these sketches provide some secret information.",
                        "Another 21ETH has been added to the treasury.",
                        "All done!"
                    ]
                },
                {
                    percentage: '50%',
                    header: 'Who Dis?',
                    content: [
                        "A mysterious Seven shows up in the metaverse. Will you be able to catch it and be the first 1 of 1?",
                        "The treasury receives another 28ETH.",
                        "All done!"
                    ]
                },
                {
                    percentage: '100%',
                    header: 'The Treasure Hunt',
                    content: [
                        "The story unfolds and the treasure hunt will soon begin. Throughout the artwork lies references to anime, shows, games, and pop culture. These will be used as the main themes and questions for the hunt. Discussions will be housed in our Discord server.",
                        "Another 35ETH added amounting to a total of 98ETH in the treasury.",
                        "All done!"
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <div className='launch-loadmap-control'>
                <h2>Launch RoadMap</h2>

                {
                    this.state.loadmaps && 
                    this.state.loadmaps.map((item, index) => {
                        return (
                            <LaunchLoadMapItem 
                                key={index}
                                percentage={item.percentage}
                                header={item.header}
                                content={item.content}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default LaunchLoadMap;