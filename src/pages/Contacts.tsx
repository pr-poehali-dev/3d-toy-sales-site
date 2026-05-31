import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (903) 289-10-75', href: 'tel:+79032891075', color: 'gradient-bg' },
  { icon: 'Mail', label: 'Email', value: 'hello@printland.ru', href: 'mailto:hello@printland.ru', color: 'gradient-bg-3' },
  { icon: 'MessageCircle', label: 'Telegram', value: '@printland_shop', href: 'https://t.me/printland_shop', color: 'gradient-bg-2' },
  { icon: 'MapPin', label: 'Адрес', value: 'г. Москва, ул. Примерная, д. 10', href: '#', color: 'gradient-bg' },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <div className="gradient-hero py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-52 h-52 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            <span className="gradient-text">Контакты</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы всегда рады помочь!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-8">
              Как нас <span className="gradient-text">найти?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contacts.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 card-hover block"
                >
                  <div className={`w-10 h-10 ${c.color} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon name={c.icon} size={18} className="text-white" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium mb-1">{c.label}</div>
                  <div className="font-bold text-gray-800 text-sm">{c.value}</div>
                </a>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-800 mb-3">Часы работы</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['Пн — Пт', '9:00 — 20:00'],
                  ['Суббота', '10:00 — 18:00'],
                  ['Воскресенье', 'Выходной'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-500">{day}</span>
                    <span className="font-semibold text-gray-800">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-gray-800 mb-8">
              Написать <span className="gradient-text">нам</span>
            </h2>

            {sent ? (
              <div className="gradient-bg rounded-2xl p-10 text-center text-white">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-black mb-2">Сообщение отправлено!</h3>
                <p className="text-white/80">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Опишите ваш вопрос или пожелание..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-bg text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}