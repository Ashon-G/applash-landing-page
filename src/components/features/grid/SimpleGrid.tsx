import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiMoon,
  FiWatch,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCalendar}
      title="Launch in under 9 minutes"
      subtitle="Turn any website or CMS into a mobile app fast."
    />
    <Item
      Icon={FiWatch}
      title="No coding required"
      subtitle="Applash handles all the technical work for you."
    />
    <Item
      Icon={FiMoon}
      title="Automatic app signing"
      subtitle="Upload your keys once—we sign every build."
    />
    <Item
      Icon={FiDollarSign}
      title="Built-in payments"
      subtitle="Create plans and accept cards worldwide."
    />
    <Item
      Icon={FiCloud}
      title="Push notifications"
      subtitle="Send messages and track results with OneSignal."
    />
    <Item
      Icon={FiCheck}
      title="Publish everywhere"
      subtitle="Deploy to the App Store and Play Store without a Mac."
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-blue-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
