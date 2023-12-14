import './services.scss'

function Services () {
  return (
    <div
      className='services'
    >
      <div className="textContainer">
        <p>
          Frontend
          <br />Developer
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="setup.png" alt="setup image" />
          <h1>
            <b>Desarrollo </b>y
            <br />
            Diseño <b>Web.</b>
          </h1>
        </div>
      </div>
      <div className="listContainer">
        <div className="box">
          <h2>Stack tecnológico</h2>
          <div className='techContainer'>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="TypeScript" />
            </a>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              <img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="NextJs" />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="React" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" />
            </a>
            <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" />
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" alt="Sass" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" alt="TailwindCSS" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" alt="Bootstrap" />
            </a>
          </div>
        </div>

        <div className="box">
          <h2>Sobre mí</h2>
          <p>
            Me apasiona el desarrollo frontend,
            el diseño web,
            aprender nuevas tecnologías y explorar
            formas originales de resolver
            problemas. Me interesa
            trabajar en proyectos nuevos y
            desafiantes que me permitan crecer
            profesionalmente.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Services
