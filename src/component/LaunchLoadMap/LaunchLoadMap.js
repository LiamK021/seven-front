import React from "react";

//import Components
import LaunchLoadMapItem from './LaunchLoadMapItem.js';

//import CSS
import './LaunchLoadMap.css';
class LaunchLoadMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadmaps1: [
                // {
                //     percentage: '10%',
                //     header: 'Grand Skyfall',
                //     content: [
                //         "7 new characters enter the metaverse, falling from the sky. Will you be one of 7 lucky community members to receive an airdropped NFT which we guarantee to have a minimum sale value of 0.7 eth if you decide to list!",
                //         "The treasury is now also growing and contains 14ETH!",
                //         "All done!"
                //     ]
                // },
                {
                    percentage: '25%',
                    header: 'MINTED',
                    content: [
                        "Randomly selected owners of $quid Games NFT's will receive 4 $quid NFTs which will be airdropped randomly to early adopters and supporters.",
                        "This is to show appreciation for the OGs that have supported our project from Day 1.",
                    ]
                },
                {
                    percentage: '50%',
                    header: 'MINTED ',
                    content: [
                        "The community will be able to vote for a charity in which a donation of at least $10,000 USD will be made. $quid Players unite!"
                    ]
                },
                {
                    percentage: '70%',
                    header: 'MINTED',
                    content: [
                        "Custom $quid Games NFT merch will be awarded to our most active Discord members and contest winners.",
                        "The community votes on merch type and design.",
                        "If your $quid Player is voted on and featured in the merch, you will receive a special gift from us!"
                    ]
                },
                {
                    percentage: '80%',
                    header: 'MINTED',
                    content: [
                        "$quid Games NFT Play 2 Earn game initialized (Hint: $quid Tokens)",
                        "Game modes built for the community.",
                    ]
                },
                {
                    percentage: '100%',
                    header: 'MINTED',
                    content: [
                        "A buy-back wallet will be used to help stabilise the price of $quid Games NFT's.",
                        "We do so by buying back ALL $quid Games NFT listed below the mint price every 7 days from OpenSea.",
                        "The NFTs that we buy back will then be used for future promotions and giveaways. ",
                        "Minters have a chance to win a LEGENDERY 1/1 out of 5687 $quid Games NFT  "
                    ]
                },
            ],
            loadmaps2:[
                "Players who hold any of $quid Games NFT will be able to participate in variety of games and have a chance to win the grand prize (more details TBA) ",
                "New $quid Games weapons will be airdropped for existing holders 1:1",
                "Release of $quid Tokens (more details to come)"
            ]
        }
    }

    render() {
        return (
            <div className='launch-loadmap-control'>
                <h2>PHASE 1.0 ROADMAP</h2>

                {
                    this.state.loadmaps1 && 
                    this.state.loadmaps1.map((item, index) => {
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

                <h2>PHASE 2.0 ROADMAP</h2>
                {
                    this.state.loadmaps2 &&
                            <LaunchLoadMapItem
                            percentage = ""
                            header = ""
                            content = {this.state.loadmaps2}
                            />
                }
            </div>
        );
    }
}

export default LaunchLoadMap;