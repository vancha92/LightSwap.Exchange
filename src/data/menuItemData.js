import earnIcon from "../assets/earnIcon.png";
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
  },
];
