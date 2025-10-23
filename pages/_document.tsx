import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale, page } = this.props.__NEXT_DATA__;
    const is404Page = page === '/404';

    return (
      <Html lang={locale}>
        <Head>
          <link rel='icon' href='/icons/favicon.ico' />
          {/* Microsoft Clarity */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "qd91uwnmb4");
              `,
            }}
          />
          {/* Google AdSense - 仅在非404页面显示 */}
          {!is404Page && (
            <script 
              async 
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8321646430920092"
              crossOrigin="anonymous"
            />
          )}
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-X89PQL59JW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X89PQL59JW');
              `,
            }}
          />
          {/* Custom Analytics */}
          <script defer data-domain="blockblastjp.com" src="https://traffic.aisonggenerator.online/js/script.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
