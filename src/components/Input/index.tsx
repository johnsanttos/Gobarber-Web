import React, {InputHTMLAttributes, useEffect, useRef, useState, useCallback} from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    name: string;
    icon: React.ComponentType <IconBaseProps>
}

const Input: React.FC <InputProps>= ({name, icon: Icon, ...rest}) => {

const inputRef =useRef(null)

const [ isFocused, setIsFocused] = useState (false) 

const{fieldName, defaultValue,error,registerField} = useField(name)

// !! as duas exclamações transformam a sintaxe em valor booleano

// Sempre que criamos função dentro de um componente usamos useCallback para melhorar a perfomance da aplicação, a função fica memorizada e nao recriada sempre

const handInputBlur = useCallback (() => {
  setIsFocused(false)
},[])

useEffect(()=>{
registerField({
  name: fieldName,
  ref:inputRef.current,
  path: 'value'
})
},[fieldName,registerField])

  return (
    <Container isFocused= {isFocused} >
     { Icon && <Icon size={20}/>}
          <input
          onFocus={() => setIsFocused(true)}
          onBlur = {handInputBlur}
          defaultValue={defaultValue}
          ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input;