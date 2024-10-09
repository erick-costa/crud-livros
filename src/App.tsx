import "@radix-ui/themes/styles.css"
import { Container, Theme } from "@radix-ui/themes"
import { Home } from "./pages/home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

export function App() {
  return (
    <Theme appearance="dark">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Theme>
  )
}
