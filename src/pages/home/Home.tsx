import { Button, Flex } from "@radix-ui/themes"
import { Divisor } from "../../components/divisor/Divisor"
import { CreateBook } from "../../components/create-book/CreateBook"
import { CreateAuthor } from "../../components/create-author/CreateAuthor"
import { Link } from "react-router-dom"
import { FormEvent } from "react"
import { Author } from "../../interfaces/Author"

interface HomeProps {
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
  authors: Array<Author>
  name: string
  setName: (value: string) => void
  email: string
  setEmail: (value: string) => void
  createAuthor: (event: FormEvent<HTMLFormElement>) => void
}

export function Home({
  isModalOpen,
  setIsModalOpen,
  authors,
  name,
  setName,
  email,
  setEmail,
  createAuthor,
}: HomeProps) {
  return (
    <>
      <Flex justify="center">
        <h1>Bem vindo(a) ao CRUD Livros!</h1>
      </Flex>

      <h2>Livros</h2>
      <Divisor />
      <Flex gap="4" mt="6" mb="9">
        <CreateBook />
        <Button>Ver livros</Button>
        <Button>Pesquisar livro</Button>
        <Button>Excluir livro</Button>
      </Flex>

      <h2>Autores</h2>
      <Divisor />
      <Flex gap="4" mt="6">
        <CreateAuthor
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
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
        <Button>Pesquisar autor</Button>
        <Button>Excluir autor</Button>
      </Flex>
    </>
  )
}
