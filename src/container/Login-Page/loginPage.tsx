import { LoginForm } from "../../components/LoginForm/loginForm"
import { LoginPageText } from "../../components/LoginPageText/LoginPageText"
import { BackgroundParticles } from "../../components/Particles/particles"
import * as S from "./loginPage.style"


export const LoginPage = () => {
  return(
    <S.LoginPageWrapper>
      <BackgroundParticles />
      <LoginPageText />
      <LoginForm />
    </S.LoginPageWrapper>
  )
}