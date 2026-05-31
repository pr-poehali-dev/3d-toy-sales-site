import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const team = [
  { name: 'Алексей', role: 'Основатель', emoji: '👨‍💻' },
  { name: 'Мария', role: 'Дизайнер', emoji: '👩‍🎨' },
  { name: 'Дмитрий', role: 'Инженер печати', emoji: '👨‍🔧' },
];

const values = [
  { icon: 'Heart', title: 'С душой', desc: 'Каждый товар — это не просто изделие, а результат творческого подхода и любви к своему делу.', color: 'gradient-bg-3' },
  { icon: 'Zap', title: 'Качество', desc: 'Используем только сертифицированные материалы и профессиональное оборудование.', color: 'gradient-bg' },
  { icon: 'Users', title: 'Для людей', desc: 'Слушаем клиентов и создаём товары, которые делают жизнь красивее и удобнее.', color: 'gradient-bg-2' },
];

export default function About() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <div className="gradient-hero py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            О <span className="gradient-text">нас</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Мы — небольшая команда энтузиастов 3D-печати, влюблённых в своё дело
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gradient-text font-bold text-sm uppercase tracking-widest">Наша история</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-3 mb-6">
              Начали с одного принтера —<br />выросли в <span className="gradient-text">целый магазин</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PrintLand начался в 2020 году с одного домашнего 3D-принтера и большого желания создавать красивые, полезные вещи. Тогда мы печатали небольшие игрушки для друзей и семьи.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Сегодня у нас 6 профессиональных принтеров, сотни довольных клиентов по всей России и каталог из более чем 200 уникальных изделий. Мы постоянно расширяем ассортимент и улучшаем качество.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Мы верим, что 3D-печать — это будущее персонализированного производства. Каждый может получить именно то, что ему нужно.
            </p>
            <Link
              to="/contacts"
              className="gradient-bg text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={20} />
              Связаться с нами
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="gradient-bg rounded-2xl p-6 text-white text-center card-hover">
              <div className="text-4xl font-black mb-2">6</div>
              <div className="text-white/80 text-sm">Принтеров</div>
            </div>
            <div className="gradient-bg-3 rounded-2xl p-6 text-white text-center card-hover mt-6">
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-white/80 text-sm">Клиентов</div>
            </div>
            <div className="gradient-bg-2 rounded-2xl p-6 text-white text-center card-hover">
              <div className="text-4xl font-black mb-2">200+</div>
              <div className="text-white/80 text-sm">Товаров</div>
            </div>
            <div className="gradient-bg rounded-2xl p-6 text-white text-center card-hover mt-6">
              <div className="text-4xl font-black mb-2">4.9★</div>
              <div className="text-white/80 text-sm">Рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-800 mb-4">
              Наши <span className="gradient-text">ценности</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover border border-gray-100">
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <Icon name={v.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-black text-gray-800 text-xl mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-800 mb-4">
            Наша <span className="gradient-text">команда</span>
          </h2>
          <p className="text-gray-500 text-lg">Люди, которые делают PrintLand особенным</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {team.map(t => (
            <div key={t.name} className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {t.emoji}
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{t.name}</h3>
              <p className="text-purple-500 font-medium text-sm mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
