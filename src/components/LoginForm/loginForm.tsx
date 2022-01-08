import { Logo } from '../Logo/logo'
import * as S from './loginForm.style'
import { useForm, SubmitHandler } from 'react-hook-form';


type Inputs = {
    Username: string;
    Password: string;
  };



export const LoginForm = () => {
        const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
        const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
        console.log(errors);
    return(

    <S.FormContainer>
        <Logo />
    
        <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOGIN</h1>
            <span className="labels">E-MAIL / USERNAME</span>
            <S.Input type="email" placeholder="Username" {...register("Username", {required: true})} />
            {errors.Username&& <span className="errorMsg">USER NÃO ENCONTRADO</span>}
            <span className="labels">SENHA</span>
            <S.Input type="password" placeholder="Password" {...register("Password", {required: true})} />
            {errors.Password && <span className="errorMsg">SENHA NÃO CONFERE</span>}
            
            <S.Submit type="submit" />
        </S.Form>
       
        
        
    </S.FormContainer>
    )
}