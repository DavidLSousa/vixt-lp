/** @jsx h */
/** @jsxFrag Fragment */
import { h, Container, Section, Typography, Button, Header, Footer } from '@vixt/core';
import { siteConfig } from '../config/site';
import { t } from '../config/i18n';

export const Home = ({ state }: { state: any }) => {
  const toggleLang = () => {
    state.lang = state.lang === 'pt-BR' ? 'en-US' : 'pt-BR';
  };

  return (
    <div className="app-wrapper">
      <Header
        brand={siteConfig.name}
        links={[
          { text: t('features', state), href: '#features-section' },
          { text: t('security', state), href: '#security-section' },
        ]}
        fixed={true}
        actions={
          <button onClick={toggleLang} className="lang-toggle">
            <span className={state.lang === 'pt-BR' ? 'active' : ''}>PT</span>
            <span className="separator">|</span>
            <span className={state.lang === 'en-US' ? 'active' : ''}>EN</span>
          </button>
        }
      />

      <Section id="hero-section" padding="lg" variant="default">
        <Container>
          <div className="hero text-center">
            <Typography tag="h1">{t('welcome', state)}</Typography>
            <p className="lead">{t('heroDescription', state)}</p>
            <Button className="btn-primary">{t('getStarted', state)}</Button>
          </div>
        </Container>
      </Section>

      <Section id="features-section" padding="md" variant="alternate">
        <Container>
          <Typography tag="h2" className="text-center mb-12">
            {t('features', state)}
          </Typography>
          <div className="grid">
            <div className="card">
              <h3>{t('featureReactivityTitle', state)}</h3>
              <p>{t('featureReactivityDesc', state)}</p>
            </div>
            <div className="card">
              <h3>{t('featureSecurityTitle', state)}</h3>
              <p>{t('featureSecurityDesc', state)}</p>
            </div>
            <div className="card">
              <h3>{t('featurePerformanceTitle', state)}</h3>
              <p>{t('featurePerformanceDesc', state)}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="security-section" padding="lg" variant="highlight">
        <Container>
          <div className="card security-card">
            <Typography tag="h2">{t('security', state)}</Typography>
            <p>{t('securityText', state)}</p>
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
              // { text: 'Discord', href: '#' }
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
          href: 'https://github.com/DavidLSousa'
        }}
      />
    </div>
  );
};
