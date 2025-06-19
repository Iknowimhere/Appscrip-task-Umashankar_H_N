'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FilterSidebar.css';

export default function FilterSidebar({ selectedFilters, onFilterChange, onUnselectAll }) {
  const [openCategories, setOpenCategories] = useState({
    idealFor: false, // Start collapsed as in screenshot
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const filterCategories = [
    {
      id: 'customizable',
      title: 'CUSTOMIZABLE',
      type: 'checkbox',
      options: ['Customizable'], // Single checkbox
    },
    {
      id: 'idealFor',
      title: 'IDEAL FOR',
      type: 'checkbox-group',
      options: ['Men', 'Women', 'Baby & Kids'],
    },
    {
      id: 'occasion',
      title: 'OCCASION',
      type: 'checkbox-group',
      options: ['Casual', 'Party', 'Formal'], // Example options
    },
    {
      id: 'work',
      title: 'WORK',
      type: 'checkbox-group',
      options: ['Office', 'Outdoor', 'Home'], // Example options
    },
    {
      id: 'fabric',
      title: 'FABRIC',
      type: 'checkbox-group',
      options: ['Cotton', 'Silk', 'Wool'], // Example options
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      type: 'checkbox-group',
      options: ['Topwear', 'Bottomwear', 'Footwear'], // Example options
    },
    {
      id: 'suitableFor',
      title: 'SUITABLE FOR',
      type: 'checkbox-group',
      options: ['Summer', 'Winter', 'All Season'], // Example options
    },
    {
      id: 'rawMaterials',
      title: 'RAW MATERIALS',
      type: 'checkbox-group',
      options: ['Leather', 'Plastic', 'Metal'], // Example options
    },
    {
      id: 'pattern',
      title: 'PATTERN',
      type: 'checkbox-group',
      options: ['Solid', 'Striped', 'Checked'], // Example options
    },
  ];

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        {/* Placeholder for "3425 ITEMS" and "HIDE FILTER" if moved here */}
      </div>

      {filterCategories.map(category => (
        <div key={category.id} className="filter-category">
          <div className="category-title" onClick={() => toggleCategory(category.id)}>
            <label>{category.title}</label>
            {category.type === 'checkbox' ? (
              <input
                type="checkbox"
                checked={selectedFilters[category.id] && selectedFilters[category.id].includes(category.options[0])}
                onChange={() => onFilterChange(category.id, category.options[0])}
              />
            ) : (
              <div className="category-toggle-icon">
                <FontAwesomeIcon icon={openCategories[category.id] ? faChevronUp : faChevronDown} />
              </div>
            )}
          </div>

          {openCategories[category.id] && category.type === 'checkbox-group' && (
            <div className="category-options">
              <span className="unselect-all" onClick={() => onUnselectAll(category.id)}>Unselect all</span>
              {category.options.map(option => (
                <label key={option} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={Array.isArray(selectedFilters[category]) && selectedFilters[category].includes(option)}
                    onChange={() => onFilterChange(category.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
           {/* Default "All" display when collapsed or not a checkbox group */}
          {!openCategories[category.id] && category.type === 'checkbox-group' && (
            <div className="category-default-text">All</div>
          )}
        </div>
      ))}
    </div>
  );
}