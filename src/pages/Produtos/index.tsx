import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles"

export const Produtos = () => {

  const { id } = useParams()

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
        <>
          <h1>Produto</h1>
          <Row>
            <Col4>
              <img
                style={{
                  width: '100%'
                }}
                src="https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/monitores/monitor1g.jpg"
              />
            </Col4>
            <Col6>
              <h3>Tv Top da galaxia</h3>
              <p
                style={{
                  textDecoration: 'line-through'
                }}
              >R$ 1.500,00</p>
              <p
                style={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >R$ 1.100,00</p>

              <form>
                <Input
                  type="number"
                  name="quantidade"
                  defaultValue={1}
                  min="1"
                  required
                />

                <Button>
                  <TextButton>
                    Adicionar ao Carrinho
                  </TextButton>
                </Button>
              </form>
            </Col6>
          </Row>
        </>

      </div>
    </>
  )
}
