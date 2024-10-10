import { Button, Flex } from "@radix-ui/themes"
import { Divisor } from "../../components/divisor/Divisor"
import { CreateBook } from "../../components/create-book/CreateBook"
import { CreateAuthor } from "../../components/create-author/CreateAuthor"
import { Link } from "react-router-dom"
import { FormEvent } from "react"
import { Author } from "../../interfaces/Author"
import { Book } from "../../interfaces/Book"

interface HomeProps {
  isAuthorModalOpen: boolean
  setIsAuthorModalOpen: (value: boolean) => void
  isBookModalOpen: boolean
  setIsBookModalOpen: (value: boolean) => void
  authors: Array<Author>
  name: string
  setName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  createAuthor: (event: FormEvent<HTMLFormElement>) => void

  createBook: (event: FormEvent<HTMLFormElement>) => void
  books: Array<Book>
  bookName: string
  setBookName: (value: string) => void
  pages: number
  setPages: (value: number) => void
}

export function Home({
  isAuthorModalOpen,
  setIsAuthorModalOpen,
  isBookModalOpen,
  setIsBookModalOpen,
  authors,
  name,
  setName,
  email,
  setEmail,
  createAuthor,
  createBook,
  books,
  bookName,
  setBookName,
  pages,
  setPages,
}: HomeProps) {
  return (
    <>
      <Flex justify="center">
        <h1>Bem vindo(a) ao CRUD Livros!</h1>
      </Flex>

      <h2>Livros</h2>
      <Divisor />
      <Flex gap="4" mt="6" mb="9">
        <CreateBook
          isBookModalOpen={isBookModalOpen}
          setIsBookModalOpen={setIsBookModalOpen}
          createBook={createBook}
          books={books}
          bookName={bookName}
          setBookName={setBookName}
          pages={pages}
          setPages={setPages}
          authors={authors}
        />
        <Button>Ver livros</Button>
      </Flex>

      <h2>Autores</h2>
      <Divisor />
      <Flex gap="4" mt="6">
        <CreateAuthor
          isAuthorModalOpen={isAuthorModalOpen}
          setIsAuthorModalOpen={setIsAuthorModalOpen}
          authors={authors}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          createAuthor={createAuthor}
        />
        <Link to="/authors">
          <Button>Ver autores</Button>
        </Link>
      </Flex>
    </>
  )
}
