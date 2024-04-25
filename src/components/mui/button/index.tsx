import { Button as MuiButton, ButtonProps } from '@mui/material';
interface CustomButtonProps extends ButtonProps {
    text:string;
}
export default function CustomButton({text, className, ...rest}:CustomButtonProps){
    return (
        <MuiButton className={className} {...rest}>
            {text}
        </MuiButton>
    )
}