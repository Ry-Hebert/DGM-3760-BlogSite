import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <p>Find me in "./web/src/pages/AboutPage/AboutPage.js"</p>
      <p>
        My default route is named "about", link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
