import Noticia from "./componentes/Noticia"
import Noticias from "./componentes/Noticias"


const BoasVindas = ({nome, veterano}) => {
  return (
    <>
    {
     veterano ? <h1>Eae meu amigo {nome}</h1> : <h1>Seja bem vindo(a){nome}</h1>
    }
    </>
  )
}

const App = () => {
  return (
    <>
      {/* <BoasVindas nome="Nathan"/>
      <BoasVindas nome="junior" veterano/>
      <BoasVindas nome="Marcio"/> */}

      <Noticias>
        <Noticia
          titulo={"Titulo 1"}
          descricao={"Descrição"}
        />
        <Noticia
          titulo={"Titulo 2"}
          descricao={"Descrição"}
        />
        <Noticia
          titulo={"Titulo 3"}
          descricao={"Descrição"}
        />
        </Noticias>
    </>
  )
}

export default App;