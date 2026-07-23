import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  BarChart3,
  Tags,
  Bell,
  Calendar,
  Shield,
  Sparkles,
  Check,
  ChevronDown,
  Mic,
  Zap,
  Lock,
  Users,
  Star,
  ArrowRight,
  Clock,
  Wallet,
  TrendingUp,
  PlayCircle,
} from "lucide-react";
import whatsappChat from "@/assets/whatsapp-chat.png.asset.json";
import dashboardReal from "@/assets/dashboard-real.jpg.asset.json";
import transactions from "@/assets/transactions.png.asset.json";
import report from "@/assets/report.png.asset.json";
import categories from "@/assets/categories.png.asset.json";
import insights from "@/assets/insights.png.asset.json";
import charts from "@/assets/charts.png.asset.json";
import demoLong from "@/assets/demo-long.mp4.asset.json";
import demoShort from "@/assets/demo-short.mp4.asset.json";
import demoMid from "@/assets/demo-mid.mp4.asset.json";
import logo from "@/assets/logo.png.asset.json";
import dep3 from "@/assets/depoimento3.png.asset.json";
import dep4 from "@/assets/depoimento4.png.asset.json";
import dep5 from "@/assets/depoimento5.png.asset.json";
import dep9 from "@/assets/depoimento9.png.asset.json";
import dep10 from "@/assets/depoimento10.png.asset.json";
import dep11 from "@/assets/depoimento11.png.asset.json";
import dep12 from "@/assets/depoimento12.png.asset.json";
import dep13 from "@/assets/depoimento13.png.asset.json";
import dep17 from "@/assets/depoimento17.png.asset.json";
import dep18 from "@/assets/depoimento18.png.asset.json";



