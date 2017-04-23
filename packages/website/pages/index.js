import Head from 'next/head';
import Companies from '../components/Companies/Companies';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import {
  about,
  contact,
  experiences,
} from '../static/resume.json';

export default () => (
  <div>
    <Head>
      <title>🖐 Arnaud Babol</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/css/fonts.css" />
    </Head>

    <Header
      about={about}
      contact={contact}
    />

    <Section title="I have worked for">
      <Companies
        companies={experiences.map(company => {
          return {
            name: company.title,
            link: company.link,
            img: company.img.src,
            color: company.img.color
          }
        })}
      />
    </Section>

    <Footer />
  </div>
)
