import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import styles from "./styles.css";
import type { FC } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction
} from "@remix-run/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Layout from "./components/Layout";

export const links: LinksFunction = () => [
    ...(cssBundleHref
      ? [{ rel: 'stylesheet', href: cssBundleHref }]
      : []),
    { rel: 'stylesheet', href: styles }  
  ];

export const meta: MetaFunction = () => {
    return [
        { title: "Hotel Rooms" },        
        {
          name: "description",
          content: "Simple Hotel Rooms App",
        },
      ];
}

const theme = createTheme({
    fontFamily: "Nunito, sans-serif",
    defaultGradient: {
        from: 'orange',
        to: 'red',
        deg: 45,
    }
})

const App: FC = () => {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />        
        <Meta />        
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Provider store={store}>            
              <Layout>                                
                  <Outlet />                
              </Layout>
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
              <Notifications position="top-right" zIndex={1000} />
            </Provider>
        </MantineProvider>
      </body>
    </html>
  );
}

export default App;