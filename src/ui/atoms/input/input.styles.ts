import styled from 'styled-components'

export const InputElement = styled.input`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  height: 2.5rem;
  padding: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`
