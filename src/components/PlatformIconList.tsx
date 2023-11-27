import React, { FC } from "react";
import { Platform } from "./hooks/useGames";
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
import { Icon, Box } from "@mui/material";

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
  <Box display="flex" alignItems="center">
    {platforms.map((platform) => {
      const IconComponent = getIconComponent(platform.slug);

      if (IconComponent) {
        return (
          <Icon
            component={IconComponent}
            key={platform.slug}
            sx={{
              color: "lightgray",
              margin: "5px", 
            }}
          />
        );
      }

      return null;
    })}
  </Box>
);
