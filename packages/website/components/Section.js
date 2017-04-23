export default ({ title, children }) => (
  <section className="l-wrap">
    <h3>{title}</h3>
    {children}
    <style jsx>{`
      section {
        margin: 0 auto;
        max-width: 1030px;
        width: 100%;
        text-align: center;
      }
    `}</style>
  </section>
);
