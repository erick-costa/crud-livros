import "@radix-ui/themes/styles.css"
import { Container, Theme } from "@radix-ui/themes"
import { Home } from "./pages/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Authors } from "./pages/authors/Authors"
import { FormEvent, useState } from "react"
import { Author } from "./interfaces/Author"
import { Book } from "./interfaces/Book"

let nextIdAuthors = 0
let nextIdBooks = 0

export function App() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [books, setBooks] = useState<Book[]>([])
  const [bookName, setBookName] = useState("")
  const [pages, setPages] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          isAuthorModalOpen={isAuthorModalOpen}
          setIsAuthorModalOpen={setIsAuthorModalOpen}
          isBookModalOpen={isBookModalOpen}
          setIsBookModalOpen={setIsBookModalOpen}
          authors={authors}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          createAuthor={createAuthor}
          createBook={createBook}
          books={books}
          bookName={bookName}
          setBookName={setBookName}
          pages={pages}
          setPages={setPages}
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

    setAuthors([...authors, { id: nextIdAuthors++, name, email }])

    setName("")
    setEmail("")
    setIsAuthorModalOpen(false)
  }

  function createBook(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const name = data.get("name")?.toString()
    const pages = data.get("pages")?.toString()
    const author_id = data.get("author_id")?.toString()
    console.log(author_id)

    if (!name || !pages || !author_id) {
      return
    }

    setBooks([
      ...books,
      {
        id: nextIdBooks++,
        name,
        pages: parseInt(pages),
        author_id,
      },
    ])

    setBookName("")
    setPages(0)
    setIsBookModalOpen(false)
  }

  return (
    <Theme appearance="dark">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Theme>
  )
}
