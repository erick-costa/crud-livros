import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { FormEvent, useEffect, useState } from "react"

interface Author {
  id: number
  name: string | undefined
  email: string | undefined
}

let nextId = 0

export function CreateAuthor() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors))
  }, [authors])

  function createAuthor(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setAuthors([...authors, { id: nextId++, name, email }])
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger>
        <Button>Criar um autor</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Criar autor</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha o formulário com as informações do autor:
        </Dialog.Description>

        <form onSubmit={createAuthor}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome
              </Text>
              <TextField.Root
                name="name"
                placeholder="Digite o nome do autor"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                E-mail
              </Text>
              <TextField.Root
                name="email"
                placeholder="Digite o e-mail do autor"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
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
