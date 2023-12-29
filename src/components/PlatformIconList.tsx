import { FC } from "react";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "./hooks/usePlatforms";
import { StyledBox, StyledIcon } from "../assets/style/PlatformIconListStyle";

type PlatformPropsType = {
  platforms: Platform[];
};

const getIconComponent = (slug: string): IconType | null => {
  const iconMap: { [key: string]: IconType } = {
    ps: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return iconMap[slug] || null;
};

export const PlatformIconList: FC<PlatformPropsType> = ({ platforms }) => (
  <StyledBox>
    {platforms.map((platform) => {
      const IconComponent = getIconComponent(platform.slug);

      if (IconComponent) {
        return <StyledIcon key={platform.slug}>{<IconComponent />}</StyledIcon>;
      }
      return null;
    })}
  </StyledBox>
);
