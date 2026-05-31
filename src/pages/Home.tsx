import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

const features = [
  { icon: 'Printer', title: '100% 3D-печать', desc: 'Каждое изделие напечатано на профессиональном оборудовании', color: 'gradient-bg' },
  { icon: 'Palette', title: 'Любые цвета', desc: 'Более 50 цветов и материалов на выбор', color: 'gradient-bg-3' },
  { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставим по всей России за 3-7 дней', color: 'gradient-bg-2' },
  { icon: 'Star', title: 'Гарантия качества', desc: 'Каждый товар проходит контроль качества', color: 'gradient-bg' },
];

const hits = products.filter(p => p.badge === 'Хит' || p.badge === 'Топ продаж').slice(0, 4);

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Более 200 товаров в наличии</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Магазин<br />
            <span className="gradient-text">3D изделий</span>
          </h1>

          <p className="text-white/70 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Уникальные игрушки, органайзеры, полки и вазы, напечатанные на 3D-принтере с любовью
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="gradient-bg text-white font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-all hover:scale-105 glow inline-flex items-center gap-2"
            >
              <Icon name="ShoppingBag" size={22} />
              Перейти в каталог
            </Link>
            <Link
              to="/about"
              className="glass text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Icon name="Info" size={22} />
              О нас
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-20 max-w-lg mx-auto">
            {[['200+', 'Товаров'], ['500+', 'Клиентов'], ['4.9', 'Рейтинг']].map(([val, label]) => (
              <div key={label} className="glass rounded-2xl p-4 text-center">
                <div className="text-3xl font-black gradient-text">{val}</div>
                <div className="text-white/60 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/40" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-800 mb-4">
              Почему выбирают <span className="gradient-text">нас?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Мы создаём уникальные вещи с заботой о каждой детали</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-6 text-center shadow-sm card-hover border border-gray-100">
                <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={f.icon} size={26} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-gray-800 mb-2">
                Хиты <span className="gradient-text">продаж</span>
              </h2>
              <p className="text-gray-500">Самые популярные товары нашего магазина</p>
            </div>
            <Link
              to="/catalog"
              className="hidden md:flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Все товары
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hits.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              to="/catalog"
              className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Все товары <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-3xl p-12 text-center text-white glow relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Хотите что-то уникальное?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Мы можем распечатать изделие по вашему дизайну или из предложенных вами файлов
              </p>
              <Link
                to="/contacts"
                className="bg-white text-purple-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-gray-100 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={22} />
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}