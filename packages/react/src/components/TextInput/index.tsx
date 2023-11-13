import { ComponentProps } from "react";
import { Input, Prefix, TextxInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextxInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextxInputContainer>
  );
}

TextInput.displayName = "TextInput";
