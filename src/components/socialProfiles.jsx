import React from "react";
import PROFILES from "../data/socialProfile";

const SocialProfile = (props) => {
    const {link, image} = props.profile;
    return(
        <div style={{width:300, margin:10, display:'inline-block'}}>
            <a href={link}>
                <img src={image} alt="Profile"  style={{width:200, height:120}}/>
            </a>
        </div>
    );
}


const SocialProfiles = () =>  (
    <div>
        {PROFILES.map( PROFILE => <SocialProfile key={PROFILE.id} profile={PROFILE}/>)}
    </div>
);

export default SocialProfiles;