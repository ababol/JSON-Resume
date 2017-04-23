export default () => (
  <li>
    <a
      href="mailto:arnaud@babol.me"
      target="_blank"
    >
      <h5>
        Be the next
      </h5>
    </a>

    <style jsx>{`
      li {
        flex: 0 0 calc(100% / 4);
        padding: 20px;
        min-width: 250px;
        max-width: 90%;
      }
      a {
        background-color: #323C6B;
        border-radius: 4px;
        border: 2px solid #323C6B;
        padding: 30px 0;
        text-align: center;
        display: block;
        overflow: hidden;
        cursor: pointer;
        height: 86px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: background .2s ease, color .2s ease;
      }
      a:hover {
        background-color: white;
        color: #323C6B;
      }

      @media (max-width: 600px) {
        li {
          min-width: 200px;
          flex: 0 0 90%;
        }
      }
    `}</style>
  </li>
);
