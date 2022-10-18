import styled from 'styled-components'

export const AddressBoxContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightBlack};
  border-radius: ${({ theme }) => theme.spacing.sm};
  display: flex;
  min-height: 4rem;
  justify-content: space-between;
  max-width: 23.75rem;
  overflow: hidden;
  width: 100%;
`
export const AddressBoxId = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border-color: ${({ theme }) => theme.colors.lightBlack};
  border-right: 1px solid;
  display: flex;
  justify-content: center;
  min-width: 2.5rem;
  max-width: 3.5rem;
  width: 10%;
`

export const AddressBoxContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 0 ${({ theme }) => theme.spacing.md};
`

export const AddressBoxClear = styled.div`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.lightBlack};
  border-left: 1px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 2.5rem;
  max-width: 3.5rem;
  width: 10%;
`
