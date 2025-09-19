// src/components/Header.tsx
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/extensionSlice";
import type { RootState } from "../store/store";
import "../App.css";

const FilterPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.extension.filter);

  return (
    <div className="filter ">
      {/* Title */}
      <h2>Extensions List</h2>

      {/* Filter Buttons */}
      <div className="filter-button ">
        <Button
          style={{
            backgroundColor:filter === "all" ? "hsl(3, 71%, 56%)" : "var(--card-neutral)",
            borderColor: filter === "all" ? "hsl(3, 71%, 56%)" : "var(--card-neutral-100)",
            color: filter === "all" ? "#fff" : "var(--text-color)",
            borderRadius: "20px",
          }}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </Button>
        <Button
          style={{
            backgroundColor: filter === "active" ? "hsl(3, 71%, 56%)" : "var(--card-neutral)",
            borderColor:filter === "active" ? "hsl(3, 71%, 56%)": "var(--card-neutral-100)",
            color: filter === "active" ? "#fff" : "var(--text-color)",
            borderRadius: "20px",
          }}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </Button>
        <Button
          style={{
            backgroundColor:filter === "inactive"? "hsl(3, 71%, 56%)" : "var(--card-neutral)",
            borderColor:filter === "inactive" ? "hsl(3, 71%, 56%)" : "var(--card-neutral-100)",
            color: filter === "inactive" ? "#fff" : "var(--text-color)",
            borderRadius: "20px",
          }}
          onClick={() => dispatch(setFilter("inactive"))}
        >
          Inactive
        </Button>
      </div>
    </div>
  );
};

export default FilterPage;
