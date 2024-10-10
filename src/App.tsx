import "@radix-ui/themes/styles.css"
import { Container, Theme } from "@radix-ui/themes"
import { Home } from "./pages/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Authors } from "./pages/authors/Authors"
import { FormEvent, useState } from "react"
import { Author } from "./interfaces/Author"

let nextId = 0

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          authors={authors}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          createAuthor={createAuthor}
        />
      ),
    },
    {
      path: "/authors",
      element: <Authors authors={authors} setAuthors={setAuthors} />,
    },
  ])

  function createAuthor(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setAuthors([...authors, { id: nextId++, name, email }])

    setName("")
    setEmail("")
    setIsModalOpen(false)
  }

  return (
    <Theme appearance="dark">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Theme>
  )
}
