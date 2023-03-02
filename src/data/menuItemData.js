import earnIcon from "../assets/earnIcon.png";
import lightPadIcon from "../assets/launchpadIcon.png";
import nftIcon from "../assets/nftIcon.png";
import tradeIcon from "../assets/tradeIcon.png";

export const menuItemData = [
  {
    title: "Swap",
    icon: tradeIcon,
  },
  {
    title: "Earn",
    icon: earnIcon,
    subMenu: [
      {
        title: "Farms",
      },
      {
        title: "Pools",
      },
    ],
  },
  {
    title: "NFT",
    icon: nftIcon,
    subMenu: [
      {
        title: "Epic Gallery",
      },
    ],
  },
  {
    title: "LightPad",
    icon: lightPadIcon,
  },
];
