import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
