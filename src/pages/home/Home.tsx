import { Button, Flex } from "@radix-ui/themes"
import { Divisor } from "../../components/divisor/Divisor"
import { CreateBook } from "../../components/create-book/CreateBook"
import { CreateAuthor } from "../../components/create-author/CreateAuthor"

export function Home() {
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
        <CreateAuthor />
        <Button>Ver autores</Button>
        <Button>Pesquisar autor</Button>
        <Button>Excluir autor</Button>
      </Flex>
    </>
  )
}
