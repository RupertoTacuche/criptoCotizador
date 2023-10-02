import styled from '@emotion/styled'

const Resultado1 = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem; 
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block; 
    width: 120px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }

`

const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <Resultado1> 
        <Imagen 
            src = {`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen cripto" />

        <div>
            <Precio>The Price is: <span>{PRICE}</span></Precio>
            <Texto>The highest price of the day: <span>{HIGHDAY}</span></Texto>
            <Texto>The lowest price of the day: <span>{LOWDAY}</span></Texto>
            <Texto>Variation last 24 hours:<span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Variation in money:<span>{CHANGE24HOUR}</span></Texto>
            <Texto>Last update <span>{LASTUPDATE}</span></Texto>     
        </div>
    </Resultado1>
  )
}

export default Resultado
