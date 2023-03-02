// packages
import React from "react";

// pages and components
import discord from "../../assets/discord.svg";
import medium from "../../assets/medium.svg";
import reddit from "../../assets/reddit.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";

// styles
import "./SocialSection.css";

const SocialSection = () => {
  return (
    <div className="socialContainer">
      <div className="singleSocial">
        <img src={discord} alt="discord" className="discordLogo" />
      </div>
      <div className="singleSocial">
        <img src={medium} alt="discord" className="mediumLogo" />
      </div>
      <div className="singleSocial">
        <img src={reddit} alt="discord" className="redditLogo" />
      </div>
      <div className="singleSocial">
        <img src={telegram} alt="discord" className="telegramLogo" />
      </div>
      <div className="singleSocial">
        <img src={twitter} alt="discord" className="twitterLogo" />
      </div>
    </div>
  );
};

export default SocialSection;
