import '../styles/app.less';
import '../styles/app.scss';
import App, { AppProps, AppContext as NextAppContext } from 'next/app';
import { initializeApollo } from '../lib/apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import cookie from 'cookie';
import { AppContext } from '../lib/context';
import { ClientWrapper } from '../lib/client-wrapper';
// @ts-ignore
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import mobile from 'is-mobile';

interface Props extends AppProps {
  userLoggedIn: boolean;
}

export function getApp(Layout: React.FC, PUBLIC_ROUTES: string[]) {
  function MyApp({ Component, pageProps, userLoggedIn }: Props) {
    const apolloClient = initializeApollo();

    return (
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <AppContext loggedIn={userLoggedIn}>
            <ClientWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ClientWrapper>
          </AppContext>
        </ApolloProvider>
      </ThemeProvider>
    );
  }

  MyApp.getInitialProps = async (appContext: NextAppContext) => {
    const request = appContext.ctx.req;
    const isMobile = mobile({ ua: request });
    const appProps = await App.getInitialProps(appContext);

    // Disable mobile access
    if (
      isMobile &&
      appContext.ctx.res &&
      appContext.ctx.res.writeHead &&
      appContext.router.pathname !== '/unsupported-mobile'
    ) {
      appContext.ctx.res.writeHead(302, { Location: '/unsupported-mobile' });
      appContext.ctx.res.end();
      return appProps;
    }

    const redirectToLoginPage = () => {
      if (appContext.ctx.res && appContext.ctx.res.writeHead) {
        appContext.ctx.res.writeHead(302, { Location: '/login' });
        appContext.ctx.res.end();
      }

      return appProps;
    };
    let loggedIn = false;

    if (request && !isMobile) {
      const cookies = cookie.parse(request.headers.cookie || '');
      loggedIn = Boolean(cookies['access_token']);

      if (!loggedIn && !PUBLIC_ROUTES.includes(appContext.router.pathname)) {
        return redirectToLoginPage();
      }
    }

    return { ...appProps, userLoggedIn: loggedIn };
  };

  return MyApp;
}
