'use client';

import React, { useState, useEffect } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import ProductListHeader from '@/components/ProductListHeader';
import ProductGrid from '@/components/ProductGrid';
import './ProductListingPage.css';

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
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

  // Overlay close handler for mobile filter
  const handleCloseFilter = () => {
    setActiveMobileTab('products');
  };

  return (
    <div className="product-listing-page">
      {/* Desktop sidebar */}
      {!isMobile && !isFilterHidden && (
        <aside className="sidebar-section">
          <FilterSidebar
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onUnselectAll={handleUnselectAll}
          />
        </aside>
      )}

      {/* Mobile filter overlay */}
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
        />

        {/* Only show products if not in filter tab on mobile */}
        {loading ? (
          <div className="loading-indicator">Loading products...</div>
        ) : (
          (!isMobile || activeMobileTab === 'products') && (
            <ProductGrid products={products} />
          )
        )}
      </main>
    </div>
  );
}