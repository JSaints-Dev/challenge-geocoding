import { Box } from '@ui/atoms'

export const App = ({ children }: { children: React.ReactElement }) => {
  return (
    <Box bg='primaryDark' w='100vw' minH='100vh'>
      {children}
    </Box>
  )
}
