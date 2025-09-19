// src/components/ExtensionCard.tsx
import { Card, Button, Switch } from "antd";
import type { AppDispatch } from "../store/store";
import { toggleExtension, removeExtension } from "../store/extensionSlice";
import { useDispatch } from "react-redux";
interface Props {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  logo: string;
}

const ExtensionCard: React.FC<Props> = ({
  id,
  name,
  description,
  isActive,
  logo,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Card className="extension-card"  style={{backgroundColor: "var(--card-neutral)",
    color: "var(--card-text)",
    transition: "all 0.3s ease",borderColor:"gray"}}>
      {/* Top Section */}
      <div className="extension-card-top">
         <div className="extension-card-logo" >
          <img src={logo} alt="extension image" />
        </div>
        <div className="extension-card-content">
          <h3>{name}</h3>
          <p className="text-[#aaa] text-sm mr-8">{description}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <Button size="small" style={{ backgroundColor: "transparent",color:"gray",borderColor:"gray" }} 
         onClick={() => dispatch(removeExtension(id))}>
          Remove
        </Button>
        <Switch checked={isActive} onChange={() => dispatch(toggleExtension(id))} 
        style={{backgroundColor: isActive ? "var(--red-500)" : "", }}/>
      </div>
    </Card>
  );
};

export default ExtensionCard;
