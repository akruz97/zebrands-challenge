import React from "react";
import { TextInput } from "react-native";
import { InputSearchProps } from "@/src/interfaces";

const InputSearch = ({ text, placeholder, onChangeText }: InputSearchProps) => {
  return (
    <TextInput
      className="border border-slate-400 p-4 rounded-md my-2 text-md placeholder:color-slate-400"
      value={text}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoComplete={"off"}
    />
  );
};

export default InputSearch;
