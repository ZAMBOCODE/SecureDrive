
    // Auto-scroll logic for mobile services section
    document.addEventListener("DOMContentLoaded", () => 
      const scrollContainer = document.getElementById("services-scroll");
      if (!scrollContainer) return;

      let isHovering = false;
      let isTouching = false;
      let scrollAmount = 0.5; // pixels per frame

      function autoScroll() {
        if (window.innerWidth < 768  && !isHovering && !isTouching) {
          scrollContainer.scrollLeft += scrollAmount;
          
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
            setTimeout(() => {
              scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            }, 1000);
          }
        }
        requestAnimationFrame(autcro    }

      scrollContainer.addEventListener('mouseenter', () => isHovering = true);
      scrollContainer.addEventListener('mouseleave', () => isHovering = false);
      scrollContainer.addEventListener('touchstart', () => isTouching = true, {passive: true});
      scrollContainer.addEventListener('touchend', () => { setTimeout(() => isTouching = false, 2000); }, {passive: true});

      requestAnimationFrame(autoScroll);
    });
    // Language system
    const langLabels = { en: "EN", de: "DE", ar: "AR", ru: "RU" };
    let currentLang = localStorage.getItem("lang") || "en";

    const T = {
      en: {
        nav_services: "Services", nav_fleet: "Our Fleet", nav_contact: "Contact", nav_cta: "Initiate Contact",
        hero_tag: "Dubai · Armored · Elite", hero_title_1: "Protection", hero_title_2: "in Motion.",
        hero_desc: "Military-grade security for diplomats, executives, and high-profile individuals across the Emirates. The only provider of armored public transfer vehicles in the region.",
        hs1: "Armored VIP Transfers", hs2: "Airport Transfers", hs3: "Business Travel",
        hs4: "Event & Conference", hs5: "Individual Route Planning", hs6: "Document & Asset Transport",
        hero_btn1: "Initiate Contact", hero_btn2: "View Fleet",
        sec_title: "Strategic Capabilities", sec_sub: "Tactical & Diplomatic Protocols",
        p01: "Protocol 01", p02: "Protocol 02", p03: "Protocol 03", p04: "Protocol 04", p05: "Protocol 05", p06: "Protocol 06",
        s1t: "Armored VIP Transfers", s1d: "Secure point-to-point transit in ballistic-protected luxury sedans and SUVs, ensuring absolute sterile travel environments.",
        s2t: "High-Stakes Business Travel", s2d: "Armed escort and secure transport for corporate engagements requiring heightened risk mitigation.",
        s3t: "Diplomatic Protection", s3d: "Embassy-compliant transport matching international standards for delegations, royals, and governmental officials.",
        s4t: "Event Logistics", s4d: "Coordinated arrival and extraction strategies for high-profile public and private events, integrating counter-surveillance.",
        s5t: "Tarmac Concierge", s5d: "Private aviation terminal assistance allowing immediate, secure transition from air to heavily armored road assets.",
        s6t: "Long-term Lease", s6d: "Dedicated armored assets with professional Close Protection chauffeur details retained for extended residency.",
        fl_badge: "Level 7 / VR9 Armor Configuration",
        fl_h1: "Inconspicuous", fl_h2: "Fortresses.",
        fl_desc: "Our fleet is engineered by leading ballistic specialists in Germany and the UAE to withstand extreme threats while attracting zero attention. We pair 360-degree overlap armoring with immaculate luxury styling.",
        fl_lineup_tag: "Our Fleet", fl_lineup_title: "Armored Mercedes-Benz S-Class Fleet",
        fl_lineup_desc: "Multiple ballistic-certified vehicles with blue-light authorization, ready for immediate deployment across the Emirates.",
        fl_single_tag: "Flagship Guard", fl_single_title: "Mercedes-Benz S600 Guard", fl_single_sub: "VR9 certified · Tactical escort ready",
        fl_int: "Bespoke Interior", fl_tac: "Tactical Command",
        fl_stealth: "Stealth Ops", fl_stealth_sub: "Low Profile SUVs",
        fl_glass: "Multi-layer Defense", fl_glass_sub: "Polycarbonate Glass",
        fl_convoy: "Convoy Systems", fl_convoy_sub: "Escort Formations",
        vh_title: "The Vehicle", vh_desc: "Our armored fleet meets the highest international protection standards. Every vehicle is engineered for maximum safety without compromising on luxury or discretion.",
        vh1t: "Security Standards", vh1d: "VR9 / B7 ballistic protection. Tested and certified against military-grade threats including explosives and armor-piercing ammunition.",
        vh2t: "Comfort Features", vh2d: "Exclusive Nappa leather interior, climate-controlled rear cabin, noise-dampened passenger compartment, and executive workspace amenities.",
        vh3t: "Maintenance", vh3d: "Rigorous maintenance protocols with certified specialists. Every vehicle is inspected before and after each deployment to guarantee operational readiness.",
        vh4t: "Discretion & Technology", vh4d: "Self-sealing fuel tank, fresh-air filtration system, run-flat tires, GPS jamming countermeasures, and encrypted communication systems.",
        tm_title: "Our Team",
        tm1t: "Elite Personnel", tm1d: "All operators are former elite military and special forces with extensive background verification and security clearance.",
        tm2t: "Defensive Driving Training", tm2d: "Continuous advanced training in evasive maneuvers, threat response, and high-speed protective driving techniques.",
        tm3t: "Licensed Security Partners", tm3d: "Strategic cooperation with certified security firms across the UAE and the wider GCC region for comprehensive protection coverage.",
        ws_title: "Who We Serve",
        ws_desc: "SecureDrive is the only provider in the region offering armored vehicles for public transfer. With years of experience in this exclusive segment, we set the standard for discreet, high-security transportation.",
        ws1: "Diplomats", ws1d: "Embassy & governmental delegations",
        ws2: "Executives", ws2d: "C-suite & corporate leadership",
        ws3: "Business Travelers", ws3d: "High-profile international engagements",
        ws4: "Public Figures", ws4d: "VIPs requiring absolute discretion",
        ws_comp: "International Compliance", ws_comp_d: "All operations adhere to international security standards and UAE federal regulations for armored transport and executive protection.",
        ct_title: "Initiate Secure Contact",
        ct_name: "Name", ct_email: "Email", ct_phone: "Phone / WhatsApp", ct_msg: "Message",
        ct_pref: "Preferred Contact Method", ct_submit: "Send Secure Inquiry", ct_enc: "Encrypted and confidential.",
        ft_desc: "Armored Transportation & Executive Protection · Dubai, UAE",
        ft_nav: "Navigation", ft_ops: "Operations", ft_copy: "© 2026 SECUREDRIVE · All Rights Reserved."
      },
      de: {
        nav_services: "Leistungen", nav_fleet: "Flotte", nav_contact: "Kontakt", nav_cta: "Kontakt aufnehmen",
        hero_tag: "Dubai · Gepanzert · Elite", hero_title_1: "Schutz", hero_title_2: "in Bewegung.",
        hero_desc: "Sicherheit auf militärischem Niveau für Diplomaten, Führungskräfte und hochrangige Persönlichkeiten in den Emiraten. Der einzige Anbieter gepanzerter Transferfahrzeuge in der Region.",
        hs1: "Gepanzerte VIP-Transfers", hs2: "Flughafentransfers", hs3: "Geschäftsreisen",
        hs4: "Event & Konferenz", hs5: "Individuelle Routenplanung", hs6: "Dokumenten- & Werttransport",
        hero_btn1: "Kontakt aufnehmen", hero_btn2: "Flotte ansehen",
        sec_title: "Strategische Lösungen", sec_sub: "Taktische & diplomatische Protokolle",
        p01: "Protokoll 01", p02: "Protokoll 02", p03: "Protokoll 03", p04: "Protokoll 04", p05: "Protokoll 05", p06: "Protokoll 06",
        s1t: "Gepanzerte VIP-Transfers", s1d: "Sicherer Punkt-zu-Punkt-Transport in ballistisch geschützten Luxuslimousinen und SUVs.",
        s2t: "Geschäftsreisen", s2d: "Bewaffnete Eskorte und sicherer Transport für hochkarätige Unternehmenseinsätze.",
        s3t: "Diplomatenschutz", s3d: "Protokollkonformer Transport für internationale Delegationen und Regierungsbeamte.",
        s4t: "Event-Logistik", s4d: "Koordinierte Ankunfts- und Extraktionsstrategien für hochrangige öffentliche Veranstaltungen.",
        s5t: "Flughafen-Concierge", s5d: "VIP-Terminal-Betreuung und sofortiger sicherer Übergang vom Flug zum gepanzerten Fahrzeug.",
        s6t: "Langzeitmiete", s6d: "Dedizierte gepanzerte Fahrzeuge mit professionellen Chauffeuren für längere Aufenthalte.",
        fl_badge: "Stufe 7 / VR9 Panzerungskonfiguration",
        fl_h1: "Unauffällige", fl_h2: "Festungen.",
        fl_desc: "Unsere Flotte wird von führenden Ballistikspezialisten in Deutschland und den VAE gebaut, um extremen Bedrohungen standzuhalten — bei null Aufmerksamkeit.",
        fl_lineup_tag: "Unsere Flotte", fl_lineup_title: "Gepanzerte Mercedes-Benz S-Klasse Flotte",
        fl_lineup_desc: "Mehrere ballistisch zertifizierte Fahrzeuge mit Blaulicht-Berechtigung, sofort einsatzbereit in den Emiraten.",
        fl_single_tag: "Flaggschiff", fl_single_title: "Mercedes-Benz S600 Guard", fl_single_sub: "VR9 zertifiziert · Taktisch einsatzbereit",
        fl_int: "Exklusives Interieur", fl_tac: "Taktische Kommandozentrale",
        fl_stealth: "Stealth Ops", fl_stealth_sub: "Unauffällige SUVs",
        fl_glass: "Mehrschichtiger Schutz", fl_glass_sub: "Polycarbonatglas",
        fl_convoy: "Konvoi-Systeme", fl_convoy_sub: "Eskortenformationen",
        vh_title: "Das Fahrzeug", vh_desc: "Unsere gepanzerte Flotte erfüllt höchste internationale Schutzstandards. Jedes Fahrzeug ist für maximale Sicherheit bei vollem Luxus konstruiert.",
        vh1t: "Sicherheitsstandards", vh1d: "VR9 / B7 ballistischer Schutz. Getestet und zertifiziert gegen militärische Bedrohungen.",
        vh2t: "Komfortausstattung", vh2d: "Exklusives Nappaleder-Interieur, klimatisierter Fond, schallisolierter Fahrgastraum und Executive-Arbeitsplatz.",
        vh3t: "Wartung", vh3d: "Strenge Wartungsprotokolle mit zertifizierten Spezialisten. Jedes Fahrzeug wird vor und nach jedem Einsatz geprüft.",
        vh4t: "Diskretion & Technik", vh4d: "Selbstdichtender Tank, Frischluftfilterung, Runflat-Reifen, GPS-Schutzmaßnahmen und verschlüsselte Kommunikation.",
        tm_title: "Unser Team",
        tm1t: "Elitepersonal", tm1d: "Alle Operatoren sind ehemalige Elite-Militär- und Spezialeinheiten mit umfassender Sicherheitsüberprüfung.",
        tm2t: "Defensives Fahrtraining", tm2d: "Kontinuierliches Fortgeschrittenentraining in Ausweichmanövern und taktischer Reaktion.",
        tm3t: "Lizenzierte Sicherheitspartner", tm3d: "Strategische Kooperation mit zertifizierten Sicherheitsfirmen in der gesamten VAE und GCC-Region.",
        ws_title: "Unsere Klientel",
        ws_desc: "SecureDrive ist der einzige Anbieter in der Region mit gepanzerten Fahrzeugen für den öffentlichen Transfer. Mit jahrelanger Erfahrung setzen wir den Standard.",
        ws1: "Diplomaten", ws1d: "Botschafts- & Regierungsdelegationen",
        ws2: "Führungskräfte", ws2d: "C-Level & Unternehmensleitung",
        ws3: "Geschäftsreisende", ws3d: "Hochrangige internationale Engagements",
        ws4: "Persönlichkeiten", ws4d: "VIPs mit höchstem Diskretionsbedarf",
        ws_comp: "Internationale Compliance", ws_comp_d: "Alle Einsätze entsprechen internationalen Sicherheitsstandards und den Bundesvorschriften der VAE.",
        ct_title: "Sicheren Kontakt aufnehmen",
        ct_name: "Name", ct_email: "E-Mail", ct_phone: "Telefon / WhatsApp", ct_msg: "Nachricht",
        ct_pref: "Bevorzugte Kontaktmethode", ct_submit: "Sichere Anfrage senden", ct_enc: "Verschlüsselt und vertraulich.",
        ft_desc: "Gepanzerter Transport & Personenschutz · Dubai, VAE",
        ft_nav: "Navigation", ft_ops: "Standorte", ft_copy: "© 2026 SECUREDRIVE · Alle Rechte vorbehalten."
      },
      ar: {
        nav_services: "الخدمات", nav_fleet: "الأسطول", nav_contact: "اتصل بنا", nav_cta: "تواصل معنا",
        hero_tag: "دبي · مدرّع · نخبة", hero_title_1: "حماية", hero_title_2: "في حركة.",
        hero_desc: "أمن بمعايير عسكرية للدبلوماسيين والمسؤولين التنفيذيين والشخصيات البارزة في الإمارات. المزوّد الوحيد لمركبات النقل المدرّعة العامة في المنطقة.",
        hs1: "نقل VIP مدرّع", hs2: "نقل المطار", hs3: "سفر الأعمال",
        hs4: "فعاليات ومؤتمرات", hs5: "تخطيط مسارات فردية", hs6: "نقل الوثائق والأصول",
        hero_btn1: "تواصل معنا", hero_btn2: "عرض الأسطول",
        sec_title: "قدرات استراتيجية", sec_sub: "بروتوكولات تكتيكية ودبلوماسية",
        p01: "بروتوكول 01", p02: "بروتوكول 02", p03: "بروتوكول 03", p04: "بروتوكول 04", p05: "بروتوكول 05", p06: "بروتوكول 06",
        s1t: "نقل VIP مدرّع", s1d: "نقل آمن من نقطة إلى نقطة في سيارات سيدان ودفع رباعي فاخرة محمية بالستياً.",
        s2t: "سفر أعمال عالي المخاطر", s2d: "مرافقة مسلحة ونقل آمن للمشاركات التجارية عالية المخاطر.",
        s3t: "الحماية الدبلوماسية", s3d: "نقل متوافق مع البروتوكول للوفود الدولية والمسؤولين الحكوميين.",
        s4t: "لوجستيات الفعاليات", s4d: "استراتيجيات وصول واستخراج منسقة للفعاليات العامة رفيعة المستوى.",
        s5t: "كونسيرج المطار", s5d: "مساعدة في صالة كبار الشخصيات وانتقال آمن فوري من الجو إلى الطريق.",
        s6t: "إيجار طويل الأمد", s6d: "أصول مدرّعة مخصصة مع سائقين محترفين للإقامة الممتدة.",
        fl_badge: "تكوين الدروع المستوى 7 / VR9",
        fl_h1: "حصون", fl_h2: "غير ملفتة.",
        fl_desc: "أسطولنا مصمم من قبل أبرز متخصصي الباليستيك في ألمانيا والإمارات لمقاومة التهديدات القصوى دون لفت الانتباه.",
        fl_lineup_tag: "أسطولنا", fl_lineup_title: "أسطول مرسيدس بنز S-Class المدرّع",
        fl_lineup_desc: "مركبات متعددة معتمدة بالستياً مع ترخيص ضوء أزرق، جاهزة للنشر الفوري في الإمارات.",
        fl_single_tag: "الرائد", fl_single_title: "Mercedes-Benz S600 Guard", fl_single_sub: "معتمد VR9 · جاهز للمرافقة التكتيكية",
        fl_int: "تصميم داخلي حصري", fl_tac: "قيادة تكتيكية",
        fl_stealth: "عمليات خفية", fl_stealth_sub: "سيارات دفع رباعي منخفضة الملف",
        fl_glass: "دفاع متعدد الطبقات", fl_glass_sub: "زجاج بولي كربونات",
        fl_convoy: "أنظمة القوافل", fl_convoy_sub: "تشكيلات المرافقة",
        vh_title: "المركبة", vh_desc: "أسطولنا المدرّع يلبي أعلى معايير الحماية الدولية. كل مركبة مصممة لأقصى أمان دون المساس بالفخامة.",
        vh1t: "معايير الأمان", vh1d: "حماية بالستية VR9 / B7. مختبرة ومعتمدة ضد التهديدات العسكرية.",
        vh2t: "ميزات الراحة", vh2d: "جلد نابا حصري، مقصورة خلفية مكيفة، عزل صوتي، ومرافق عمل تنفيذية.",
        vh3t: "الصيانة", vh3d: "بروتوكولات صيانة صارمة مع متخصصين معتمدين. فحص كل مركبة قبل وبعد كل مهمة.",
        vh4t: "السرية والتقنية", vh4d: "خزان وقود ذاتي الإغلاق، نظام تنقية هواء، إطارات مقاومة للثقب، وأنظمة اتصال مشفرة.",
        tm_title: "فريقنا",
        tm1t: "أفراد النخبة", tm1d: "جميع المشغلين من القوات العسكرية والخاصة السابقة مع تحقق أمني شامل.",
        tm2t: "تدريب القيادة الدفاعية", tm2d: "تدريب متقدم مستمر في المناورات والاستجابة للتهديدات.",
        tm3t: "شركاء أمن مرخصون", tm3d: "تعاون استراتيجي مع شركات أمن معتمدة في الإمارات ومنطقة الخليج.",
        ws_title: "من نخدم",
        ws_desc: "SecureDrive هو المزوّد الوحيد في المنطقة الذي يقدم مركبات مدرّعة للنقل العام. نضع المعيار للنقل الآمن والسري.",
        ws1: "الدبلوماسيون", ws1d: "وفود السفارات والحكومات",
        ws2: "المسؤولون التنفيذيون", ws2d: "القيادة المؤسسية",
        ws3: "رجال الأعمال", ws3d: "المشاركات الدولية رفيعة المستوى",
        ws4: "الشخصيات العامة", ws4d: "كبار الشخصيات الذين يحتاجون سرية مطلقة",
        ws_comp: "الامتثال الدولي", ws_comp_d: "جميع العمليات تتوافق مع معايير الأمن الدولية ولوائح الإمارات الاتحادية.",
        ct_title: "ابدأ تواصلاً آمناً",
        ct_name: "الاسم", ct_email: "البريد الإلكتروني", ct_phone: "الهاتف / واتساب", ct_msg: "الرسالة",
        ct_pref: "طريقة الاتصال المفضلة", ct_submit: "إرسال استفسار آمن", ct_enc: "مشفر وسري.",
        ft_desc: "نقل مدرّع وحماية تنفيذية · دبي، الإمارات",
        ft_nav: "التنقل", ft_ops: "العمليات", ft_copy: "© 2026 SECUREDRIVE · جميع الحقوق محفوظة."
      },
      ru: {
        nav_services: "Услуги", nav_fleet: "Автопарк", nav_contact: "Контакт", nav_cta: "Связаться",
        hero_tag: "Дубай · Бронированный · Элита", hero_title_1: "Защита", hero_title_2: "в движении.",
        hero_desc: "Безопасность военного класса для дипломатов, руководителей и VIP-персон в Эмиратах. Единственный поставщик бронированных транспортных средств для публичного трансфера в регионе.",
        hs1: "Бронированные VIP-трансферы", hs2: "Трансферы в аэропорт", hs3: "Деловые поездки",
        hs4: "Мероприятия и конференции", hs5: "Индивидуальное планирование", hs6: "Перевозка документов",
        hero_btn1: "Связаться", hero_btn2: "Смотреть автопарк",
        sec_title: "Стратегические возможности", sec_sub: "Тактические и дипломатические протоколы",
        p01: "Протокол 01", p02: "Протокол 02", p03: "Протокол 03", p04: "Протокол 04", p05: "Протокол 05", p06: "Протокол 06",
        s1t: "Бронированные VIP-трансферы", s1d: "Безопасная перевозка в баллистически защищённых люксовых седанах и внедорожниках.",
        s2t: "Деловые поездки", s2d: "Вооружённый эскорт и безопасный транспорт для корпоративных мероприятий.",
        s3t: "Дипломатическая защита", s3d: "Транспорт, соответствующий протоколу, для международных делегаций и официальных лиц.",
        s4t: "Логистика мероприятий", s4d: "Скоординированные стратегии прибытия и эвакуации для публичных мероприятий высокого уровня.",
        s5t: "Консьерж аэропорта", s5d: "VIP-обслуживание в терминале и немедленный безопасный переход с воздуха на дорогу.",
        s6t: "Долгосрочная аренда", s6d: "Выделенные бронированные автомобили с профессиональными водителями для длительного пребывания.",
        fl_badge: "Конфигурация брони Уровень 7 / VR9",
        fl_h1: "Незаметные", fl_h2: "Крепости.",
        fl_desc: "Наш автопарк создан ведущими баллистическими специалистами Германии и ОАЭ для противостояния экстремальным угрозам при нулевом внимании.",
        fl_lineup_tag: "Наш автопарк", fl_lineup_title: "Бронированный автопарк Mercedes-Benz S-Class",
        fl_lineup_desc: "Несколько баллистически сертифицированных автомобилей с разрешением на проблесковые маячки, готовых к немедленному развёртыванию.",
        fl_single_tag: "Флагман", fl_single_title: "Mercedes-Benz S600 Guard", fl_single_sub: "Сертификат VR9 · Тактическое сопровождение",
        fl_int: "Эксклюзивный интерьер", fl_tac: "Тактическое командование",
        fl_stealth: "Скрытные операции", fl_stealth_sub: "Незаметные внедорожники",
        fl_glass: "Многослойная защита", fl_glass_sub: "Поликарбонатное стекло",
        fl_convoy: "Системы конвоев", fl_convoy_sub: "Формации эскорта",
        vh_title: "Автомобиль", vh_desc: "Наш бронированный автопарк соответствует высочайшим международным стандартам защиты без компромиссов в роскоши.",
        vh1t: "Стандарты безопасности", vh1d: "Баллистическая защита VR9 / B7. Испытано и сертифицировано против военных угроз.",
        vh2t: "Комфорт", vh2d: "Эксклюзивная кожа Nappa, климат-контроль, шумоизоляция и рабочее пространство руководителя.",
        vh3t: "Обслуживание", vh3d: "Строгие протоколы обслуживания. Каждый автомобиль проверяется до и после каждого развёртывания.",
        vh4t: "Конфиденциальность и технологии", vh4d: "Самогерметизирующийся бак, система фильтрации воздуха, шины Run-Flat и шифрованная связь.",
        tm_title: "Наша команда",
        tm1t: "Элитный персонал", tm1d: "Все операторы — бывшие элитные военные и спецназовцы с тщательной проверкой.",
        tm2t: "Оборонительное вождение", tm2d: "Непрерывное обучение уклонению, реагированию на угрозы и высокоскоростному вождению.",
        tm3t: "Лицензированные партнёры", tm3d: "Стратегическое сотрудничество с сертифицированными охранными фирмами в ОАЭ и регионе.",
        ws_title: "Кого мы обслуживаем",
        ws_desc: "SecureDrive — единственный поставщик в регионе, предлагающий бронированные автомобили для публичного трансфера. Мы устанавливаем стандарт.",
        ws1: "Дипломаты", ws1d: "Посольства и правительственные делегации",
        ws2: "Руководители", ws2d: "Топ-менеджмент и корпоративное руководство",
        ws3: "Бизнес-путешественники", ws3d: "Международные деловые мероприятия",
        ws4: "Публичные фигуры", ws4d: "VIP-персоны, требующие абсолютной конфиденциальности",
        ws_comp: "Международное соответствие", ws_comp_d: "Все операции соответствуют международным стандартам безопасности и федеральным нормам ОАЭ.",
        ct_title: "Инициировать безопасный контакт",
        ct_name: "Имя", ct_email: "Email", ct_phone: "Телефон / WhatsApp", ct_msg: "Сообщение",
        ct_pref: "Предпочтительный способ связи", ct_submit: "Отправить защищённый запрос", ct_enc: "Зашифровано и конфиденциально.",
        ft_desc: "Бронированный транспорт и защита · Дубай, ОАЭ",
        ft_nav: "Навигация", ft_ops: "Операции", ft_copy: "© 2026 SECUREDRIVE · Все права защищены."
      }
    };

    function switchLang(lang) {
      currentLang = lang;
      localStorage.setItem("lang", lang);
      document.getElementById("langBtn").textContent = langLabels[lang];
      document.querySelectorAll(".lang-opt").forEach(o => o.classList.toggle("active", o.dataset.lang === lang));
      document.getElementById("langFab").classList.remove("open");
      if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        document.documentElement.removeAttribute("dir");
      }
      document.documentElement.setAttribute("lang", lang);
      // Apply translations
      const t = T[lang];
      if (!t) return;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
      });
      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key]) el.placeholder = t[key];
      });
    }

    // Init language
    switchLang(currentLang);

    // Close lang menu on outside click
    document.addEventListener("click", function(e) {
      const fab = document.getElementById("langFab");
      if (!fab.contains(e.target)) fab.classList.remove("open");
    });

    // Reveal animation logic
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);
    setTimeout(reveal, 300);

    // Dynamic Navbar Glassmorphism
    window.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar');
      if (window.scrollY > 80) {
        navbar.classList.add('glassmorphism', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-4', 'border-white/5');
      } else {
        navbar.classList.add('bg-transparent', 'py-4', 'border-white/5');
        navbar.classList.remove('glassmorphism', 'py-3');
      }
    });
  