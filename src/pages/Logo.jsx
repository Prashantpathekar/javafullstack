import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-col leading-tight cursor-pointer">
      <span className="text-2xl font-bold text-blue-600 tracking-wide">
        WoodKart
      </span>
      <span className="flex items-center gap-1 text-xs italic text-gray-500">
        Explore Comfort <Sparkles className="h-3 w-3 text-yellow-500" />
      </span>
    </div>
  );
};

export default Logo;
