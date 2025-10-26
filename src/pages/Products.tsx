import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { MotorcycleCard } from '../components/MotorcycleCard';
import { motorcycles } from '../data/motorcycles';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { value: 'all', label: 'Todas' },
    { value: 'sport', label: 'Deportivas' },
    { value: 'cruiser', label: 'Cruiser' },
    { value: 'touring', label: 'Touring' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'naked', label: 'Naked' },
  ];

  const filteredAndSortedMotorcycles = useMemo(() => {
    let filtered = motorcycles;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((m) => m.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'year':
          return b.year - a.year;
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, searchTerm, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Nuestro Catálogo</h1>
          <p>Explora nuestra selección de motocicletas premium</p>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar motos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <SlidersHorizontal size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Nombre</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="year">Año</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="results-info">
          <p>
            Mostrando {filteredAndSortedMotorcycles.length} de {motorcycles.length}{' '}
            motos
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedMotorcycles.length > 0 ? (
          <div className="products-grid">
            {filteredAndSortedMotorcycles.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron motos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};
