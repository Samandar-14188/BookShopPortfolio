import { Input as MuiInput, InputProps } from "@mui/material";

interface CustomInputProps extends InputProps {
  type: string;
  placeholder: string;
}

export default function CustomInput({ type, placeholder, className, ...rest }: CustomInputProps) {
  return <MuiInput type={type} placeholder={placeholder} className={className} {...rest} />;
}
