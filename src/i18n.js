import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    title: "EcoLink & BioStream",
    subtitle: "Harmony in Water and Nature",
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navContact: "Contact",
    heroTitle: "Water Life, Nature's Future",
    heroText: "Dedicated to the sustainable management of water resources and environmental conservation. Building a greener tomorrow, one drop at a time.",
    learnMore: "Learn More",
    ourMission: "Our Mission",
    missionText: "To innovate and implement sustainable water solutions that protect ecosystems and ensure clean water for future generations.",
    productEcoLink: "EcoLink Mesh",
    descEcoLink: "Smart monitoring system for water quality and environmental health.",
    productBioStream: "BioStream Filter",
    descBioStream: "Eco-friendly filtration system that mimics natural wetlands.",
    contactUs: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    footerText: "© 2026 EcoLink & BioStream. All rights reserved.",
    langName: "English"
  },
  es: {
    title: "EcoLink y BioStream",
    subtitle: "Armonía entre el Agua y la Naturaleza",
    navHome: "Inicio",
    navAbout: "Nosotros",
    navProducts: "Productos",
    navContact: "Contacto",
    heroTitle: "Vida de Agua, Futuro de la Naturaleza",
    heroText: "Dedicados a la gestión sostenible de los recursos hídricos y la conservación ambiental. Construyendo un mañana más verde, gota a gota.",
    learnMore: "Saber más",
    ourMission: "Nuestra Misión",
    missionText: "Innovar e implementar soluciones hídricas sostenibles que protejan los ecosistemas y garanticen agua limpia para las generaciones futuras.",
    productEcoLink: "Malla EcoLink",
    descEcoLink: "Sistema de monitoreo inteligente para la calidad del agua y la salud ambiental.",
    productBioStream: "Filtro BioStream",
    descBioStream: "Sistema de filtración ecológico que imita los humedales naturales.",
    contactUs: "Contáctanos",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar Mensaje",
    footerText: "© 2026 EcoLink y BioStream. Todos los derechos reservados.",
    langName: "Español"
  },
  fr: {
    title: "EcoLink & BioStream",
    subtitle: "Harmonie entre l'eau et la nature",
    navHome: "Accueil",
    navAbout: "À propos",
    navProducts: "Produits",
    navContact: "Contact",
    heroTitle: "Vie de l'eau, Avenir de la nature",
    heroText: "Dédié à la gestion durable des ressources en eau et à la conservation de l'environnement. Construire un avenir plus vert, goutte après goutte.",
    learnMore: "En savoir plus",
    ourMission: "Notre Mission",
    missionText: "Innover et mettre en œuvre des solutions d'eau durables qui protègent les écosystèmes et garantissent une eau propre pour les générations futures.",
    productEcoLink: "EcoLink Mesh",
    descEcoLink: "Système de surveillance intelligent pour la qualité de l'eau et la santé environnementale.",
    productBioStream: "Filtre BioStream",
    descBioStream: "Système de filtration écologique qui imite les zones humides naturelles.",
    contactUs: "Contactez-nous",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    footerText: "© 2026 EcoLink & BioStream. Tous droits réservés.",
    langName: "Français"
  },
  de: {
    title: "EcoLink & BioStream",
    subtitle: "Harmonie in Wasser und Natur",
    navHome: "Startseite",
    navAbout: "Über uns",
    navProducts: "Produkte",
    navContact: "Kontakt",
    heroTitle: "Wasserleben, Zukunft der Natur",
    heroText: "Dem nachhaltigen Management von Wasserressourcen und dem Umweltschutz gewidmet. Tropfen für Tropfen an einem grüneren Morgen bauen.",
    learnMore: "Mehr erfahren",
    ourMission: "Unsere Mission",
    missionText: "Innovation und Umsetzung nachhaltiger Wasserlösungen, die Ökosysteme schützen und sauberes Wasser für zukünftige Generationen sicherstellen.",
    productEcoLink: "EcoLink Mesh",
    descEcoLink: "Intelligentes Überwachungssystem für Wasserqualität und Umweltgesundheit.",
    productBioStream: "BioStream Filter",
    descBioStream: "Umweltfreundliches Filtersystem, das natürliche Feuchtgebiete nachahmt.",
    contactUs: "Kontaktieren Sie uns",
    name: "Name",
    email: "Email",
    message: "Nachricht",
    send: "Absenden",
    footerText: "© 2026 EcoLink & BioStream. Alle Rechte vorbehalten.",
    langName: "Deutsch"
  },
  it: {
    title: "EcoLink e BioStream",
    subtitle: "Armonia tra Acqua e Natura",
    navHome: "Home",
    navAbout: "Chi Siamo",
    navProducts: "Prodotti",
    navContact: "Contatti",
    heroTitle: "Vita dell'Acqua, Futuro della Natura",
    heroText: "Dedicati alla gestione sostenibile delle risorse idriche e alla conservazione dell'ambiente. Costruendo un domani più verde, goccia dopo goccia.",
    learnMore: "Scopri di più",
    ourMission: "La Nostra Missione",
    missionText: "Innovare e implementare soluzioni idriche sostenibili che proteggano gli ecosistemi e garantiscan acqua pulita per le generazioni future.",
    productEcoLink: "EcoLink Mesh",
    descEcoLink: "Sistema di monitoraggio intelligente per la qualità dell'acqua e la salute ambientale.",
    productBioStream: "Filtro BioStream",
    descBioStream: "Sistema di filtrazione ecologico che imita le zone umide naturali.",
    contactUs: "Contattaci",
    name: "Nome",
    email: "Email",
    message: "Messaggio",
    send: "Invia",
    footerText: "© 2026 EcoLink e BioStream. Tutti i diritti riservati.",
    langName: "Italiano"
  },
  pt: {
    title: "EcoLink & BioStream",
    subtitle: "Harmonia na Água e Natureza",
    navHome: "Início",
    navAbout: "Sobre Nós",
    navProducts: "Produtos",
    navContact: "Contato",
    heroTitle: "Vida da Água, Futuro da Natureza",
    heroText: "Dedicado à gestão sustentável dos recursos hídricos e à conservação ambiental. Construindo um amanhã mais verde, gota a gota.",
    learnMore: "Saiba mais",
    ourMission: "Nossa Missão",
    missionText: "Inovar e implementar soluções hídricas sustentáveis que protejam os ecossistemas e garantam água limpa para as gerações futuras.",
    productEcoLink: "Cerca EcoLink",
    descEcoLink: "Sistema de monitoramento inteligente para qualidade da água e saúde ambiental.",
    productBioStream: "Filtro BioStream",
    descBioStream: "Sistema de filtragem ecológico que imita zonas úmidas naturais.",
    contactUs: "Entre em Contato",
    name: "Nome",
    email: "Email",
    message: "Mensagem",
    send: "Enviar Mensagem",
    footerText: "© 2026 EcoLink & BioStream. Todos os direitos reservados.",
    langName: "Português"
  },
  ja: {
    title: "EcoLink & BioStream",
    subtitle: "水と自然の調和",
    navHome: "ホーム",
    navAbout: "私たちについて",
    navProducts: "製品",
    navContact: "お問い合わせ",
    heroTitle: "水の命、自然の未来",
    heroText: "水資源の持続可能な管理と環境保護に専念しています。一滴ずつ、より緑豊かな明日を築いています。",
    learnMore: "詳細を見る",
    ourMission: "私たちの使命",
    missionText: "生態系を保護し、将来の世代にきれいな水を確保する持続可能な水ソリューションを革新し、実施すること。",
    productEcoLink: "EcoLink メッシュ",
    descEcoLink: "水質と環境の健全性をモニタリングするスマートシステム。",
    productBioStream: "BioStream フィルター",
    descBioStream: "自然の湿地を模した環境に優しいろ過システム。",
    contactUs: "お問い合わせ",
    name: "お名前",
    email: "メールアドレス",
    message: "メッセージ",
    send: "送信する",
    footerText: "© 2026 EcoLink & BioStream. All rights reserved.",
    langName: "日本語"
  },
  ko: {
    title: "EcoLink & BioStream",
    subtitle: "물과 자연의 조화",
    navHome: "홈",
    navAbout: "회사 소개",
    navProducts: "제품",
    navContact: "문의하기",
    heroTitle: "물 생명, 자연의 미래",
    heroText: "수자원의 지속 가능한 관리와 환경 보존에 전념합니다. 한 방울 한 방울 더 푸른 내일을 만들어 갑니다.",
    learnMore: "더 알아보기",
    ourMission: "우리의 사명",
    missionText: "생태계를 보호하고 미래 세대에게 깨끗한 물을 보장하는 지속 가능한 물 솔루션을 혁신하고 구현하는 것.",
    productEcoLink: "EcoLink 메쉬",
    descEcoLink: "수질 및 환경 건강을 위한 스마트 모니터링 시스템.",
    productBioStream: "BioStream 필터",
    descBioStream: "자연 습지를 모방한 인친화적 여과 시스템.",
    contactUs: "문의하기",
    name: "이름",
    email: "이메일",
    message: "메시지",
    send: "보내기",
    footerText: "© 2026 EcoLink & BioStream. All rights reserved.",
    langName: "한국어"
  },
  zh: {
    title: "EcoLink & BioStream",
    subtitle: "水与自然的和谐",
    navHome: "首页",
    navAbout: "关于我们",
    navProducts: "产品",
    navContact: "联系我们",
    heroTitle: "水的生命，自然的未来",
    heroText: "致力于水资源的持续管理和环境保护。滴滴点点，共筑绿色明天。",
    learnMore: "了解更多",
    ourMission: "我们的使命",
    missionText: "创新并实施可持续的水解决方案，保护生态系统并确保后代拥有清洁的水源。",
    productEcoLink: "EcoLink 网格",
    descEcoLink: "水质和环境健康的智能监测系统。",
    productBioStream: "BioStream 过滤器",
    descBioStream: "模仿自然湿地的环保过滤系统。",
    contactUs: "联系我们",
    name: "姓名",
    email: "邮箱",
    message: "留言",
    send: "发送信息",
    footerText: "© 2026 EcoLink & BioStream. 保留所有权利。",
    langName: "中文"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const t = (key) => {
    return translations[locale][key] || key;
  };

  const getAvailableLocales = () => {
    return Object.keys(translations).map(key => ({
      code: key,
      name: translations[key].langName
    }));
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, getAvailableLocales }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
