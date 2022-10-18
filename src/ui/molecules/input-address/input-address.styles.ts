import styled from 'styled-components'

export const InputAddressWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: space-between;
`
