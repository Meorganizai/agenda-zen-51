import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const logo = "/logo.png";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — OrganizAí" },
      { name: "description", content: "Saiba como a OrganizAí coleta, usa e protege seus dados pessoais, financeiros e de integração com o Google Calendar." },
      { property: "og:title", content: "Política de Privacidade — OrganizAí" },
      { property: "og:description", content: "Saiba como a OrganizAí coleta, usa e protege seus dados pessoais, financeiros e de integração com o Google Calendar." },
      { property: "og:image", content: "https://meorganizaiapp.com.br/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://meorganizaiapp.com.br/politica-de-privacidade" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Política de Privacidade — OrganizAí" },
      { name: "twitter:description", content: "Saiba como a OrganizAí coleta, usa e protege seus dados pessoais, financeiros e de integração com o Google Calendar." },
      { name: "twitter:image", content: "https://meorganizaiapp.com.br/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://meorganizaiapp.com.br/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { id: "dados-coletados", label: "1. Quais Dados Coletamos?" },
  { id: "como-usamos", label: "2. Como Usamos Seus Dados?" },
  { id: "compartilhamento", label: "3. Compartilhamento de Dados" },
  { id: "protecao", label: "4. Como Protegemos Seus Dados?" },
  { id: "direitos", label: "5. Seus Direitos" },
  { id: "retencao", label: "6. Retenção de Dados" },
  { id: "cookies", label: "7. Cookies" },
  { id: "mudancas", label: "8. Mudanças Nesta Política" },
  { id: "lgpd", label: "9. LGPD" },
  { id: "menores", label: "10. Menores de Idade" },
  { id: "contato", label: "11. Contato" },
];

function PrivacyPage() {
  return (
    <main className="min-h-screen text-foreground">
      <TopBar />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <header className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Última atualização: 09 de agosto de 2026
          </p>
        </header>

        <nav aria-label="Índice da política" className="mb-12 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Índice
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-brand/10 hover:text-brand"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="prose prose-sm max-w-none text-foreground sm:prose-base">
          <p className="lead text-muted-foreground">
            A OrganizAÍ respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta política explica como coletamos, usamos e protegemos suas informações.
          </p>

          <Section id="dados-coletados" title="1. Quais Dados Coletamos?">
            <SubSection title="1.1 Dados de Cadastro">
              <ul>
                <li>Nome completo</li>
                <li>Número de telefone (WhatsApp)</li>
                <li>Endereço de e-mail</li>
                <li>Informações de pagamento (processadas de forma segura por nossos parceiros)</li>
              </ul>
            </SubSection>

            <SubSection title="1.2 Dados Financeiros">
              <ul>
                <li>Receitas e despesas informadas por você via WhatsApp</li>
                <li>Categorias de gastos</li>
                <li>Contas a pagar e a receber</li>
                <li>Histórico de transações financeiras</li>
              </ul>
            </SubSection>

            <SubSection title="1.3 Acesso ao Google Calendar">
              <p>Solicitamos acesso ao seu Google Calendar exclusivamente para:</p>
              <ul>
                <li><strong>CRIAR</strong> eventos e lembretes quando você solicita via WhatsApp</li>
                <li><strong>VISUALIZAR</strong> eventos existentes para confirmar que o lembrete foi criado com sucesso</li>
                <li><strong>EDITAR</strong> eventos que você criou através do OrganizAÍ</li>
                <li><strong>EXCLUIR</strong> eventos que você criou através do OrganizAÍ</li>
              </ul>

              <p className="mt-4 font-semibold">Como funciona:</p>
              <ul>
                <li>Você envia uma mensagem no WhatsApp como: "Marque uma reunião da empresa amanhã as 9 horas da manhã"</li>
                <li>Nosso sistema pede sua permissão para criar o evento no seu Google Calendar</li>
                <li>O evento é criado automaticamente no seu Calendar</li>
                <li>Você recebe uma confirmação no WhatsApp com os detalhes do evento</li>
              </ul>

              <div className="mt-4 rounded-xl border-l-4 border-brand bg-brand/5 p-4 text-sm">
                <strong>IMPORTANTE:</strong> Só criamos, editamos ou excluímos eventos quando você solicita via WhatsApp. Nunca modificamos eventos que você criou diretamente no Google Calendar. Você mantém controle total.
              </div>
            </SubSection>
          </Section>

          <Section id="como-usamos" title="2. Como Usamos Seus Dados?">
            <SubSection title="2.1 Dados Financeiros">
              <ul>
                <li>Para registrar e organizar suas finanças pessoais</li>
                <li>Gerar relatórios e gráficos sobre seus gastos</li>
                <li>Enviar resumos financeiros via WhatsApp</li>
                <li>Fornecer insights sobre seus hábitos financeiros</li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Dados do Google Calendar">
              <p className="font-semibold">O que fazemos:</p>
              <ul>
                <li>Criação de lembretes: quando você pede para criar um compromisso via WhatsApp, criamos o evento no seu Calendar</li>
                <li>Gerenciamento de eventos: você pode pedir para editar ou cancelar lembretes criados através do OrganizAÍ</li>
                <li>Confirmação visual: lemos os eventos apenas para confirmar que foram criados/editados com sucesso</li>
                <li>Sincronização: mantemos seus compromissos sincronizados entre o WhatsApp e o Google Calendar</li>
              </ul>

              <p className="mt-4 font-semibold">O que NÃO fazemos:</p>
              <ul>
                <li>Não lemos todos os eventos do seu Calendar sem motivo</li>
                <li>Não modificamos eventos que você criou fora do OrganizAÍ</li>
                <li>Não compartilhamos o conteúdo dos seus compromissos com terceiros</li>
                <li>Não usamos seus dados do Calendar para publicidade ou marketing</li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Dados de Contato">
              <ul>
                <li>Comunicação sobre atualizações do serviço</li>
                <li>Suporte técnico</li>
                <li>Envio de mensagens via WhatsApp relacionadas ao serviço</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="compartilhamento" title="3. Compartilhamento de Dados">
            <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais.</p>
            <p className="mt-2">Compartilhamos dados apenas quando:</p>
            <ul>
              <li>Exigido por lei ou ordem judicial</li>
              <li>Necessário para processar pagamentos (através de parceiros certificados)</li>
              <li>Você autoriza expressamente</li>
            </ul>

            <SubSection title="3.1 Processamento de Pagamentos">
              <p>Utilizamos a Hotmart como plataforma de pagamento. Quando você realiza uma compra:</p>
              <ul>
                <li>Seus dados de pagamento são processados diretamente pela Hotmart</li>
                <li>A OrganizAÍ não armazena dados completos de cartão de crédito</li>
                <li>Recebemos apenas informações necessárias para identificar sua assinatura (nome, e-mail, status do pagamento)</li>
                <li>A Hotmart possui sua própria política de privacidade e certificações de segurança (PCI-DSS)</li>
              </ul>
              <p className="mt-2">
                Link: <a href="https://www.hotmart.com/pt-br/legal/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline">https://www.hotmart.com/pt-br/legal/politica-de-privacidade</a>
              </p>
            </SubSection>

            <SubSection title="3.2 Integração com Google Calendar">
              <p>A integração ocorre através de APIs oficiais do Google. Seus dados são transmitidos de forma criptografada diretamente entre nosso sistema e os servidores do Google. Não armazenamos cópias permanentes dos eventos do seu Calendar em nossos servidores.</p>
            </SubSection>
          </Section>

          <Section id="protecao" title="4. Como Protegemos Seus Dados?">
            <SubSection title="4.1 Infraestrutura e Armazenamento">
              <ul>
                <li>Amazon Web Services (AWS): servidores com certificações ISO 27001, SOC 2 e conformidade com LGPD</li>
                <li>Criptografia em repouso: padrão AES-256</li>
                <li>Backups automáticos regulares</li>
                <li>Redundância: dados replicados em múltiplas zonas de disponibilidade</li>
              </ul>
            </SubSection>

            <SubSection title="4.2 Comunicação e APIs">
              <ul>
                <li>WhatsApp Business API Oficial (Meta), com criptografia de ponta a ponta</li>
                <li>HTTPS: conexão segura (SSL/TLS) com certificado válido</li>
                <li>API Oficial do Google Calendar com autenticação OAuth 2.0</li>
                <li>Transmissão criptografada em todas as comunicações entre sistemas</li>
              </ul>
            </SubSection>

            <SubSection title="4.3 Controles de Segurança">
              <ul>
                <li>Acesso restrito: apenas equipe autorizada, sob termos de confidencialidade</li>
                <li>Autenticação multifator</li>
                <li>Monitoramento contínuo de logs e atividades suspeitas</li>
                <li>Anonimização: dados financeiros processados de forma anonimizada para treinamento da IA</li>
                <li>Permissões granulares: você autoriza explicitamente cada ação no Calendar</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="direitos" title="5. Seus Direitos">
            <p>Você tem direito a:</p>
            <ul>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incorretos ou incompletos</li>
              <li>Excluir dados: solicitar exclusão permanente da conta</li>
              <li>Revogar permissões do Google Calendar a qualquer momento</li>
              <li>Portabilidade: exportar seus dados financeiros e eventos criados</li>
            </ul>

            <p className="mt-4 font-semibold">Como revogar acesso ao Google Calendar:</p>

            <div className="mt-3 rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold">Opção 1 — Pelo Google:</p>
              <ul>
                <li>Acesse: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline">https://myaccount.google.com/permissions</a></li>
                <li>Encontre "meorganizai.com.br" na lista</li>
                <li>Clique em "Remover acesso"</li>
              </ul>
            </div>

            <div className="mt-3 rounded-xl border border-border bg-surface p-4">
              <p className="font-semibold">Opção 2 — Pelo WhatsApp:</p>
              <ul>
                <li>Envie a mensagem: "Desconectar Google Calendar"</li>
                <li>Nosso assistente irá revogar o acesso imediatamente</li>
              </ul>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Observação: ao revogar, você não conseguirá mais criar lembretes no Calendar via WhatsApp, mas todos os outros recursos continuarão funcionando normalmente. Os eventos já criados permanecerão no seu Calendar.
            </p>
          </Section>

          <Section id="retencao" title="6. Retenção de Dados">
            <ul>
              <li>Durante o uso ativo: mantemos seus dados enquanto você usar o serviço</li>
              <li>Após cancelamento: dados mantidos por 30 dias e depois excluídos permanentemente</li>
              <li>Dados financeiros: mantidos por até 5 anos conforme legislação fiscal brasileira, se necessário</li>
              <li>Eventos do Calendar: não armazenamos cópias</li>
            </ul>
          </Section>

          <Section id="cookies" title="7. Cookies e Tecnologias Semelhantes">
            <p>Nosso site utiliza cookies para:</p>
            <ul>
              <li>Manter você logado na área de membros</li>
              <li>Analisar o uso do site (Google Analytics)</li>
              <li>Melhorar sua experiência</li>
            </ul>
            <p className="mt-2">Você pode desabilitar cookies nas configurações do navegador, mas isso pode afetar algumas funcionalidades.</p>
          </Section>

          <Section id="mudancas" title="8. Mudanças Nesta Política">
            <p>Podemos atualizar esta política periodicamente. Sempre que houver mudanças significativas:</p>
            <ul>
              <li>Atualizaremos a data no topo desta página</li>
              <li>Enviaremos uma notificação via WhatsApp ou e-mail</li>
            </ul>
          </Section>

          <Section id="lgpd" title="9. Lei Geral de Proteção de Dados (LGPD)">
            <p>A OrganizAÍ está em conformidade com a Lei nº 13.709/2018 (LGPD). Você pode exercer seus direitos conforme previsto na legislação brasileira.</p>
          </Section>

          <Section id="menores" title="10. Menores de Idade">
            <p>Nosso serviço é destinado a pessoas maiores de 18 anos. Não coletamos intencionalmente dados de menores de idade.</p>
          </Section>

          <Section id="contato" title="11. Contato">
            <p>Para dúvidas, solicitações ou exercer seus direitos:</p>
            <ul>
              <li>E-mail: <a href="mailto:meorganizai@gmail.com" className="text-brand underline hover:no-underline">meorganizai@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/5511914514395" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline">+55 11 91451-4395</a></li>
              <li>Site: <a href="https://meorganizaia.com" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:no-underline">https://meorganizaia.com</a></li>
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="font-display text-lg font-semibold">OrganizAÍ — Seu parceiro para uma vida financeira organizada</p>
              <p className="mt-2 text-sm text-muted-foreground">
              COPYRIGHT© 2026 — ORGANIZAI SISTEMAS INTELIGENTES LTDA — TODOS OS DIREITOS RESERVADOS
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Dúvidas? Fale conosco pelo e-mail: <a href="mailto:meorganizai@gmail.com" className="text-brand underline hover:no-underline">meorganizai@gmail.com</a>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Suporte humanizado via WhatsApp de Segunda a Sexta, das 9h às 18h (Horário de Brasília).
              </p>
            </div>
          </Section>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-brand/10 hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo OrganizAÍ"
            className="h-9 w-9 rounded-lg object-cover shadow-lg"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Organiz<span className="text-brand">AÍ</span>
          </span>
        </Link>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
        >
          Quero começar
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-border pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo OrganizAÍ" className="h-6 w-6 rounded-md object-cover" />
          <span className="font-semibold text-foreground">OrganizAÍ</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          <Link to="/" className="hover:text-brand">Início</Link>
          <span className="hidden text-border md:inline">·</span>
          <Link to="/politica-de-privacidade" className="hover:text-brand">Política de Privacidade</Link>
        </div>
        <p>Seu Organizador financeiro no WhatsApp · Feito no Brasil</p>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-border px-4 pt-6">
        <p className="text-center text-[13px] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">ORGANIZAI SISTEMAS INTELIGENTES LTDA</span>
          <br />
          CNPJ: 61.663.749/0001-03
          <br />
          Rua Monsenhor Bruno, 1620 — Aldeota, Fortaleza/CE — CEP 60.115-191
          <br />
          <br />
          Contato: meorganizai@gmail.com · Suporte via WhatsApp: +55 11 91451-4395
          <br />
          Segunda a sexta, das 9h às 18h (horário de Brasília)
          <br />
          <br />
          © 2026 ORGANIZAI SISTEMAS INTELIGENTES LTDA — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0">
      <h2 className="mb-5 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="mb-3 font-display text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}
