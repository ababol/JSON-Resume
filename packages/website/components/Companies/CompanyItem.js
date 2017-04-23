import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render () {
    const { active } = this.state;

    const {
      company: {
        name,
        img,
        color,
        link,
      },
      logoStyle,
    } = this.props;

    return (
      <li>
        <a
          href={`https://${link}`}
          onMouseOver={() => this.setState({ active: true, })}
          onMouseOut={() => this.setState({ active: false, })}
          style={{borderColor: active ? color : "rgba(25, 36, 75, 0.05)"}}
          target="_blank"
        >
          <div className="logo" style={logoStyle} />
          <div>{name}</div>
          <span style={{color: color}}>
            Visit {link}
            <i className="icon icon-external-link" />
          </span>
        </a>

        <style jsx>{`
          li {
            flex: 0 0 calc(100% / 4);
            padding: 20px;
            min-width: 250px;
            max-width: 90%;
          }
          a {
            background-color: #fff;
            border-radius: 4px;
            border: 2px solid;
            padding: 30px 0;
            text-align: center;
            display: block;
            overflow: hidden;
            cursor: pointer;
          }
          div {
            color: black;
          }
          span {
            font-size: 10px;
            opacity: 0;
            transition: opacity .2s, transform .2s;
            position: absolute;
            transform: translateX(-50%) translateY(150%);
          }
          .icon {
            position: relative;
            top: 1px;
            margin-left: 2px;
          }
          .logo {
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center center;
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
            border-radius: 4px;
            transition: transform .2s;
          }
          a:hover span {
            opacity: 1;
            transform: translateX(-50%) translateY(50%);
          }
          a:hover .logo {
            transform: scale(1.1);
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
  }
};
