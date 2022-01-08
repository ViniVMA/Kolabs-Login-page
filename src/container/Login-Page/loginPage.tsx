import { LoginForm } from "../../components/LoginForm/loginForm"
import { BackgroundParticles } from "../../components/Particles/particles"
import * as S from "./loginPage.style"


export const LoginPage = () => {
  return(
    <S.LoginPageWrapper>
      <BackgroundParticles />
      <LoginForm />
    </S.LoginPageWrapper>
  )
}