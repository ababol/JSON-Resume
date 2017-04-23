import Section from './Section';
import Button from './Button';

export default () => (
  <footer>
    <Section>
      <h4>Wanna work with me?</h4>
      <h3>Drop me a line</h3>
      <Button>arnaud@babol.me</Button>
      <Button>Download my résumé</Button>
    </Section>
    <style jsx>{`
      footer {
        background-color: #3c3c3c;
        color: white;
        width: 100%;
      }
    `}</style>
  </footer>
)
