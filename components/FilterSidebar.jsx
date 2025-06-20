'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FilterSidebar.css';

export default function FilterSidebar({ selectedFilters, onFilterChange, onUnselectAll }) {
  const [openCategories, setOpenCategories] = useState({
    idealFor: false,
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
      options: ['Customizable'],
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
      options: ['Casual', 'Party', 'Formal'],
    },
    {
      id: 'work',
      title: 'WORK',
      type: 'checkbox-group',
      options: ['Office', 'Outdoor', 'Home'],
    },
    {
      id: 'fabric',
      title: 'FABRIC',
      type: 'checkbox-group',
      options: ['Cotton', 'Silk', 'Wool'],
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      type: 'checkbox-group',
      options: ['Topwear', 'Bottomwear', 'Footwear'],
    },
    {
      id: 'suitableFor',
      title: 'SUITABLE FOR',
      type: 'checkbox-group',
      options: ['Summer', 'Winter', 'All Season'],
    },
    {
      id: 'rawMaterials',
      title: 'RAW MATERIALS',
      type: 'checkbox-group',
      options: ['Leather', 'Plastic', 'Metal'],
    },
    {
      id: 'pattern',
      title: 'PATTERN',
      type: 'checkbox-group',
      options: ['Solid', 'Striped', 'Checked'],
    },
  ];

  return (
    <div className="filter-sidebar">
      <div className="filter-header"></div>
      {filterCategories.map(category => (
        <div key={category.id} className="filter-category">
          <div className="category-title" onClick={() => toggleCategory(category.id)}>
            <label>{category.title}</label>
            {category.type === 'checkbox' ? (
              <input
                type="checkbox"
                checked={(selectedFilters[category.id] || []).includes(category.options[0])}
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
                    checked={(selectedFilters[category.id] || []).includes(option)}
                    onChange={() => onFilterChange(category.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
          {!openCategories[category.id] && category.type === 'checkbox-group' && (
            <div className="category-default-text">All</div>
          )}
        </div>
      ))}
    </div>
  );
}
