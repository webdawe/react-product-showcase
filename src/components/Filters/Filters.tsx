import { PRODUCT_TYPES } from "../../types";

type FiltersProps = {
  onFilterChange: (type: string) => void;
  onSearchChange: (type: string) => void;
};

export const Filters = ({ onFilterChange, onSearchChange }: FiltersProps) => {
  return (
    <div className="flex justify-end items-center mb-6">
      <input
        type="text"
        placeholder="Search ..."
        className="border rounded-md p-2 mr-4"
        onChange={(e) => onSearchChange(e.target.value)}
        data-test-id="search-input"
      />
      <select
        className="border rounded-md p-2"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        {PRODUCT_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
