export default ({ children }) => (
  <button>
    {children}
    <style jsx>{`
      button {
        background-color: blue;
        color: white;
      }
    `}</style>
  </button>
)
