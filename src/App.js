import React, {useState} from 'react'
import './App.css';

export default function Home(){
  const [Cafezinhos, setCafezinhos] = useState([
    {
      nome: "Café com leite",
      imageUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/cafecomleite.gif",
      descricao: "Trata-se do café filtrado com leite aquecido ou fervido. Também pode apresentar-se como café expresso com leite vaporizado e uma fina camada de espuma de leite.",
      videoUrl: "https://www.youtube.com/embed/4nzvKimcUBY" 
    },
    {
      nome: "Mocha",
      imageUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/mocha.gif",
      descricao: "Drink que conta com uma calda de chocolate, leite vaporizado, espuma de leite e uma dose de expresso. A mistura pode ser tri-fásica ou uma mistura de café com a calda de chocolate com a crema do leite por cima. Pode também ser conhecido pelo nome de Mocaccino, termo utilizado e criado por uma rede de cafeterias internacional.",
      videoUrl: "https://www.youtube.com/embed/LO511bjeyhQ"
    },
    {
      nome:"Cappuccino",
      imageUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/capuccinno.gif",
      descricao: "O verdadeiro cappuccino apresenta 1/3 de expresso, 1/3 de leite vaporizado, 1/3 de espuma de leite na xícara de 150 a 180 ml. A espuma do cappuccino deve ser densa e cremosa, com temperatura de no máximo 60º para se tomar em goles. No Brasil, há o hábito de acrescentar canela ou chocolate.",
      videoUrl: "https://www.youtube.com/embed/kvImYVSbxVY"
    },
    {
      nome: "Cappuccino Italiano",
      imageUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/capuccinno-italiano.gif",
      descricao: "Compreende em: 1/3 de expresso; 1/3 de leite vaporizado e 1/3 de espuma de leite na xícara de 150 a 180 ml.",
      videoUrl: "https://www.youtube.com/embed/E02Eiz78iNc"
    }

  ]);
  const [nomeCafezinho, setNomeCafezinho] = useState("");
  const [imageUrlCafezinho, setimageUrlCafezinho] = useState("");
  const [descricaoCafezinho, setdescricaoCafezinho] = useState("");
  const [videoUrlCafezinho, setvideoUrlCafezinho] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setCafezinhos([
      ...Cafezinhos,
      {
        nome: nomeCafezinho,
        imageUrl: imageUrlCafezinho,
        descricao: descricaoCafezinho,
        videoUrl: videoUrlCafezinho,

      },
    ]);

    setNomeCafezinho("");
    setimageUrlCafezinho("");
    setdescricaoCafezinho("");
    setvideoUrlCafezinho("");
  };

  const deletar  = (index)=>{
    setCafezinhos(Cafezinhos.filter((f, i)=> i != index));
  };

  
  const [showForm, setshowForm] = useState(false);
  const toggle = () => {
      setshowForm(!showForm);
  };

  return (
    <div className="container">
      <main className="main">
        <nav>
          <img src= {"./cafezinho.png"} className="App-logo" alt="logo" />
          <h1>Cafezinhos que amamos...</h1>
          <img src= {"./cafezinho.png"} className="App-logo" alt="logo" />
          <p className="textoTopo">
          Toma um café, que o mundo acabou faz tempo. O amanhecer perfeito consiste em amor em abundância e café na medida certa. A necessidade básica do coração humano durante uma grande crise é uma boa xícara de café quente. Se for pra desistir, desista do café fraco!
          </p>
        </nav>
        
        
        <h2 class="cadastro">Vamos cadastrar um novo cafézinho favorito?</h2>
        <button class="botao" type="button" onClick={toggle}>
          {showForm ? 'Finalizar' : 'Cadastrar'}
        </button> 
        {showForm && ( 
          <form onSubmit={onSubmit} class="formulario">
            <label>Nome</label>
            <input class="inputNome" placeholder="Nome" value={nomeCafezinho} onChange={(e)=>{setNomeCafezinho(e.target.value);}}/>
            <p/>
            <label>Link da Imagem</label>
            <input class="inputUrl" placeholder="Url da imagem" value={imageUrlCafezinho} onChange={(e)=>{setimageUrlCafezinho(e.target.value);}}/>
            <p/>
            <label>Descrição</label>
            <input class="inputDescricao" placeholder="Descrição" value={descricaoCafezinho} onChange={(e)=>{setdescricaoCafezinho(e.target.value);}}/>
            <p/>
            <label>Link de Vídeo dos Cafezinhos</label>
            <input class="inputVideo" placeholder="Video sobre esse cafezinho" value={videoUrlCafezinho} onChange={(e)=>{setvideoUrlCafezinho(e.target.value);}}/>
            <button type="submit" class="botao">Salvar</button>
          </form>
        )}

        <img src= {"./linhacafe.png"} className="linha" alt="logo" />
        
        <h2 class="h2Lista">Nossa Lista de Cafezinhos</h2>
        <ul>
          {
            Cafezinhos.map((f, index)=>(
              <li key={index} >
                <h3>{f.nome}</h3>
                <div class="imagens">
                  <img src={f.imageUrl} alt={f.nome}/>
                  <p><span> {f.descricao}</span></p>
                  <iframe width="420" height="315"
                    src={f.videoUrl}>
                  </iframe>                  
                </div>                
                <br/>
                
                <button onClick={()=> deletar(index)} class="botaoDel">Deletar</button>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}