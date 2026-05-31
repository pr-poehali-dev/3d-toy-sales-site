import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
  };

  if (ordered) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
            🚀
          </div>
          <h1 className="text-3xl font-black text-gray-800 mb-3">Заказ оформлен!</h1>
          <p className="text-gray-500 mb-8 text-lg">Мы свяжемся с вами для подтверждения в ближайшее время</p>
          <Link to="/" className="gradient-bg text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity">
            На главную
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-3xl font-black text-gray-800 mb-3">Корзина пуста</h1>
          <p className="text-gray-500 mb-8 text-lg">Добавьте товары из нашего каталога</p>
          <Link to="/catalog" className="gradient-bg text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <Icon name="ShoppingBag" size={20} />
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-8">
          Корзина <span className="gradient-text">({totalItems})</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs text-purple-500 font-semibold">{item.category}</span>
                      <h3 className="font-bold text-gray-800 text-base">{item.name}</h3>
                      <span className="text-xs text-gray-400">{item.material}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                    >
                      <Icon name="X" size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                    <span className="font-black gradient-text text-xl">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-gray-400 hover:text-red-500 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <Icon name="Trash2" size={15} />
              Очистить корзину
            </button>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-black text-gray-800 text-xl mb-5">Итого</h3>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Товары ({totalItems} шт.)</span>
                  <span>{totalPrice.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Доставка</span>
                  <span className={totalPrice >= 3000 ? 'text-green-600 font-semibold' : ''}>
                    {totalPrice >= 3000 ? 'Бесплатно' : 'от 290 ₽'}
                  </span>
                </div>
                {totalPrice >= 3000 && (
                  <div className="bg-green-50 rounded-lg px-3 py-2 text-green-700 text-xs font-medium">
                    🎉 Бесплатная доставка!
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between font-black text-gray-800 text-lg">
                  <span>К оплате</span>
                  <span className="gradient-text">{totalPrice.toLocaleString()} ₽</span>
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full gradient-bg text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mb-3"
              >
                <Icon name="ShoppingBag" size={20} />
                Оформить заказ
              </button>

              <Link
                to="/catalog"
                className="block text-center text-purple-500 text-sm font-semibold hover:text-purple-700 transition-colors"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
