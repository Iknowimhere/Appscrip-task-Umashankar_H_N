'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './ProductListHeader.css';

export default function ProductListHeader({
  itemCount,
  isFilterHidden,
  onToggleFilter,
  isMobile,         // Receive isMobile prop from parent
  activeMobileTab,  // Receive activeMobileTab from parent
  onTabChange       // Receive onTabChange handler from parent
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('RECOMMENDED');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);
  };

  // Helper to determine if the FILTER tab is active on mobile
  const isFilterTabActive = isMobile && activeMobileTab === 'filter';
  // Helper to determine if the RECOMMENDED (products) tab is active on mobile
  const isRecommendedTabActive = isMobile && activeMobileTab === 'products';

  return (
    <div className="product-list-header">
      {isMobile ? (
        // Mobile header layout: "FILTER" button and "RECOMMENDED" dropdown as tabs.
        <div className="mobile-header-controls">
          {/* FILTER Button (Mobile Tab) */}
          <button
            className={`filter-button ${isFilterTabActive ? 'active-tab' : ''}`}
            onClick={() => onTabChange('filter')} // Set active tab to 'filter'
          >
            FILTER
          </button>
          {/* RECOMMENDED Dropdown (Mobile Tab) */}
          <div
            className={`recommended-dropdown ${isRecommendedTabActive ? 'active-tab' : ''}`}
            onClick={() => onTabChange('products')} // Set active tab to 'products'
          >
            {/* If the 'products' tab is active, allow the dropdown to open on click */}
            <span onClick={isRecommendedTabActive ? toggleDropdown : undefined}>
                {selectedSortOption}
            </span>
            <FontAwesomeIcon
                icon={isDropdownOpen && isRecommendedTabActive ? faChevronUp : faChevronDown}
                onClick={isRecommendedTabActive ? toggleDropdown : undefined}
            />
            {isDropdownOpen && isRecommendedTabActive && ( // Only show dropdown if tab is active AND dropdown is open
              <div className="dropdown-menu">
                <div
                  className={`dropdown-item ${selectedSortOption === 'RECOMMENDED' ? 'selected' : ''}`}
                  onClick={() => handleOptionClick('RECOMMENDED')}
                >
                  {selectedSortOption === 'RECOMMENDED' && <span className="check-mark">✓</span>} RECOMMENDED
                </div>
                <div
                  className={`dropdown-item ${selectedSortOption === 'NEWEST FIRST' ? 'selected' : ''}`}
                  onClick={() => handleOptionClick('NEWEST FIRST')}
                >
                  {selectedSortOption === 'NEWEST FIRST' && <span className="check-mark">✓</span>} NEWEST FIRST
                </div>
                <div
                  className={`dropdown-item ${selectedSortOption === 'POPULAR' ? 'selected' : ''}`}
                  onClick={() => handleOptionClick('POPULAR')}
                >
                  {selectedSortOption === 'POPULAR' && <span className="check-mark">✓</span>} POPULAR
                </div>
                <div
                  className={`dropdown-item ${selectedSortOption === 'PRICE : HIGH TO LOW' ? 'selected' : ''}`}
                  onClick={() => handleOptionClick('PRICE : HIGH TO LOW')}
                >
                  {selectedSortOption === 'PRICE : HIGH TO LOW' && <span className="check-mark">✓</span>} PRICE : HIGH TO LOW
                </div>
                <div
                  className={`dropdown-item ${selectedSortOption === 'PRICE : LOW TO HIGH' ? 'selected' : ''}`}
                  onClick={() => handleOptionClick('PRICE : LOW TO HIGH')}
                >
                  {selectedSortOption === 'PRICE : LOW TO HIGH' && <span className="check-mark">✓</span>} PRICE : LOW TO HIGH
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Desktop header layout (unchanged)
        <>
          <div className="left-section">
            <span className="item-count">{itemCount} ITEMS</span>
            <span className="filter-toggle" onClick={onToggleFilter}>
              <FontAwesomeIcon icon={isFilterHidden ? faChevronDown : faChevronUp} />
              {isFilterHidden ? ' SHOW FILTER' : ' HIDE FILTER'}
            </span>
          </div>

          <div className="right-section">
            <div className="recommended-dropdown" onClick={toggleDropdown}>
              <span>{selectedSortOption}</span>
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div
                    className={`dropdown-item ${selectedSortOption === 'RECOMMENDED' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('RECOMMENDED')}
                  >
                    {selectedSortOption === 'RECOMMENDED' && <span className="check-mark">✓</span>} RECOMMENDED
                  </div>
                  <div
                    className={`dropdown-item ${selectedSortOption === 'NEWEST FIRST' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('NEWEST FIRST')}
                  >
                    {selectedSortOption === 'NEWEST FIRST' && <span className="check-mark">✓</span>} NEWEST FIRST
                  </div>
                  <div
                    className={`dropdown-item ${selectedSortOption === 'POPULAR' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('POPULAR')}
                  >
                    {selectedSortOption === 'POPULAR' && <span className="check-mark">✓</span>} POPULAR
                  </div>
                  <div
                    className={`dropdown-item ${selectedSortOption === 'PRICE : HIGH TO LOW' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('PRICE : HIGH TO LOW')}
                  >
                    {selectedSortOption === 'PRICE : HIGH TO LOW' && <span className="check-mark">✓</span>} PRICE : HIGH TO LOW
                  </div>
                  <div
                    className={`dropdown-item ${selectedSortOption === 'PRICE : LOW TO HIGH' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('PRICE : LOW TO HIGH')}
                  >
                    {selectedSortOption === 'PRICE : LOW TO HIGH' && <span className="check-mark">✓</span>} PRICE : LOW TO HIGH
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
