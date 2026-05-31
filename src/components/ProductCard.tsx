import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/context/CartContext';
import Icon from '@/components/ui/icon';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeColors: Record<string, string> = {
    'Хит': 'gradient-bg',
    'Новинка': 'gradient-bg-2',
    'Топ продаж': 'gradient-bg-3',
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 ${badgeColors[product.badge] || 'gradient-bg'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-xs font-semibold text-gray-500">{product.material}</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-purple-500 font-semibold mb-1">{product.category}</span>
        <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-black gradient-text">{product.price.toLocaleString()} ₽</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 ${
              added ? 'bg-green-500 scale-95' : 'gradient-bg hover:opacity-90 hover:scale-105'
            }`}
          >
            <Icon name={added ? 'Check' : 'ShoppingCart'} size={16} />
            {added ? 'Добавлено' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  );
}
