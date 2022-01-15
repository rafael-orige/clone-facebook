import React from "react";
import "./style.css";

const StoriesSection = () => {
    return (
        <div className="stories-wrapper">
            <div className="show-more">
                <svg viewBox="0 0 20 20" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv jnigpg78 odw8uiq3"><g fillRule="evenodd" transform="translate(-446 -350)"><g fillRule="nonzero"><path d="M101.751 211.001a1 1 0 0 0 1.415 1.415l5.208-5.209a1 1 0 0 0 0-1.414l-5.208-5.209A1 1 0 0 0 101.75 202l4.501 4.501-4.5 4.501z" transform="translate(355 153.5)"></path><path d="M94.334 207.5h12.812a1 1 0 1 0 0-2H94.333a1 1 0 1 0 0 2z" transform="translate(355 153.5)"></path></g></g></svg>
            </div>
            <StoryCard createStory={true} />
            <StoryCard username="Rafael Vargas" />
            <StoryCard username="Bruna Ariana" />
            <StoryCard username="Igor Severino" />
            <StoryCard username="Nathália Zeferino" />
            <StoryCard username="Amália Jónatas" />
        </div>
    );
};

const StoryCard = (props) => {
    return (
        <div className="story">
            {props.createStory &&
                <>
                    <div className="create-story--pic">
                        <img src="/profile-pic.png" alt="" />
                    </div>
                    <div className="story-container create">
                        <div className="create-story">
                            <div className="plus-icon">
                                <div className="plus column"></div>
                                <div className="plus row"></div>
                            </div>
                            <p className="text-create">Create Story</p>
                        </div>
                    </div>
                </>
            }

            <div className="background-image">
                <img src="/wolf.png" alt="" />
            </div>
            <div className="container-center">
                <div className="story-container">
                    <div className="story-owner">
                        <img src="/profile-pic.png" alt="" className="story-owner--pic" />
                    </div>
                    <div className="story-owner--name">
                        <p>{props.username}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesSection;

