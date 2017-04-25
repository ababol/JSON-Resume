export default ({ about, contact }) => (
  <header>
    <div className="header-container">

      <h1>Hello, I'm {about.name.split(' ').shift()}</h1>
      <h2>{about.description}</h2>

      <div className="links--items">

        <a className="icon" target="_blank" href={`https://twitter.com/${contact.twitter}`}>
          <i className="icon-twitter"></i>
        </a>

        <a className="icon" target="_blank" href={contact.linkedin}>
          <i className="icon-linkedin"></i>
        </a>

        <a className="icon" target="_blank" href={`https://github.com/${contact.github}`}>
          <i className="icon-github"></i>
        </a>

      </div>

    </div>

    <i className="icon-chevron-down"></i>

    <style jsx>{`
      header {
        height: 100vh;
        width: 100%;
        background-image: linear-gradient(135deg,#3c3c3c,#243caf);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .header-container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 700px;
        margin: 5%;
        animation-name: fader;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
      }

      h1 {
        margin: 0;
        text-shadow: rgba(0, 0, 0, .6) 0px 1px 1px;
      }

      h2 {
        margin: 22px 0;
      }

      .links--items {
        margin: 5px 0 0;
      }

      .links--items a {
        padding: 0 15px;
        color: white;
        opacity: 0.7;
        font-size: 22px;
        transition: opacity .2s ease;
      }
      .links--items a:hover {
        opacity: 1;
      }
      .icon-chevron-down {
        position: absolute;
        bottom: 45px;
        left: 0;
        right: 0;
        text-align: center;
        animation-name: bounce;
        animation-iteration-count: infinite;
        animation-duration: 1.5s;
        font-size: 20px;
      }
      @keyframes bounce {
        0%   {transform: translateY(0);}
        50%  {transform: translateY(15px);}
        100% {transform: translateY(0);}
      }
      @keyframes fader {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }

    `}</style>
  </header>
);
