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
      <Input id='address' name='address' inputRef={inputRef} />
      <S.ButtonsWrapper>
        <Button type='submit' bg='primaryDark'>Cadastrar</Button>
        <Button bg='primaryDark'>Calcular distância</Button>
      </S.ButtonsWrapper>
    </S.InputAddressWrapper>
  )
}
