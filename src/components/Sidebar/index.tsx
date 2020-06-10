import React from 'react';
import { Container } from './styles';
import Dashboard from '../../assets/icons/dashboard.svg';
import Help from '../../assets/icons/help.svg';
import Setting from '../../assets/icons/setting.svg';
import Trophy from '../../assets/icons/trophy.svg';
import Logo from '../../assets/logo.png';

interface MenuItem {
  name: string;
  icon: any;
  alt: string;
}

const Sidebar = () => {
  const items: MenuItem[] = [
    {
      name: 'Lista',
      icon: Dashboard,
      alt: 'Ícone de lista'
    },
    {
      name: 'Conquistas',
      icon: Trophy,
      alt: 'Ícone de troféu'
    },
    {
      name: 'Pokédex',
      icon: Dashboard,
      alt: 'Ícone de dashboard'
    },
    {
      name: 'Ajuda',
      icon: Help,
      alt: 'Ícone de ajuda'
    },
    {
      name: 'Configuração',
      icon: Setting,
      alt: 'Ícone de configuração'
    }
  ];

  const renderItem = (item: MenuItem) => (
    <section key={item.name} className="menuItem">
      <img src={item.icon} alt={item.alt} />
      <p>{item.name}</p>
    </section>
  );

  return (
    <Container>
      <header>
        <img src={Logo} alt="Voltbras Logo" />
        <section>
          <strong>Voltbrass App</strong>
          <p>Pokémon Manager</p>
        </section>
      </header>
      <section className="menu">
        {items.map((item) => renderItem(item))}
      </section>
    </Container>
  );
};

export default Sidebar;
