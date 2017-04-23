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
         <style>{`
           body {
             margin: 0;
             font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
           }
           ul {
             list-style: none;
             padding: 0;
           }
           h1, h2 {
             font-weight: 200;
           }
           h3, h4 {
             font-weight: 400;
           }
           h1, h3 {
             font-size: 36px;
           }
           h2 {
             font-size: 22px;
           }
           h4 {
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
