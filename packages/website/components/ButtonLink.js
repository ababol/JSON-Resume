export default ({ children, href }) => (
  <a href={href} target="_blank">
    {children}
    <style jsx>{`
      a {
        padding: 10px;
        border: 1px solid white;
        color: white;
        display: block;
        max-width: 90%;
        width: 200px;
        margin: 35px auto 0;
        border-radius: 4px;
        transition: background-color .2s, color .2s;
        border: 1px solid #323C6B;
        background-color: transparent;
        color: #323C6B;
      }

      a:hover {
        background-color: #323C6B;
        color: white;
      }
    `}</style>
  </a>
)
