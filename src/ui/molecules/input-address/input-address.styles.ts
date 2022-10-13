import styled from 'styled-components'

export const InputAddressWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlack};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: space-between;
`
