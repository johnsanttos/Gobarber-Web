import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { Container } from "./styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  const inputRef = useRef<HTMLInputElement>(null)
  //inputRef nos da acesso direto ao input

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)


  // Sempre que criamos função dentro de um componente usamos useCallback para melhorar a perfomance da aplicação, a função fica memorizada e nao recriada sempre

  const handleInputsFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handInputBlur = useCallback(() => {
    setIsFocused(false);

    // if (inputRef.current?.value) {
    //   setIsFilled(true)
    // } else {
    //   setIsFilled(false)
    // }

    // !! as duas exclamações transformam a sintaxe em valor booleano
    //Se houver um valor dentro de input current setIsFilled(true) Senão setIsFilled(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused} >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputsFocus}
        onBlur={handInputBlur}
        defaultValue={defaultValue}
        ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input;