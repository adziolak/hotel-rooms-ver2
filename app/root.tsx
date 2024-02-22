import "@mantine/core/styles.css";
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
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const links: LinksFunction = () => [
    ...(cssBundleHref
      ? [{ rel: 'stylesheet', href: cssBundleHref }]
      : []),
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
        <MantineProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}

export default App;