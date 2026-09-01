export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/** Prefix a path with the locale (default locale has no prefix). */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === "/" ? "" : clean}`;
}

type Feature = { title: string; body: string };
type Step = { k: string; title: string; body: string };
type Faq = { q: string; a: string };

interface Content {
  meta: { title: string; description: string };
  nav: { modules: string; compliance: string; pricing: string; faq: string; login: string; cta: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    stats: { value: string; label: string }[];
  };
  problem: { eyebrow: string; title: string; items: Feature[] };
  how: { eyebrow: string; title: string; steps: Step[] };
  modules: { eyebrow: string; title: string; lead: string; items: Feature[] };
  compliance: { eyebrow: string; title: string; lead: string; points: string[]; disclaimer: string };
  security: { eyebrow: string; title: string; items: Feature[] };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    perSeat: string;
    plans: { name: string; price: string; unit: string; features: string[]; cta: string; featured?: boolean }[];
  };
  faq: { eyebrow: string; title: string; items: Faq[] };
  finalCta: { title: string; lead: string; cta: string; fields: { name: string; company: string; size: string; email: string; message: string }; submit: string };
  footer: { tagline: string; rights: string; nav: string; legal: string; privacy: string; terms: string };
}

export const content: Record<Lang, Content> = {
  es: {
    meta: {
      title: "Morfom — Nómina y RRHH para empresas de Chile",
      description:
        "Calcula liquidaciones conforme a la ley chilena en minutos. Nómina, asistencia, vacaciones y gestión de personas en una plataforma multi-empresa.",
    },
    nav: {
      modules: "Módulos",
      compliance: "Cumplimiento",
      pricing: "Planes",
      faq: "Preguntas",
      login: "Ingresar",
      cta: "Solicitar demo",
    },
    hero: {
      eyebrow: "HRIS + Nómina · Chile",
      title: "Cierra tu nómina en minutos,",
      titleAccent: "no en días.",
      lead: "Morfom calcula liquidaciones conforme a la normativa chilena —AFP, salud, impuesto único, topes imponibles— y ordena asistencia, vacaciones y contratos de todas tus empresas en un solo lugar.",
      ctaPrimary: "Solicitar demo",
      ctaSecondary: "Ver módulos",
      note: "Implementación acompañada · Datos aislados por empresa",
      stats: [
        { value: "AFP + salud", label: "cálculo previsional al día" },
        { value: "Multi-empresa", label: "un panel, varias razones sociales" },
        { value: "Minutos", label: "de un período a las liquidaciones" },
      ],
    },
    problem: {
      eyebrow: "El problema",
      title: "La nómina en planilla cuesta cara.",
      items: [
        {
          title: "Errores de cálculo",
          body: "Tasas de AFP, tope imponible, tramos de impuesto y asignación familiar cambian. Una celda mal copiada se paga con reprocesos y reclamos.",
        },
        {
          title: "Horas perdidas cada mes",
          body: "Consolidar asistencia, licencias, anticipos y bonos a mano convierte el cierre en una semana completa de trabajo manual.",
        },
        {
          title: "Riesgo frente a la Dirección del Trabajo",
          body: "Sin trazabilidad de quién cambió qué y cuándo, una fiscalización o un finiquito mal calculado se transforma en contingencia.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Del contrato a la liquidación en tres pasos.",
      steps: [
        { k: "01", title: "Carga tu personal", body: "Colaboradores, contratos, cargos, centros de costo y la empresa donde prestan servicios. Importas una vez y queda vivo." },
        { k: "02", title: "Configura conceptos", body: "Haberes, descuentos y novedades recurrentes con reglas de imponibilidad y tributación ya parametrizadas para Chile." },
        { k: "03", title: "Genera el período", body: "El motor calcula cada liquidación con su detalle, la revisas, la cierras y distribuyes. Todo queda auditado." },
      ],
    },
    modules: {
      eyebrow: "La plataforma",
      title: "Todo el ciclo de personas, integrado.",
      lead: "Módulos que comparten los mismos datos: lo que registra asistencia alimenta la nómina sin exportar ni volver a digitar.",
      items: [
        { title: "Nómina y liquidaciones", body: "Motor de cálculo con períodos, conceptos, novedades y detalle por línea. Liquidaciones conforme a normativa vigente." },
        { title: "Asistencia y turnos", body: "Marcas, turnos, jornadas y reportería. Las horas y ausencias llegan al cierre ya consolidadas." },
        { title: "Vacaciones y ausencias", body: "Solicitudes, saldos de feriado legal y progresivo, licencias y permisos con flujo de aprobación." },
        { title: "Contratos y colaboradores", body: "Ficha completa, anexos, cargos, áreas, divisiones y subcontratación por empresa mandante." },
        { title: "Documentos del colaborador", body: "RRHH sube contratos, anexos y certificados al colaborador, con almacenamiento y control de acceso." },
        { title: "Usuarios, roles y permisos", body: "Control de acceso por entidad y acción, con auditoría de cada consulta y cambio." },
      ],
    },
    compliance: {
      eyebrow: "Cumplimiento Chile",
      title: "Parametrizado para la normativa local.",
      lead: "No adaptas una herramienta genérica: Morfom ya trae las instituciones y tablas que usa una remuneración chilena.",
      points: [
        "Instituciones de AFP y sus tasas",
        "Isapres y Fonasa con planes y cotización",
        "Impuesto único de segunda categoría por tramos",
        "Topes imponibles y gratificación legal",
        "Asignación familiar por tramo",
        "Base para libro de remuneraciones y archivo previsional",
      ],
      disclaimer:
        "Las tablas y tasas se mantienen actualizadas según su vigencia oficial. Morfom es una herramienta de gestión y no reemplaza la asesoría laboral o contable de tu empresa.",
    },
    security: {
      eyebrow: "Seguridad",
      title: "Los datos de cada empresa, aislados.",
      items: [
        { title: "Aislamiento por empresa", body: "Cada razón social vive en su propio esquema de datos. Sin cruces entre clientes ni entre empresas de un mismo grupo." },
        { title: "Acceso con control fino", body: "Autenticación con token, roles por entidad y acción, y expiración de sesión." },
        { title: "Auditoría de accesos", body: "Registro de quién consultó o modificó cada dato sensible, con fecha y origen." },
      ],
    },
    pricing: {
      eyebrow: "Planes",
      title: "Precio por colaborador activo.",
      lead: "Sin costo de instalación oculto. Partes con lo que necesitas y creces por módulo.",
      perSeat: "por colaborador / mes",
      plans: [
        { name: "Esencial", price: "Nómina + asistencia", unit: "para operar el cierre mensual", features: ["Motor de liquidaciones", "Períodos y conceptos", "Asistencia y turnos", "Hasta 3 usuarios administradores"], cta: "Cotizar" },
        { name: "Completo", price: "Toda la plataforma", unit: "el ciclo de personas de punta a punta", features: ["Todo lo de Esencial", "Vacaciones y ausencias", "Documentos del colaborador", "Roles, permisos y auditoría", "Multi-empresa"], cta: "Solicitar demo", featured: true },
        { name: "Corporativo", price: "A medida", unit: "grupos y holdings con varias razones sociales", features: ["Todo lo de Completo", "Onboarding dedicado", "Integraciones a medida", "SLA y soporte prioritario"], cta: "Hablar con ventas" },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suelen preguntar.",
      items: [
        { q: "¿Sirve si tengo varias empresas o razones sociales?", a: "Sí. Morfom es multi-empresa: administras varias razones sociales desde un mismo panel, con datos completamente separados entre ellas." },
        { q: "¿Migran mi información actual?", a: "La implementación incluye acompañamiento para cargar colaboradores, contratos y saldos desde tus planillas o tu sistema anterior." },
        { q: "¿Las tablas previsionales están actualizadas?", a: "Mantenemos las tasas de AFP, tramos de impuesto, topes y asignación familiar según su vigencia oficial. Aun así, la revisión final de cada nómina es responsabilidad de tu equipo." },
        { q: "¿Cómo accede mi equipo?", a: "Por navegador, sin instalar nada. Defines roles y permisos por persona según lo que cada una necesita ver o editar." },
        { q: "¿Puedo probar antes de contratar?", a: "Sí. Agendamos una demo con tus casos reales y, si avanzas, un ambiente de prueba con tus datos." },
      ],
    },
    finalCta: {
      title: "Agenda una demo con tu caso real.",
      lead: "Cuéntanos cómo cierras hoy tu nómina y te mostramos el mismo proceso en Morfom.",
      cta: "Solicitar demo",
      fields: { name: "Nombre", company: "Empresa", size: "N° de colaboradores", email: "Email corporativo", message: "¿Cómo llevas la nómina hoy?" },
      submit: "Enviar solicitud",
    },
    footer: {
      tagline: "Nómina y gestión de personas para empresas de Chile.",
      rights: "Todos los derechos reservados.",
      nav: "Navegación",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
    },
  },

  en: {
    meta: {
      title: "Morfom — Payroll & HR for companies in Chile",
      description:
        "Run payroll compliant with Chilean regulations in minutes. Payroll, attendance, leave and people management in one multi-company platform.",
    },
    nav: {
      modules: "Modules",
      compliance: "Compliance",
      pricing: "Plans",
      faq: "FAQ",
      login: "Log in",
      cta: "Request a demo",
    },
    hero: {
      eyebrow: "HRIS + Payroll · Chile",
      title: "Close payroll in minutes,",
      titleAccent: "not days.",
      lead: "Morfom calculates payslips under Chilean regulations —pension, health, income tax, contribution caps— and keeps attendance, leave and contracts for all your companies in one place.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "See modules",
      note: "Guided onboarding · Data isolated per company",
      stats: [
        { value: "Pension + health", label: "statutory contributions kept current" },
        { value: "Multi-company", label: "one panel, many legal entities" },
        { value: "Minutes", label: "from a period to finished payslips" },
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Payroll on spreadsheets is expensive.",
      items: [
        { title: "Calculation errors", body: "Pension rates, contribution caps, tax brackets and family allowance change. One mis-copied cell turns into reprocessing and disputes." },
        { title: "Hours lost every month", body: "Consolidating attendance, leave, advances and bonuses by hand turns the monthly close into a full week of manual work." },
        { title: "Exposure to the Labor Directorate", body: "With no record of who changed what and when, an audit or a mis-calculated severance becomes a liability." },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From contract to payslip in three steps.",
      steps: [
        { k: "01", title: "Load your people", body: "Employees, contracts, roles, cost centers and the company they work for. Import once and keep it live." },
        { k: "02", title: "Configure concepts", body: "Earnings, deductions and recurring items with taxability rules already set up for Chile." },
        { k: "03", title: "Run the period", body: "The engine calculates every payslip with its line detail. Review it, close it, distribute it. Everything is audited." },
      ],
    },
    modules: {
      eyebrow: "The platform",
      title: "The whole people cycle, integrated.",
      lead: "Modules that share the same data: whatever attendance records feeds payroll with no exports and no re-typing.",
      items: [
        { title: "Payroll & payslips", body: "Calculation engine with periods, concepts, adjustments and line-level detail. Payslips under current regulation." },
        { title: "Attendance & shifts", body: "Clock-ins, shifts, working schedules and reports. Hours and absences reach the close already consolidated." },
        { title: "Leave & absences", body: "Requests, statutory and progressive vacation balances, sick leave and permits with an approval flow." },
        { title: "Contracts & employees", body: "Full record, annexes, roles, areas, divisions and subcontracting by client company." },
        { title: "Employee documents", body: "HR uploads contracts, annexes and certificates to each employee, with storage and access control." },
        { title: "Users, roles & permissions", body: "Access control by entity and action, with an audit trail of every query and change." },
      ],
    },
    compliance: {
      eyebrow: "Chile compliance",
      title: "Built for local regulation.",
      lead: "You are not bending a generic tool: Morfom already ships the institutions and tables a Chilean payslip uses.",
      points: [
        "Pension (AFP) institutions and their rates",
        "Private and public health with plans and contributions",
        "Second-category income tax by bracket",
        "Contribution caps and statutory profit share",
        "Family allowance by bracket",
        "Basis for the payroll ledger and pension file",
      ],
      disclaimer:
        "Tables and rates are kept current according to their official effective dates. Morfom is a management tool and does not replace your company's labor or accounting advice.",
    },
    security: {
      eyebrow: "Security",
      title: "Each company's data, isolated.",
      items: [
        { title: "Isolation per company", body: "Every legal entity lives in its own data schema. No crossover between clients or between companies in one group." },
        { title: "Fine-grained access", body: "Token authentication, roles by entity and action, and session expiry." },
        { title: "Access audit", body: "A record of who read or changed each sensitive field, with date and origin." },
      ],
    },
    pricing: {
      eyebrow: "Plans",
      title: "Priced per active employee.",
      lead: "No hidden setup fee. Start with what you need and grow module by module.",
      perSeat: "per employee / month",
      plans: [
        { name: "Essential", price: "Payroll + attendance", unit: "to run the monthly close", features: ["Payslip engine", "Periods and concepts", "Attendance and shifts", "Up to 3 admin users"], cta: "Get a quote" },
        { name: "Complete", price: "The full platform", unit: "the people cycle end to end", features: ["Everything in Essential", "Leave and absences", "Employee documents", "Roles, permissions and audit", "Multi-company"], cta: "Request a demo", featured: true },
        { name: "Corporate", price: "Custom", unit: "groups and holdings with several entities", features: ["Everything in Complete", "Dedicated onboarding", "Custom integrations", "SLA and priority support"], cta: "Talk to sales" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What people usually ask.",
      items: [
        { q: "Does it work if I have several companies or legal entities?", a: "Yes. Morfom is multi-company: you manage several legal entities from one panel, with data fully separated between them." },
        { q: "Do you migrate my current data?", a: "Onboarding includes support to load employees, contracts and balances from your spreadsheets or previous system." },
        { q: "Are the pension tables up to date?", a: "We keep AFP rates, tax brackets, caps and family allowance current per their official effective dates. The final review of each payroll run is still your team's responsibility." },
        { q: "How does my team access it?", a: "Through the browser, nothing to install. You define roles and permissions per person based on what each one needs to see or edit." },
        { q: "Can I try it before signing?", a: "Yes. We schedule a demo with your real cases and, if you move forward, a test environment with your data." },
      ],
    },
    finalCta: {
      title: "Book a demo with your real case.",
      lead: "Tell us how you close payroll today and we'll show you the same process in Morfom.",
      cta: "Request a demo",
      fields: { name: "Name", company: "Company", size: "Number of employees", email: "Work email", message: "How do you run payroll today?" },
      submit: "Send request",
    },
    footer: {
      tagline: "Payroll and people management for companies in Chile.",
      rights: "All rights reserved.",
      nav: "Navigation",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};
