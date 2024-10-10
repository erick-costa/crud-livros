import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"

export function CreateBook() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Criar um livro</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Criar livro</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Preencha o formulário com as informações do livro:
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nome
            </Text>
            <TextField.Root
              name="name"
              defaultValue=""
              placeholder="Digite o nome do livro"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Páginas
            </Text>
            <TextField.Root
              name="pages"
              defaultValue=""
              placeholder="Digite a quantidade de páginas do livro"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Fechar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Criar</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
