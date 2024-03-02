import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HelloPage = () => {
  return (
    <>
      <Metadata title="Hello" description="Hello page" />

      <h1>HelloPage</h1>
      <p>
        Find me in <code>./web/src/pages/HelloPage/HelloPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hello</code>, link to me with `
        <Link to={routes.hello()}>Hello</Link>`
      </p>
    </>
  )
}

export default HelloPage
