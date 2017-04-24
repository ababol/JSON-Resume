export default ({ title, children, style, innerStyle }) => (
  <section style={style}>
    <div style={innerStyle}>
      <h3>{title}</h3>
      {children}
    </div>
    <style jsx>{`
      section {
        position: relative;
        overflow-x: hidden;
      }
      section > div {
        margin: 0 auto;
        max-width: 1030px;
        width: 100%;
        text-align: center;
      }
    `}</style>
  </section>
);
