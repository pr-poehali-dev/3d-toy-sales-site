import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="gradient-hero text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-xl">🖨️</span>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Russo One, sans-serif' }}>
                Print<span className="gradient-text">Land</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Магазин уникальных 3D-изделий: игрушки, органайзеры, полки, вазы и декор на любой вкус.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 gradient-text">Каталог</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link to="/catalog?cat=Игрушки" className="hover:text-white transition-colors">Игрушки</Link></li>
              <li><Link to="/catalog?cat=Органайзеры" className="hover:text-white transition-colors">Органайзеры</Link></li>
              <li><Link to="/catalog?cat=Полки" className="hover:text-white transition-colors">Полки</Link></li>
              <li><Link to="/catalog?cat=Вазы" className="hover:text-white transition-colors">Вазы</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 gradient-text">Информация</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/delivery" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 gradient-text">Контакты</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-purple-400" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-purple-400" />
                hello@printland.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-purple-400" />
                Москва, Россия
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon name="MessageCircle" size={16} />
              </a>
              <a href="#" className="w-9 h-9 gradient-bg-3 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon name="Instagram" size={16} />
              </a>
              <a href="#" className="w-9 h-9 gradient-bg-2 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
          © 2024 PrintLand. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