const CHECKOUT_URL =
  "https://pay.hotmart.com/S105002015T?off=1pic14d0&utm_source=organic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OrganizAÍ — Seu assessor financeiro no WhatsApp" },
      {
        name: "description",
        content:
          "Organize suas finanças e sua agenda pelo WhatsApp com IA. Registre por áudio, receba lembretes e sincronize com o Google Agenda. Mais de 5.000 brasileiros já usam.",
      },
      { property: "og:title", content: "OrganizAÍ — Seu assessor financeiro no WhatsApp" },
      {
        property: "og:description",
        content:
          "Organize suas finanças e sua agenda pelo WhatsApp com IA. Registre por áudio, receba lembretes e sincronize com o Google Agenda. Mais de 5.000 brasileiros já usam.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen text-foreground">
      <TopBar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <ProductShowcase />
      <Features />
      <VideoGallery />
      <CalendarSync />
      <Testimonials />

      <Steps />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-brand-foreground shadow-lg">
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Organiz<span className="text-brand">AÍ</span>
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
          <a href="#recursos" className="hover:text-foreground">Recursos</a>
          <a href="#agenda" className="hover:text-foreground">Google Agenda</a>
          <a href="#oferta" className="hover:text-foreground">Preço</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#oferta"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
        >
          Começar agora <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> +5.000 brasileiros no controle
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            <span className="gradient-text">Seu assessor</span> financeiro,
            direto no WhatsApp.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Registre gastos por áudio, receba lembretes de contas e compromissos
            e acompanhe tudo em um painel completo. Sem planilhas. Sem apps
            complicados. Só uma conversa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#oferta"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Quero organizar minhas finanças <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Lock className="h-3.5 w-3.5 text-brand" /> Criptografia do WhatsApp</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-3.5 w-3.5 text-brand" /> Setup em 2 minutos</span>
            <span className="inline-flex items-center gap-2"><Star className="h-3.5 w-3.5 text-accent-gold" /> Nota 4.9/5</span>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand/25 blur-3xl" />
      <PhoneFrame>
        <img
          src={whatsappChat.url}
          alt="Conversa real com o OrganizAÍ no WhatsApp: lembrete de reunião e registro de receita de R$ 5.000"
          className="block h-full w-full object-cover"
          loading="eager"
        />
      </PhoneFrame>

      <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rotate-[-4deg] rounded-2xl border border-white/10 bg-[oklch(0.14_0.03_235)]/95 p-3 shadow-2xl backdrop-blur md:block">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-brand text-brand-foreground">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </div>
          <p className="text-xs font-semibold">Registrado em 1 segundo</p>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[oklch(0.10_0.02_235)] p-2 shadow-2xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-black">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="aspect-[9/19.5] w-full">{children}</div>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [

    "+5.000 usuários ativos",
    "Registro por áudio",
    "Sincroniza com Google Agenda",
    "Painel web e mobile",
    "Suporte humano no WhatsApp",
    "Cancelamento em 1 clique",
  ];
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-xs text-muted-foreground">
        {items.map((i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-brand" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Dê um oi no WhatsApp",
      body: "Crie sua conta em 2 minutos, adicione o número e mande um oi. Pronto, seu assessor tá ativo.",
    },
    {
      icon: Mic,
      title: "Registre por texto ou áudio",
      body: "‘Uber, 22 reais’, ‘Recebi 500 do freela’. Nossa IA categoriza tudo automaticamente.",
    },
    {
      icon: TrendingUp,
      title: "Veja a mágica acontecer",
      body: "Peça resumos no chat ou entre no painel para gráficos, categorias e insights.",
    },
  ];
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Como funciona"
        title="Sua vida financeira organizada em 3 passos"
        subtitle="Sem download de app novo. Sem planilha. Você já sabe usar WhatsApp — a gente cuida do resto."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-3xl font-bold text-white/20">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: MessageCircle,
      title: "Registre tudo no WhatsApp",
      body: "Texto ou áudio. A IA interpreta e categoriza automaticamente em segundos.",
      bullets: ["Registro por voz", "Categorização inteligente", "Zero fricção"],
    },
    {
      icon: BarChart3,
      title: "Painel profissional",
      body: "Gráficos de fluxo de caixa, categorias e evolução, no celular ou no computador.",
      bullets: ["Fluxo de caixa", "Relatórios prontos", "Web + mobile"],
    },
    {
      icon: Tags,
      title: "Categorias personalizadas",
      body: "Categorias padrão já vêm prontas. Você cria as suas para negócio ou família.",
      bullets: ["Ilimitadas", "Renomeáveis", "Relatórios por categoria"],
    },
    {
      icon: Bell,
      title: "Lembretes diários",
      body: "Resumo dos compromissos e contas do dia. Lembrete 30 min antes do que importa.",
      bullets: ["Contas a pagar", "Compromissos", "30 min antes"],
    },
  ];
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Recursos"
        title="Tudo o que você precisa pra tomar o controle"
        subtitle="Uma ferramenta simples de conversar, poderosa por dentro."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {items.map((f) => (
          <div key={f.title} className="glass group rounded-2xl p-6 transition hover:border-brand/40">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-brand" /> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CalendarSync() {
  return (
    <section
      id="agenda"
      className="relative mx-auto my-10 max-w-6xl overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-[oklch(0.20_0.05_235)] to-[oklch(0.22_0.08_180)] px-4 py-16 md:px-10"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
            <Calendar className="h-3.5 w-3.5" /> Novo · Integração nativa
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Sincroniza com o <span className="text-brand">Google Agenda</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pediu para o seu assessor lembrar de uma reunião? Ele cria o evento
            no seu Google Agenda automaticamente. E o inverso também: os
            compromissos da sua agenda viram lembretes no WhatsApp.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Eventos criados pelo WhatsApp aparecem no Google Agenda",
              "Compromissos do Google viram lembretes automáticos",
              "Aviso 30 minutos antes direto no seu chat",
              "Conecte em 1 clique, sem configuração técnica",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <CalendarVisual />
      </div>
    </section>
  );
}

function CalendarVisual() {
  const days = ["S", "T", "Q", "Q", "S", "S", "D"];
  const events = [
    { time: "09:00", title: "Reunião cliente", tone: "bg-brand text-brand-foreground" },
    { time: "12:30", title: "Almoço equipe", tone: "bg-accent-gold/90 text-black" },
    { time: "16:00", title: "Pagar aluguel", tone: "bg-white/10 text-foreground" },
  ];
  return (
    <div className="relative">
      <div className="glass rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-white">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold">Google Agenda</p>
              <p className="text-[11px] text-muted-foreground">Novembro 2026</p>
            </div>
          </div>
          <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold text-brand">
            Sincronizado
          </span>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground">
          {days.map((d, i) => <span key={i}>{d}</span>)}
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md text-xs leading-[1.9] ${
                i === 10 ? "bg-brand text-brand-foreground font-bold" : "bg-white/5 text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {events.map((e) => (
            <div key={e.title} className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${e.tone}`}>
              <span className="font-semibold">{e.title}</span>
              <span className="opacity-80">{e.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 w-64 rotate-3 rounded-2xl border border-white/10 bg-[oklch(0.14_0.03_235)] p-3 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-brand text-brand-foreground">
            <MessageCircle className="h-3.5 w-3.5" />
          </div>
          <p className="text-xs font-semibold">OrganizAÍ</p>
        </div>
        <p className="mt-2 rounded-xl rounded-tl-sm bg-white/10 px-3 py-2 text-xs">
          ⏰ Em 30 min: <b>Reunião cliente</b> às 09:00
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  const list = [
    { name: "Camila R.", role: "Empreendedora", body: "Nunca consegui manter uma planilha. No WhatsApp virou hábito em uma semana." },
    { name: "Rafael M.", role: "Autônomo", body: "Registro por áudio no trânsito e no fim do mês tenho tudo categorizado. Absurdo." },
    { name: "Juliana P.", role: "Mãe e CLT", body: "Os lembretes de contas salvaram meu score. Nunca mais paguei nada em atraso." },
    { name: "Diego A.", role: "Freelancer", body: "Painel lindo e o assessor entende gíria. Vale muito mais que R$67 no ano." },
    { name: "Fernanda L.", role: "Consultora", body: "Sincronizar com o Google Agenda me economiza pelo menos 3h por semana." },
    { name: "Bruno C.", role: "MEI", body: "Separei conta PF e PJ com categorias. Meu contador agradeceu." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Prova social"
        title="Quem usou, tomou o controle"
        subtitle="Mais de 5.000 brasileiros transformando a relação com o dinheiro."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {list.map((t) => (
          <figure key={t.name} className="glass rounded-2xl p-6">
            <div className="flex gap-0.5 text-accent-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm text-foreground/90">"{t.body}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-xs">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-brand/15 font-bold text-brand">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const items = [
    { n: 1, title: "Conecte-se e dê um oi", body: "Conta em 2 min. Salve nosso número, mande um oi." },
    { n: 2, title: "Registre por mensagem", body: "Texto ou áudio. A IA cuida da categorização." },
    { n: 3, title: "Acompanhe no painel", body: "Gráficos, categorias e resumos em tempo real." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Do zero ao controle"
        title="Comece hoje. Em minutos."
      />
      <div className="relative mt-12 grid gap-5 md:grid-cols-3">
        <div className="absolute left-6 right-6 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent md:block" />
        {items.map((s) => (
          <div key={s.n} className="relative glass rounded-2xl p-6">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-bold text-brand-foreground shadow-lg">
              {s.n}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Bonuses() {
  const bonuses = [
    { icon: Users, title: "Suporte no WhatsApp", body: "Seg à sex, 10h às 17h. Gente de verdade, sem robô." },
    { icon: Sparkles, title: "Planner de Organização 360°", body: "Organize outras áreas da sua vida além do dinheiro." },
    { icon: Zap, title: "Aula completa de uso", body: "Tutorial passo a passo pra aproveitar 100% do OrganizAÍ." },
    { icon: Wallet, title: "E-book Financeiro", body: "Guia prático pra montar seu orçamento sem abrir mão do lazer." },
    { icon: TrendingUp, title: "Manual da Reputação", body: "Como aumentar seu score bancário e ter acesso a crédito." },
    { icon: Users, title: "Comunidade VIP", body: "Faça parte de um grupo que tá no mesmo propósito que você." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Bônus exclusivos"
        title="Ao entrar hoje, você também leva"
        subtitle="Um combo pra você organizar não só o financeiro, mas a vida toda."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {bonuses.map((b) => (
          <div key={b.title} className="glass rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-gold/20 text-accent-gold">
              <b.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function useCountdown(hours: number) {
  const [ms, setMs] = useState(hours * 3600 * 1000);
  useEffect(() => {
    const t = setInterval(() => setMs((v) => Math.max(0, v - 1000)), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.floor(ms / 1000);
  return {
    d: String(Math.floor(s / 86400)).padStart(2, "0"),
    h: String(Math.floor((s % 86400) / 3600)).padStart(2, "0"),
    m: String(Math.floor((s % 3600) / 60)).padStart(2, "0"),
    s: String(s % 60).padStart(2, "0"),
  };
}

function Pricing() {
  const c = useCountdown(24);
  const rows = [
    ["Assessor pessoal no WhatsApp", "R$ 297"],
    ["Dashboard completo (web + mobile)", "R$ 157"],
    ["Sincronização com Google Agenda", "Incluso"],
    ["Planner de Organização 360°", "R$ 57"],
    ["E-book: guia financeiro", "R$ 37"],
    ["E-book: manual da reputação (score)", "R$ 27"],
    ["15 videoaulas de finanças", "R$ 127"],
    ["Suporte humano no WhatsApp", "Inestimável"],
    ["Comunidade VIP", "Inestimável"],
  ] as const;

  return (
    <section id="oferta" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Oferta especial"
        title="Tudo pelo preço da plataforma sozinha"
        subtitle="Sem fidelidade. Cancele a qualquer momento em 1 clique."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="glass rounded-3xl p-6 md:p-8">
          <p className="text-sm text-muted-foreground">O que está incluso:</p>
          <ul className="mt-4 divide-y divide-white/5">
            {rows.map(([label, price]) => (
              <li key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" /> {label}
                </span>
                <span className="text-muted-foreground line-through decoration-white/20">
                  {price}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
            <span className="text-muted-foreground">Valor total</span>
            <span className="font-semibold line-through text-muted-foreground">R$ 702,00</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-b from-[oklch(0.22_0.06_245)] to-[oklch(0.18_0.05_245)] p-6 md:p-8">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Oferta por tempo limitado
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold">
            Acesso completo por 1 ano
          </h3>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">De <span className="line-through">R$ 702</span> por apenas</p>
            <p className="mt-1 font-display text-5xl font-bold leading-none">
              R$ 67<span className="text-xl text-muted-foreground">/ano</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">ou 9x de R$ 8,80 no cartão</p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold"
          >
            Acesso imediato, sem fidelidade <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Pagamento seguro via Hotmart · Garantia de 7 dias
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-brand" /> Esta oferta expira em
            </p>
            <div className="mt-3 grid grid-cols-4 gap-2 text-center">
              {[
                ["Dias", c.d],
                ["Horas", c.h],
                ["Min", c.m],
                ["Seg", c.s],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg bg-white/5 px-2 py-3">
                  <p className="font-display text-2xl font-bold tabular-nums">{v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center md:flex-row md:text-left">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
          <Shield className="h-12 w-12" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold">
            Garantia incondicional de 7 dias
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Se por qualquer motivo você não gostar, devolvemos 100% do seu
            investimento. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <SectionHead
        eyebrow="Nossa missão"
        title="Nós somos o OrganizAÍ."
        subtitle="E acreditamos na sua liberdade financeira."
      />
      <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground">
        Nascemos de uma inconformidade: por que controlar as finanças precisa
        ser tão complicado? A tecnologia deve trabalhar para as pessoas — não o
        contrário. Nossa missão é democratizar a saúde financeira dos
        brasileiros, usando ferramentas que você já ama, como o WhatsApp.
      </p>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Como a Inteligência Artificial funciona?", a: "Nossa IA foi treinada pra entender o português do dia a dia. Você manda ‘gastei 50 no Uber’ e ela identifica valor, categoria e registra automaticamente." },
    { q: "Meus dados estão seguros?", a: "Sim. Além da criptografia do WhatsApp, aplicamos camadas extras de segurança e anonimização. Seus dados são seus." },
    { q: "E se eu trocar de número?", a: "Sem problemas. Nosso suporte migra sua conta e histórico para o novo número em minutos." },
    { q: "Funciona em qualquer celular?", a: "Se tem WhatsApp, funciona. O painel web abre em qualquer navegador, no celular ou computador." },
    { q: "Como funciona a sincronização com o Google Agenda?", a: "Você conecta sua conta Google em 1 clique. Eventos criados pelo WhatsApp aparecem no Google Agenda e vice-versa. Você recebe lembretes 30 min antes." },
    { q: "Posso cancelar a qualquer momento?", a: "Sim, com 1 clique. Sem fidelidade, sem burocracia. A gente conquista você pelo valor, não por contrato." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHead eyebrow="FAQ" title="Perguntas frequentes" />
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
      >
        {q}
        <ChevronDown className={`h-4 w-4 shrink-0 text-brand transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-white/5 px-5 py-4 text-sm text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-brand text-brand-foreground">
            <MessageCircle className="h-3 w-3" />
          </div>
          <span className="font-semibold text-foreground">OrganizAÍ</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <p>Seu assessor financeiro no WhatsApp · Feito no Brasil 🇧🇷</p>
      </div>
    </footer>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function ProductShowcase() {
  const shots = [
    {
      src: dashboardReal.url,
      title: "Dashboard no celular",
      body: "Saldo, receita e gasto do mês num piscar de olhos.",
    },
    {
      src: transactions.url,
      title: "Transações recentes",
      body: "Toda entrada e saída categorizada automaticamente pela IA.",
    },
    {
      src: report.url,
      title: "Relatório mensal completo",
      body: "Recebe no WhatsApp o fechamento do mês com gráfico por categoria.",
    },
  ];
  return (
    <section id="painel" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="O produto de verdade"
        title="O que você vai ver dentro do OrganizAÍ"
        subtitle="Sem mockup, sem enrolação. Estas são telas reais do app usado por milhares de brasileiros."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {shots.map((s) => (
          <div key={s.title} className="flex flex-col items-center text-center">
            <PhoneFrame>
              <img
                src={s.src}
                alt={s.title}
                loading="lazy"
                className="block h-full w-full object-cover object-top"
              />
            </PhoneFrame>
            <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <ScreenCard
          src={insights.url}
          alt="Insights automáticos do OrganizAÍ mostrando maior categoria e média diária"
          tag="Insights automáticos"
          title="A IA te avisa o que precisa de atenção"
          body="Maior categoria, gasto atípico, média diária e alertas de despesas sem receita — sem você pedir."
        />
        <ScreenCard
          src={charts.url}
          alt="Gráficos de receitas vs gastos e gastos por categoria"
          tag="Gráficos"
          title="Receitas vs gastos, dia a dia"
          body="Fluxo de caixa e pizza de categorias com a mesma clareza de um app de banco premium."
        />
        <ScreenCard
          src={categories.url}
          alt="Principais categorias com barras de progresso"
          tag="Categorias"
          title="Suas categorias organizadas"
          body="Cada categoria com seu percentual e histórico. Transporte, alimentação, viagem, o que for."
          span
        />
      </div>
    </section>
  );
}

function ScreenCard({
  src,
  alt,
  tag,
  title,
  body,
  span,
}: {
  src: string;
  alt: string;
  tag: string;
  title: string;
  body: string;
  span?: boolean;
}) {
  return (
    <div
      className={`glass overflow-hidden rounded-3xl ${span ? "md:col-span-2" : ""}`}
    >
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:items-center md:p-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
            {tag}
          </span>
          <h3 className="mt-3 font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
          <img src={src} alt={alt} loading="lazy" className="block w-full" />
        </div>
      </div>
    </div>
  );
}

function VideoGallery() {
  const clips = [
    { src: demoLong.url, title: "Registrando um gasto por áudio" },
    { src: demoMid.url, title: "Consultando o resumo do mês" },
    { src: demoShort.url, title: "Criando um lembrete" },
  ];
  return (
    <section id="em-acao" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead
        eyebrow="Veja em ação"
        title="Uma conversa. Zero fricção."
        subtitle="Gravações reais do OrganizAÍ funcionando no WhatsApp."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {clips.map((c) => (
          <div key={c.title} className="flex flex-col items-center">
            <PhoneFrame>
              <video
                src={c.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="block h-full w-full object-cover"
              />
            </PhoneFrame>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <PlayCircle className="h-4 w-4 text-brand" /> {c.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
