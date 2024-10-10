import { Button, Dialog, Flex, Select, Text, TextField } from "@radix-ui/themes"
import { FormEvent, useEffect } from "react"
import { Book } from "../../interfaces/Book"
import { Author } from "../../interfaces/Author"

interface CreateBookProps {
  isBookModalOpen: boolean
  setIsBookModalOpen: (value: boolean) => void
  createBook: (event: FormEvent<HTMLFormElement>) => void
  books: Array<Book>
  bookName: string
  setBookName: (value: string) => void
  pages: number
  setPages: (value: number) => void
  authors: Array<Author>
}

export function CreateBook({
  isBookModalOpen,
  setIsBookModalOpen,
  createBook,
  books,
  bookName,
  setBookName,
  pages,
  setPages,
  authors,
}: CreateBookProps) {
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
    console.log(books)
  }, [books])

  return (
    <Dialog.Root open={isBookModalOpen} onOpenChange={setIsBookModalOpen}>
      <Dialog.Trigger>
        <Button>Criar um livro</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Criar livro</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha o formulário com as informações do livro:
        </Dialog.Description>

        <form onSubmit={createBook}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome
              </Text>
              <TextField.Root
                name="name"
                placeholder="Digite o nome do livro"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                required
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Páginas
              </Text>
              <TextField.Root
                type="number"
                name="pages"
                placeholder="Digite a quantidade de páginas do livro"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                required
              />
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Autor
              </Text>
              <Select.Root required name="author_id">
                <Select.Trigger placeholder="Selecione um autor"></Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    {authors.map((author) => (
                      <Select.Item key={author.id} value={author.id.toString()}>
                        {author.name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Fechar
              </Button>
            </Dialog.Close>

            <Button type="submit">Criar</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}
