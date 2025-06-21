'use client';

import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductListHeader from './ProductListHeader';
import ProductGrid from './ProductGrid';
import './ProductListing.css';

export default function ProductListing({ initialProducts = [], onSort }) {
  const [products, setProducts] = useState(initialProducts);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('products');
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleFilter = () => {
    if (isMobile) {
      setActiveMobileTab('filter');
    } else {
      setIsFilterHidden(!isFilterHidden);
    }
  };

  const handleTabChange = (tabName) => {
    setActiveMobileTab(tabName);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prevFilters => {
      const newCategoryFilters = prevFilters[category] ? [...prevFilters[category]] : [];
      if (newCategoryFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: newCategoryFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...newCategoryFilters, value]
        };
      }
    });
  };

  const handleUnselectAll = (category) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [category]: []
    }));
  };

  const handleCloseFilter = () => {
    setActiveMobileTab('products');
  };

  const handleSort = (sortOption) => {
    const sortedProducts = [...products];
    switch (sortOption) {
      case 'PRICE : HIGH TO LOW':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'PRICE : LOW TO HIGH':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        // For other cases (RECOMMENDED, NEWEST FIRST, POPULAR)
        // Keep original order from API
        return;
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="product-listing-page">
      {!isMobile && !isFilterHidden && (
        <aside className="sidebar-section">
          <FilterSidebar
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onUnselectAll={handleUnselectAll}
          />
        </aside>
      )}

      {isMobile && activeMobileTab === 'filter' && (
        <div className="filter-overlay" onClick={handleCloseFilter}>
          <div
            className="filter-sidebar"
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                display: 'block',
                marginBottom: '16px',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                fontWeight: 'bold',
                width: '100%',
                cursor: 'pointer'
              }}
              onClick={handleCloseFilter}
            >
              Close
            </button>
            <FilterSidebar
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onUnselectAll={handleUnselectAll}
            />
          </div>
        </div>
      )}

      <main className={`main-content ${isFilterHidden ? 'full-width' : ''}`}>
        <ProductListHeader
          itemCount={products.length}
          isFilterHidden={isFilterHidden}
          onToggleFilter={handleToggleFilter}
          isMobile={isMobile}
          activeMobileTab={activeMobileTab}
          onTabChange={handleTabChange}
          onSort={handleSort} 
        />

        {(!isMobile || activeMobileTab === 'products') && (
          <ProductGrid products={products} />
        )}
      </main>
    </div>
  );
}