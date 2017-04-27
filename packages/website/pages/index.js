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
    <Header
      about={about}
      contact={contact}
    />

    <Section
      title="I have worked for"
      innerStyle={{padding: '20px 0 60px'}}
      style={{'boxShadow': '0 6px 15px 0 rgba(0, 0, 0, 0.08)'}}
    >
      <Companies
        companies={experiences.map(company => {
          return {
            name: company.title,
            link: company.link,
            img: company.img.src,
            color: company.img.color,
            logoSize: company.img.size,
          }
        })}
      />
    </Section>

    <Footer
      about={about}
      contact={contact}
    />
  </div>
)
