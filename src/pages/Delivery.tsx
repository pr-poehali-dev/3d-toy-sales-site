import Icon from '@/components/ui/icon';

const methods = [
  {
    icon: 'Truck',
    title: 'Транспортные компании',
    desc: 'СДЭК, Boxberry, DHL, Почта России',
    price: 'от 290 ₽',
    time: '3–7 дней',
    color: 'gradient-bg',
  },
  {
    icon: 'MapPin',
    title: 'Самовывоз',
    desc: 'Наш адрес: г. Москва, ул. Примерная, д. 10',
    price: 'Бесплатно',
    time: 'В тот же день',
    color: 'gradient-bg-3',
  },
  {
    icon: 'Zap',
    title: 'Экспресс-доставка',
    desc: 'Доставим в течение дня по Москве',
    price: 'от 590 ₽',
    time: '1 день',
    color: 'gradient-bg-2',
  },
];

const payments = [
  { icon: 'CreditCard', label: 'Банковская карта онлайн' },
  { icon: 'Smartphone', label: 'СБП (QR-код)' },
  { icon: 'Banknote', label: 'Наличные при самовывозе' },
  { icon: 'Building2', label: 'Безналичный расчёт для ИП/ООО' },
];

const faq = [
  {
    q: 'Сколько времени занимает производство?',
    a: 'Большинство товаров есть в наличии. Изготовление под заказ — 2–5 рабочих дней.',
  },
  {
    q: 'Можно ли вернуть товар?',
    a: 'Да, в течение 14 дней при сохранении товарного вида. Кастомные изделия не возвращаются.',
  },
  {
    q: 'Как отследить посылку?',
    a: 'После отправки мы пришлём трек-номер на почту или в мессенджер.',
  },
  {
    q: 'Есть ли бесплатная доставка?',
    a: 'Бесплатная доставка при заказе от 3 000 ₽ транспортными компаниями.',
  },
];

export default function Delivery() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <div className="gradient-hero py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Доставка и <span className="gradient-text">оплата</span>
          </h1>
          <p className="text-white/70 text-xl">Доставляем по всей России быстро и надёжно</p>
        </div>
      </div>

      {/* Free delivery banner */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="gradient-bg-3 rounded-2xl p-5 text-white text-center shadow-lg">
          <p className="font-bold text-lg">🎉 Бесплатная доставка при заказе от 3 000 ₽</p>
        </div>
      </div>

      {/* Delivery methods */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Способы <span className="gradient-text">доставки</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map(m => (
            <div key={m.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover">
              <div className={`w-14 h-14 ${m.color} rounded-2xl flex items-center justify-center mb-5`}>
                <Icon name={m.icon} size={26} className="text-white" />
              </div>
              <h3 className="font-black text-gray-800 text-xl mb-2">{m.title}</h3>
              <p className="text-gray-500 text-sm mb-5">{m.desc}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400 font-medium">Стоимость</div>
                  <div className="font-black gradient-text text-lg">{m.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 font-medium">Срок</div>
                  <div className="font-bold text-gray-800">{m.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
              Способы <span className="gradient-text">оплаты</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {payments.map(p => (
              <div key={p.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={p.icon} size={22} className="text-white" />
                </div>
                <p className="font-semibold text-gray-700 text-sm">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faq.map(item => (
            <div key={item.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="HelpCircle" size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
