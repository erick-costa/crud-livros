import {
  AlertDialog,
  Button,
  Dialog,
  Flex,
  Table,
  Text,
} from "@radix-ui/themes"
import { Divisor } from "../../components/divisor/Divisor"
import { Book } from "../../interfaces/Book"
import { useEffect, useState } from "react"
import { Author } from "../../interfaces/Author"

interface BooksProps {
  books: Array<Book>
  setBooks: (value: Array<Book>) => void
  authors: Array<Author>
}

export function Books({ books, setBooks, authors }: BooksProps) {
  const [authorName, setAuthorName] = useState("")

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  function deleteBook(id: number) {
    const newBooks = books.filter((book) => book.id !== id)

    setBooks(newBooks)
  }

  function getAuthorName(id: string) {
    const numberId = parseInt(id)

    authors.map((author) => {
      if (author.id === numberId) {
        if (!author.name) {
          return
        }

        setAuthorName(author.name)
      }
    })
  }

  return (
    <>
      <h2>Todos os livros</h2>
      <Divisor />
      <Table.Root mt="6">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Páginas</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {books.map((book) => (
            <Table.Row key={book.id}>
              <Table.RowHeaderCell>{book.name}</Table.RowHeaderCell>
              <Table.Cell>{book.pages}</Table.Cell>
              <Table.Cell>
                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button
                      onClick={() => getAuthorName(book.author_id!)}
                      size="1"
                    >
                      Mais informações
                    </Button>
                  </Dialog.Trigger>

                  <Dialog.Content maxWidth="450px">
                    <Dialog.Title>{book.name}</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      <Text weight="bold">Páginas: </Text> {book.pages}
                    </Dialog.Description>

                    <Dialog.Description size="2" mb="4">
                      <Text weight="bold">Autor: </Text> {authorName}
                    </Dialog.Description>

                    <Divisor />

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
                            Excluir livro - {book.name}
                          </AlertDialog.Title>
                          <AlertDialog.Description size="2" mb="4">
                            Você tem certeza? Este livro não vai mais estar
                            disponível após a exclusão.
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
                                onClick={() => deleteBook(book.id)}
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
