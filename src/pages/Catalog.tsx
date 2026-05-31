import { useState, useMemo } from 'react';
import { products, categories, materials } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedMaterial, setSelectedMaterial] = useState('Все');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(3000);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const matchCat = selectedCategory === 'Все' || p.category === selectedCategory;
      const matchMat = selectedMaterial === 'Все' || p.material === selectedMaterial;
      const matchPrice = p.price >= priceMin && p.price <= priceMax;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchMat && matchPrice && matchSearch;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [selectedCategory, selectedMaterial, priceMin, priceMax, search, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('Все');
    setSelectedMaterial('Все');
    setPriceMin(0);
    setPriceMax(3000);
    setSearch('');
    setSortBy('default');
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="gradient-hero py-14 text-center relative overflow-hidden mb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Каталог <span className="gradient-text">товаров</span>
          </h1>
          <p className="text-white/60 text-lg">Более 200 уникальных 3D-изделий</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800"
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800 font-medium"
          >
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена: по возрастанию</option>
            <option value="price-desc">Цена: по убыванию</option>
            <option value="name">По названию</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-800 text-lg">Фильтры</h3>
                <button
                  onClick={resetFilters}
                  className="text-purple-500 text-sm font-semibold hover:text-purple-700 transition-colors"
                >
                  Сбросить
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Категория</h4>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? 'gradient-bg text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Материал</h4>
                <div className="flex flex-col gap-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedMaterial === mat
                          ? 'gradient-bg text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Цена, ₽</h4>
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="number"
                    value={priceMin}
                    onChange={e => setPriceMin(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="От"
                    min={0}
                  />
                  <span className="text-gray-400">—</span>
                  <input
                    type="number"
                    value={priceMax}
                    onChange={e => setPriceMax(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="До"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500 text-sm">
                Найдено: <span className="font-bold text-gray-800">{filtered.length}</span> товаров
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Ничего не найдено</h3>
                <p className="text-gray-500 mb-6">Попробуйте изменить фильтры или поисковый запрос</p>
                <button
                  onClick={resetFilters}
                  className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
