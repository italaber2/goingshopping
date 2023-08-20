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
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="🔍 Search by product name"
        data-testid="search-bar"
      />
    </div>
  );
}

export default SearchBar;
