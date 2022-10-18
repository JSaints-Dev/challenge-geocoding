import { Button, Input } from '@ui/atoms'
import { useRef } from 'react'
import * as S from './input-address.styles'
import { InputAddressProps, InputFormElement } from './input-address.types'

export const InputAddress = (props: InputAddressProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<InputFormElement>) => {
    e.preventDefault()

    if (!inputRef.current?.value) return

    const value = e.currentTarget.elements.address.value
    if (props.getValues) props.getValues(value)

    e.currentTarget.reset()
    inputRef.current?.focus()
  }

  return (
    <S.InputAddressWrapper onSubmit={handleSubmit}>
      <Input disabled={props.calculatedDistances} id='address' name='address' inputRef={inputRef} />
      <S.ButtonsWrapper>
        {props.calculatedDistances
          ? (
            <Button bg='black' onClick={props.clearAddresses}>Nova Consulta</Button>
            )
          : (
            <>
              <Button type='submit' bg='primaryDark'>Cadastrar</Button>
              <Button onClick={props.getDistances} bg='primaryDark'>Calcular distância</Button>
            </>
            )}
      </S.ButtonsWrapper>
    </S.InputAddressWrapper>
  )
}
