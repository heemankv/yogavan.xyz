import type { AppProps } from "next/app";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import theme from "../theme";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  return (
    <SaasProvider theme={theme}>
      <Script src="https://getlaunchlist.com/js/widget.js" defer />
        <Layout
          announcementProps={announcement}
          headerProps={header}
          footerProps={footer}
        >
          <Component {...pageProps} />
        </Layout>
    </SaasProvider>
  );
}

export default MyApp;
