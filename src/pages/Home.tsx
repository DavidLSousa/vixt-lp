/** @jsx h */
/** @jsxFrag Fragment */
import { h, Container, Section, Typography, Button, Header, Footer, Icon } from '@vixt/core';
import { siteConfig } from '../config/site';
import { t } from '../config/i18n';

export const Home = ({ state }: { state: any }) => {
  const toggleLang = () => {
    state.lang = state.lang === 'pt-BR' ? 'en-US' : 'pt-BR';
  };

  return (
    <div className="app-wrapper">
      <Header
        brand={
          <div className="vixt-flex vixt-flex--align-center gap-2">
            <span style="font-weight: 800; letter-spacing: 2px; color: var(--accent)">{siteConfig.name}</span>
            <span style="font-size: 0.7rem; background: var(--accent-soft); padding: 2px 8px; border-radius: 4px; color: var(--accent)">{t('version', state)}</span>
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
              <Button className="btn-secondary" style="background:` transparent; border: 1px solid var(--border); color: white; padding: 0.875rem 2rem; border-radius: 99px; font-weight: 600; cursor: pointer;" onClick={() => window.open(siteConfig.contact.github, "_blank")}>GitHub</Button>
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
                  <p style="color: var(--fg-muted);">{t('roadmapAnim', state)}</p>
                </div>
              </div>
              <div className="roadmap-item">
                <div>
                  <Typography tag="h4" style="color: var(--accent); margin-bottom: 0.5rem;">V1.2 - Q4 2026</Typography>
                  <p style="color: var(--fg-muted);">{t('roadmapRouter', state)}</p>
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
          <div className="reveal" style="border: 1px solid var(--border-alert); padding: 3rem; border-radius: 24px; background: var(--bg-soft); position: relative; overflow: hidden;">
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
