import CompanyItem from './CompanyItem';
import CompanyItemEmpty from './CompanyItemEmpty';

export default ({ companies }) => (
  <ul>
    {companies.map((company, i) => <CompanyItem
      logoStyle={{
        backgroundColor: company.color,
        backgroundImage: `url(${company.img})`,
        backgroundSize: company.logoSize
      }}
      company={company}
      key={i}
    />)}
    <CompanyItemEmpty />
    <style jsx>{`
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </ul>
);
