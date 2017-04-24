import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>❤️ Arnaud Babol</title>

          <link rel="apple-touch-icon" sizes="57x57" href="static/img/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="static/img/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="static/img/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="static/img/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="static/img/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="static/img/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="static/img/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="static/img/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="static/img/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="static/img/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="static/img/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="static/img/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/img/favicons/favicon-16x16.png" />
          <meta name="msapplication-TileImage" content="static/img/favicons/ms-icon-144x144.png" />

          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="static/css/fonts.css" />
          <style>{`
            body {
              margin: 0;
              font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            h1, h2, h4, h5 {
              font-weight: 200;
            }
            h3 {
              font-weight: 300;
            }
            h1, h3 {
              font-size: 36px;
            }
            h2 {
              font-size: 22px;
            }
            h4 {
              font-size: 20px;
            }
            h5 {
              font-size: 30px;
            }
            a {
              text-decoration: none;
            }
          `}</style>
        </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
