import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { Card } from "../../components/Card"
import { Menu } from "../../components/Menu"

interface IReqProduto {
  "id": number,
  "nome": string,
  "valor": string,
  "promo": string,
  "id_categoria": number,
  "promoNumber": string,
  "imagemg": string,
  "imagemp": string
}

export const Home = () => {

  const [dataProduto, setDataProduto] = useState<Array<IReqProduto>>([])

  useEffect(() => {

    axios.get('http://localhost:3000/produtos')
      .then((res) => {
        setDataProduto(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>Produtos em destaque:</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Card era aqui */}
          {
            dataProduto.map((produto) => {
              return (
                <Card
                  key={produto.id}
                  id={produto.id}
                  titulo={produto.nome}
                  preco={produto.valor}
                  promocao={produto.promo}
                  img={
                    'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                    +
                    produto.imagemp
                  }
                />
              )
            })
          }

        </div>
      </div>
    </>
  )
}
