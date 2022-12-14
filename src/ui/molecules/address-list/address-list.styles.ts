import styled, { css } from 'styled-components'
import { AddressListWrapperProps } from './address-list.types'

export const AddressListWrapper = styled.div<AddressListWrapperProps>`
  ${({ theme, dir }) => css`
    align-items: center;
    display: flex;
    flex-direction: ${dir ?? 'column'};
    flex-wrap: wrap;
    gap: ${theme.spacing.md};
    justify-content: center;
    max-width: ${({ theme }) => theme.breakpoints.lg};
    padding: 0 ${theme.spacing.md};
    margin: auto;
    width: 100%;
  `}
`

export const AddressWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    max-width:23.75rem;
    width: 100%;
  `}
`

export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacing.xs};
    border-radius: ${theme.spacing.sm};
    background-color: ${theme.colors.primaryDark};
  `}
`
