"use client"
import { accentedHeading } from "@/utils/utils"
import { Button } from "../ui/Button/Button"
import { ACCENT_SYMBOLS } from "@/constants/constants"

interface HeadingProps {
  title: string;
  subtitle: string;
  action?: string;
  handleAction?: () => void; 
}

const Heading = ({ title, subtitle, action, handleAction }: HeadingProps) => {
  const { heading, accentSymbol } = accentedHeading(title, ACCENT_SYMBOLS)

  return (
    <div className="flex flex-col mb-12.5 lg:mb-17.5">
      <div className="flex flex-row">
        <h2 className="text-white font-bold text-lg lg:text-xl">{heading}</h2>
        {accentSymbol && (
          <span className="text-accent font-bold text-lg lg:text-xl">
            {accentSymbol}
          </span>
        )}
      </div>
      <div className="flex flex-row">
        <p className="text-sm mr-2 lg:text-base lg:mr-3">
          {subtitle}
        </p>
        {action && (
          <Button
            title={action}
            className="text-accent"
            onClick={handleAction}
          />
        )}
      </div>
    </div>
  );
};

export { Heading }
