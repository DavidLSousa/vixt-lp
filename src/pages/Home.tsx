/** @jsx h */
/** @jsxFrag Fragment */
import { h, Container, Section, Typography, Button, Header, Footer, Icon, Tabs, Badge, Code, Switch, Checkbox, Tooltip, Dropdown, Accordion, SimpleTable } from '@vixt/core';
import { siteConfig } from '../config/site';
import { t } from '../config/i18n';

export const Home = ({ state }: { state: any }) => {
  const toggleLang = () => {
    state.lang = state.lang === 'pt-BR' ? 'en-US' : 'pt-BR';
  };

  const codeTabs = [
    {
      id: 'primitives',
      label: t('compPrimitives', state),
      icon: <Icon name="alert" />,
      content: (
        <div className="vixt-grid vixt-grid--2 gap-8" style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
          <div style="min-width: 0;">
            <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('compPrimitives', state)}</Typography>
            <p style="color: var(--fg-muted); line-height: 1.8; overflow-wrap: break-word;">{t('compPrimitivesDesc', state)}</p>
          </div>
          <div style="min-width: 0;">
            <Code
              language="tsx"
              code={`<Button variant="primary">Click</Button>\n<Typography tag="h1">Title</Typography>`}
            />
          </div>
        </div>
      )
    },
    {
      id: 'forms',
      label: t('compForms', state),
      icon: <Icon name="github" />,
      content: (
        <div className="vixt-grid vixt-grid--2 gap-8" style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
          <div style="min-width: 0;">
            <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('compForms', state)}</Typography>
            <p style="color: var(--fg-muted); line-height: 1.8; overflow-wrap: break-word;">{t('compFormsDesc', state)}</p>

            <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px dashed var(--border);">
              <Typography tag="h4" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent); margin-bottom: 0.5rem;">Live Demo</Typography>
              <Switch
                label="Notifications"
                checked={state.demoSwitch ?? true}
                onChange={(val) => state.demoSwitch = val}
              />
              <Checkbox
                label="Stay signed in"
                checked={state.demoCheck ?? false}
                onChange={(val) => state.demoCheck = val}
              />
            </div>
          </div>
          <div style="min-width: 0;">
            <Code
              language="tsx"
              code={`<Switch \n  label="Notifications"\n  checked={state.enabled}\n  onChange={v => state.enabled = v}\n/>\n\n<Checkbox \n  label="Stay signed in"\n  checked={state.remem}\n  onChange={v => state.remem = v}\n/>`}
            />
          </div>
        </div>
      )
    },
    {
      id: 'feedback',
      label: t('compFeedback', state),
      icon: <Icon name="alert" />,
      content: (
        <div className="vixt-grid vixt-grid--2 gap-8" style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
          <div style="min-width: 0;">
            <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('compFeedback', state)}</Typography>
            <p style="color: var(--fg-muted); line-height: 1.8; overflow-wrap: break-word;">{t('compFeedbackDesc', state)}</p>
          </div>
          <div className="vixt-flex gap-2" style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border); align-items: center; justify-content: center; min-width: 0;">
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>
      )
    },
    {
      id: 'navigation',
      label: t('compNav', state),
      icon: <Icon name="x" />,
      content: (
        <div className="vixt-grid vixt-grid--2 gap-8" style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
          <div style="min-width: 0;">
            <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('compNav', state)}</Typography>
            <p style="color: var(--fg-muted); line-height: 1.8; overflow-wrap: break-word;">{t('compNavDesc', state)}</p>
          </div>
          <div style="min-width: 0;">
            <Code
              language="tsx"
              code={`<Tabs items={...} />\n<Breadcrumbs />`}
            />
          </div>
        </div>
      )
    },
    {
      id: 'overlays',
      label: t('compOverlays', state),
      icon: <Icon name="alert" />,
      content: (
        <div className="vixt-grid vixt-grid--2 gap-8" style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
          <div style="min-width: 0;">
            <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('compOverlays', state)}</Typography>
            <p style="color: var(--fg-muted); line-height: 1.8; overflow-wrap: break-word;">{t('compOverlaysDesc', state)}</p>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px dashed var(--border); align-items: center; justify-content: center;">
              <Tooltip content="Tooltip Top" position="top">
                <Button variant="secondary" style="padding: 0.5rem 1rem;">Hover Me</Button>
              </Tooltip>

              <Dropdown
                isOpen={state.demoDropdownOpen ?? false}
                onToggle={(val) => state.demoDropdownOpen = val}
                trigger={<Button variant="primary" style="padding: 0.5rem 1rem;">Menu</Button>}
                items={[
                  { label: 'Profile', icon: <Icon name="github" /> },
                  { label: 'Settings', icon: <Icon name="instagram" /> },
                  { divider: true },
                  { label: 'Logout', className: 'text-error' }
                ]}
              />
            </div>
          </div>
          <div style="min-width: 0;">
            <Code
              language="tsx"
              code={`<Tooltip content="Hi!" position="top">\n  <Button>Hover</Button>\n</Tooltip>\n\n<Dropdown \n  isOpen={state.isOpen}\n  onToggle={v => state.isOpen = v}\n  trigger={<Button>Menu</Button>}\n  items={[\n    { label: 'Profile', icon: <Icon name="user" /> },\n    { divider: true },\n    { label: 'Logout' }\n  ]}\n/>`}
            />
          </div>
        </div>
      ),
    },
    {
      id: "data",
      label: t("compData", state),
      icon: <Icon name="alert" />,
      content: (
        <div className="vixt-grid vixt-grid--1 gap-8">
          <div style="background: var(--bg-soft); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; border: 1px solid var(--border); overflow: hidden;">
            <Typography tag="h3" style="margin-bottom: 2rem;">
              {t("compDataTitle", state)}
            </Typography>

            <div className="vixt-grid vixt-grid--2 gap-12">
              <div>
                <Typography
                  tag="h4"
                  style="margin-bottom: 1.5rem; opacity: 0.7; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;"
                >
                  Accordion
                </Typography>
                <Accordion
                  activeId={state.demoAccordionActive ?? "1"}
                  onChange={(id) => (state.demoAccordionActive = id)}
                  items={[
                    {
                      id: "1",
                      title: "Performance Extrema",
                      content:
                        "O Vixt pesa menos de 5kb gzipped e não utiliza Virtual DOM pesado, garantindo renderizações instantâneas.",
                    },
                    {
                      id: "2",
                      title: "Segurança XSS",
                      content:
                        "Sanitização automática de todas as propriedades e conteúdos antes de tocar o DOM real.",
                    },
                    {
                      id: "3",
                      title: "TypeScript Nativo",
                      content:
                        "Desenvolvido em TS para oferecer a melhor experiência de autocompletar e segurança de tipos.",
                    },
                  ]}
                />
              </div>

              <div>
                <Typography
                  tag="h4"
                  style="margin-bottom: 1.5rem; opacity: 0.7; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;"
                >
                  SimpleTable
                </Typography>
                <SimpleTable
                  columns={[
                    { key: "name", label: "Nome", sortable: true },
                    { key: "role", label: "Cargo" },
                    {
                      key: "status",
                      label: "Status",
                      render: (val) => (
                        <Badge variant={val === "Ativo" ? "success" : "warning"}>
                          {val}
                        </Badge>
                      ),
                    },
                  ]}
                  data={[
                    { name: "David Sousa", role: "CTO", status: "Ativo" },
                    { name: "Antigravity AI", role: "Assistant", status: "Ativo" },
                    { name: "Legacy System", role: "DevOps", status: "Manutenção" },
                  ]}
                  sortKey={state.tableSortKey ?? "name"}
                  sortOrder={state.tableSortOrder ?? "asc"}
                  onSort={(key) => {
                    state.tableSortOrder =
                      state.tableSortKey === key && state.tableSortOrder === "asc"
                        ? "desc"
                        : "asc";
                    state.tableSortKey = key;
                  }}
                />
              </div>
            </div>
          </div>
          <div style="min-width: 0;">
            <Code
              language="tsx"
              code={`<Accordion \n  activeId={state.id}\n  onChange={id => state.id = id}\n  items={[...]} \n/>\n\n<SimpleTable \n  columns={[...]}\n  data={[...]}\n  sortKey={state.key}\n  onSort={key => ...}\n/>`}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="app-wrapper">
      <Header
        isMobileMenuOpen={state.mobileMenuOpen ?? false}
        onMobileMenuToggle={(val) => state.mobileMenuOpen = val}
        brand={
          <div className="vixt-flex vixt-flex--align-center gap-2">
            <span style="font-weight: 800; letter-spacing: 2px; color: var(--accent)">{siteConfig.name}</span>
            <Badge variant="primary" style="font-size: 0.6rem;">{t('version', state)}</Badge>
          </div>
        }
        links={[
          { text: t('features', state), href: '#features-section' },
          { text: t('security', state), href: '#security-section' },
          { text: 'Roadmap', href: '#roadmap-section' },
        ]}
        fixed={true}
        actions={
          <button onClick={toggleLang} className="lang-toggle">
            <span className={state.lang === 'pt-BR' ? 'active' : ''}>PT</span>
            <span className={state.lang === 'en-US' ? 'active' : ''}>EN</span>
          </button>
        }
      />

      <Section id="hero-section" padding="none">
        <div className="grid-blueprint"></div>
        <Container>
          <div className="hero reveal">
            <Typography tag="h1" className="text-gradient">
              {t('welcome', state)}
            </Typography>
            <p>{t('heroDescription', state)}</p>
            <div className="vixt-flex gap-4">
              <Button className="btn-primary">{t('getStarted', state)}</Button>
              <Button className="btn-secondary" onClick={() => window.open(siteConfig.contact.github, "_blank")}>GitHub</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="proposal-section" padding="lg" variant="alternate">
        <Container>
          <div className="vixt-grid vixt-grid--2 gap-12 vixt-flex--align-center">
            <div className="reveal">
              <Badge variant="primary" style="margin-bottom: 1rem;">Framework Thinking</Badge>
              <Typography tag="h2" style="font-size: 2.5rem; margin-bottom: 1.5rem;">{t('proposalTitle', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.8; font-size: 1.1rem;">{t('proposalText', state)}</p>
            </div>
            <div className="reveal" style="background: var(--bg-soft); padding: 2.5rem; border-radius: 24px; border: 1px solid var(--border);">
              <Typography tag="h3" style="margin-bottom: 1rem; color: var(--accent);">{t('frameworkTitle', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.7;">{t('frameworkDesc', state)}</p>
              <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                <div className="vixt-flex vixt-flex--align-center gap-2">
                   <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent);"></div>
                   <span style="font-size: 0.9rem; font-weight: 600;">Inversão de Controle</span>
                </div>
                <div className="vixt-flex vixt-flex--align-center gap-2">
                   <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent);"></div>
                   <span style="font-size: 0.9rem; font-weight: 600;">Motor de Renderização Seguro</span>
                </div>
                <div className="vixt-flex vixt-flex--align-center gap-2">
                   <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent);"></div>
                   <span style="font-size: 0.9rem; font-weight: 600;">Estado Reativo Nativo</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="features-section" padding="lg">
        <Container>
          <div className="text-center mb-16 reveal">
            <Typography tag="h2" style="font-size: 2.5rem; margin-bottom: 1rem;">{t('features', state)}</Typography>
            <p style="color: var(--fg-muted);">{t('pillarOrgDesc', state)}</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card bento-card--lg reveal" style="animation-delay: 0.1s">
              <div className="bento-card__icon">
                <Icon name="github" />
              </div>
              <Typography tag="h3" style="margin-bottom: 1rem; font-size: 1.5rem;">{t('pillarOrgTitle', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.8;">{t('pillarOrgDesc', state)}</p>
            </div>

            <div className="bento-card bento-card--sm reveal" style="animation-delay: 0.2s; background: linear-gradient(to bottom right, var(--accent-soft), transparent);">
              <div className="bento-card__icon">
                <Icon name="discord" />
              </div>
              <Typography tag="h3" style="margin-bottom: 1rem; font-size: 1.5rem;">{t('pillarI18nTitle', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.8;">{t('pillarI18nDesc', state)}</p>
            </div>

            <div className="bento-card bento-card--md reveal" style="animation-delay: 0.3s">
              <div className="bento-card__icon">
                <Icon name="x" />
              </div>
              <Typography tag="h3" style="margin-bottom: 1rem; font-size: 1.5rem;">{t('pillarCustomTitle', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.8;">{t('pillarCustomDesc', state)}</p>
            </div>

            <div className="bento-card bento-card--md reveal" style="animation-delay: 0.4s">
              <div className="bento-card__icon">
                <Icon name="github" />
              </div>
              <Typography tag="h3" style="margin-bottom: 1rem; font-size: 1.5rem;">{t('security', state)}</Typography>
              <p style="color: var(--fg-muted); line-height: 1.8;">{t('securityText', state)}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="quick-start" padding="lg">
        <Container>
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" style="margin-bottom: 1rem;">{t('compTitle', state)}</Badge>
            <Typography tag="h2" style="font-size: 2.5rem; margin-bottom: 1rem;">{t('compTitle', state)}</Typography>
            <p style="color: var(--fg-muted);">{t('compDesc', state)}</p>
          </div>

          <div className="reveal">
            <Tabs
              items={codeTabs}
              activeTab={state.activeCodeTab || 'primitives'}
              onChange={(id) => state.activeCodeTab = id}
            />
          </div>
        </Container>
      </Section>

      <Section id="roadmap-section" padding="lg" variant="alternate">
        <Container>
          <div className="vixt-grid vixt-grid--2 reveal">
            <div>
              <Typography tag="h2" style="font-size: 3rem; line-height: 1; margin-bottom: 2rem;">
                {t('roadmapTitle', state)}
              </Typography>
              <p style="color: var(--fg-muted); font-size: 1.1rem; margin-bottom: 2rem;">
                Estamos construindo o framework de Vanilla TS mais robusto do ecossistema.
              </p>
            </div>

            <div className="roadmap">
              <div className="roadmap-item">
                <div>
                  <Typography tag="h4" style="color: var(--accent); margin-bottom: 0.5rem;">V1.1 - Q3 2026</Typography>
                  <p style="color: var(--fg-muted);">{t('roadmapRouter', state)}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div>
                  <Typography tag="h4" style="color: var(--accent); margin-bottom: 0.5rem;">V1.2 - Q4 2026</Typography>
                  <p style="color: var(--fg-muted);">{t('roadmapCLI', state)}</p>
                </div>
              </div>
              <div className="roadmap-item roadmap-item--future">
                <div>
                  <Typography tag="h4" style="opacity: 0.5; margin-bottom: 0.5rem;">V2.0 - 2027</Typography>
                  <p style="color: var(--fg-muted);">{t('roadmapSSR', state)}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="notice-section" padding="lg">
        <Container>
          <div className="reveal" style="border: 1px solid var(--border-alert); padding: clamp(1rem, 5vw, 3rem); border-radius: 24px; background: var(--bg-soft); position: relative; overflow: hidden;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 1.5rem;">
              <div style="color: var(--border-alert); background: rgba(230, 246, 54, 0.1); padding: 10px; border-radius: 12px; display: flex;">
                <Icon name="alert" />
              </div>
              <Typography tag="h2" style="font-size: 1.5rem; margin: 0;">{t('noticeTitle', state)}</Typography>
            </div>

            <div className="vixt-grid vixt-grid--2 gap-8">
              <div>
                <Typography tag="h3" style="color: var(--accent); margin-bottom: 1rem;">{t('noticeSubtitle', state)}</Typography>
                <p style="color: var(--fg-muted); line-height: 1.8;">{t('noticeText', state)}</p>
              </div>
              <div>
                <Typography tag="h3" style="color: var(--secondary); margin-bottom: 0.5rem; font-size: 1.1rem;">{t('securityNoticeTitle', state)}</Typography>
                <p style="color: var(--fg-muted); line-height: 1.8; font-size: 0.95rem;">{t('securityNoticeText', state)}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer
        brandText={t('footerBrand', state)}
        bottomText={`© ${new Date().getFullYear()} Vixt Framework. ${siteConfig.contact.email}`}
        columns={[
          {
            title: t('footerDocs', state),
            links: [
              { text: t('gettingStarted', state), href: '#' },
              { text: t('components', state), href: '#' }
            ]
          },
          {
            title: t('footerCommunity', state),
            links: [
              { text: 'GitHub', href: siteConfig.contact.github },
              // { text: 'X (Twitter)', href: '#' }
            ]
          }
        ]}
        socialLinks={[
          { icon: 'github', href: siteConfig.contact.github },
          // { icon: 'x', href: '#' },
          // { icon: 'discord', href: '#' }
        ]}
        developer={{
          name: 'David Sousa',
          href: siteConfig.contact.github
        }}
      />
    </div>
  );
};
