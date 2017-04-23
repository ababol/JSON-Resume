import CompanyItem from './CompanyItem';

export default ({ companies }) => (
  <ul>
    {companies.map((company, i) => <CompanyItem company={company} key={i} />)}
    <style jsx>{`
      ul {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </ul>
);
