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
    padding: 0 ${theme.spacing.md};
    width: 100%;
  `}
`

export const AddressWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
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
