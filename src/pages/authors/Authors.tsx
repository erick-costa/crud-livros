import { AlertDialog, Button, Dialog, Flex, Table } from "@radix-ui/themes"
import { Divisor } from "../../components/divisor/Divisor"
import { Author } from "../../interfaces/Author"
import { useEffect } from "react"
import { Book } from "../../interfaces/Book"

interface AuthorsProps {
  authors: Array<Author>
  setAuthors: (value: Array<Author>) => void
  books: Array<Book>
  setBooks: (value: Array<Book>) => void
}

export function Authors({
  authors,
  setAuthors,
  books,
  setBooks,
}: AuthorsProps) {
  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors))
  }, [authors])

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  function deleteAuthor(id: number) {
    const stringId = id.toString()
    const newAuthors = authors.filter((author) => author.id !== id)

    const newBooks = books.filter((book) => book.author_id !== stringId)

    setBooks(newBooks)

    setAuthors(newAuthors)
  }

  return (
    <>
      <h2>Todos os autores</h2>
      <Divisor />
      <Table.Root mt="6">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {authors.map((author) => (
            <Table.Row key={author.id}>
              <Table.RowHeaderCell>{author.name}</Table.RowHeaderCell>
              <Table.Cell>{author.email}</Table.Cell>
              <Table.Cell>
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="1">Mais informações</Button>
                  </Dialog.Trigger>

                  <Dialog.Content maxWidth="450px">
                    <Dialog.Title>{author.name}</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      E-mail: {author.email}
                    </Dialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>

                      <AlertDialog.Root>
                        <AlertDialog.Trigger>
                          <Button color="red">Excluir</Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="450px">
                          <AlertDialog.Title>
                            Excluir autor - {author.name}
                          </AlertDialog.Title>
                          <AlertDialog.Description size="2" mb="4">
                            Você tem certeza? Este autor não vai mais estar
                            disponível após a exclusão e todos os livros deste
                            autor serão excluídos.
                          </AlertDialog.Description>

                          <Divisor />

                          <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                              <Button variant="soft" color="gray">
                                Cancel
                              </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                              <Button
                                variant="solid"
                                color="red"
                                onClick={() => deleteAuthor(author.id)}
                              >
                                Excluir
                              </Button>
                            </AlertDialog.Action>
                          </Flex>
                        </AlertDialog.Content>
                      </AlertDialog.Root>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}
