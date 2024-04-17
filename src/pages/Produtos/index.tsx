import { useNavigate, useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"
import { SyntheticEvent, useCallback, useEffect, useState } from "react"
import axios from "axios"
import { ICarrinho } from "../../@types/interfaces"

interface IProduto {
  "id": number,
  "nome": string,
  "valor": string,
  "promo": string,
  "id_categoria": number,
  "promoNumber": string,
  "imagemg": string,
  "imagemp": string
}

export const Produtos = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [produto, setProduto] = useState<IProduto>()

  useEffect(() => {
    axios.get('http://localhost:3000/produtos?id=' + id)
      .then((dados) => {
        setProduto(dados.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  const onSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      quantidade: { value: number }
    }

    if (produto) {
      let qtd = target.quantidade.value

      if (qtd > 0) {
        let objProduto = {
          ...produto,
          quantidade: qtd,
          total: Number(produto.promo) * qtd
        }

        // localStorage
        let lsCarrinho =
          localStorage.getItem('@1pitchau:carrinho')

        let carrinho: Array<ICarrinho> = []

        if (typeof lsCarrinho === 'string') {
          carrinho = JSON.parse(lsCarrinho)
        }

        if (carrinho.length > 0) {

          let igual = false

          carrinho.forEach((produto) => {
            if (produto.id == objProduto.id) {
              igual = true

              let qtd = Number(produto.quantidade) + Number(objProduto.quantidade)
              produto.quantidade = qtd

              produto.total = Number(produto.promo) * qtd
            }
          })

          if (!igual) {
            carrinho.push(objProduto)
          }

          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify(carrinho)
          )

        } else {
          localStorage.setItem(
            '@1pitchau:carrinho',
            JSON.stringify([objProduto])
          )
        }


        navigate('/carrinho')

      }
    }

  }, [produto])

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
          marginTop: 20,
          marginBottom: 40
        }}
      >
        {
          produto ?
            <>
              <h1>Produto</h1>
              <Row>
                <Col4>
                  <img
                    style={{
                      width: '100%'
                    }}
                    src={
                      'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                      +
                      produto.imagemg
                    }
                  />
                </Col4>
                <Col6>
                  <h3>{produto.nome}</h3>
                  <p
                    style={{
                      textDecoration: 'line-through'
                    }}
                  >R$ {produto.valor}</p>
                  <p
                    style={{
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >R$ {produto.promo}</p>

                  <form
                    onSubmit={onSubmit}
                  >
                    <Input
                      type="number"
                      name="quantidade"
                      defaultValue={1}
                      min="1"
                      required
                    />

                    <Button
                      type="submit"
                    >
                      <TextButton>
                        Adicionar ao Carrinho
                      </TextButton>
                    </Button>
                  </form>
                </Col6>
              </Row>
            </>
            :
            <h2>Nenhum produto encontrado!</h2>
        }


      </div>
    </>
  )
}
