// src/components/ExtensionList.tsx
import ExtensionCard from "./ExtensionCard";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
const ExtensionList = () => {
  const { extensions, filter } = useSelector((state: RootState) => state.extension);
  const filtered = extensions.filter((ext) =>
    filter === "all"? true: filter === "active" ? ext.isActive: !ext.isActive
  );

  return (
    <div className="extension-list">
      {filtered.map((ext) => (
        <ExtensionCard key={ext.id} {...ext} />
      ))}
    </div>
  );
};

export default ExtensionList;
