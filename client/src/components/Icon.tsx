import { Icon as IconifyIcon } from "@iconify/react";

interface IconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | number;
}

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

export default function Icon({ name, className = "", size = "md" }: IconProps) {
  const iconSize = typeof size === "number" ? size : iconSizes[size];

  return (
    <IconifyIcon
      icon={name}
      className={className}
      width={iconSize}
      height={iconSize}
    />
  );
}
