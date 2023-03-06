import earnIcon from "../assets/earnIcon.png";
import lightPadIcon from "../assets/launchpadIcon.png";
import nftIcon from "../assets/nftIcon.png";
import tradeIcon from "../assets/tradeIcon.png";

export const menuItemData = [
  {
    title: "Trade",
    icon: tradeIcon,
    link: "trade/swap",
    type: "internal",
  },
  {
    title: "Earn",
    icon: earnIcon,
    subMenu: [
      {
        title: "Farms",
        link: "farms",
        type: "internal",
      },
      {
        title: "Pools",
        link: "pools",
        type: "internal",
      },
    ],
  },
  {
    title: "NFT",
    icon: nftIcon,
    subMenu: [
      {
        title: "Epic Gallery",
        link: "https://epic.gallery/",
        type: "external",
      },
    ],
  },
  {
    title: "LightPad",
    icon: lightPadIcon,
    link: "lightpad",
    type: "internal",
  },
];
