import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./styles"

interface IProps {
  "id": number,
  "titulo": string,
  "preco": string,
  "promocao": string,
  "img": string
}

export const Card = (props: IProps) => {
  return (
    <CardBody>
      <img src={props.img} />
      <Title>{props.titulo}</Title>
      <TitlePreco>{props.preco}</TitlePreco>
      <TextPromo>{props.promocao}</TextPromo>
      <Button>
        <TextButton>Detalhes</TextButton>
      </Button>

    </CardBody>
  )
}
