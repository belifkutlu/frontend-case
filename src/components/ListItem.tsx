import styled from "styled-components";
import LocationIcon from "../components/Icons/LocationIcon";
import { Item } from "../types/item";
import StarIcon from "./Icons/StarIcon";

type Props = {
  dataItem: Item;
  onAddBasket: (item: Item) => void;
  onRemoveBasket: (item: Item) => void;
  inBasket: boolean;
};

export default function ListItem({
  dataItem,
  onAddBasket,
  onRemoveBasket,
  inBasket,
}: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={dataItem.image} alt="image" />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{dataItem.name}</Title>
        <Description>
          {dataItem.description} - {dataItem.price.toFixed(2)} TL
        </Description>
        <BottomInfo>
          <Rate>
            <StarIcon />
            {dataItem.rate}
          </Rate>
          <Distance>
            <LocationIcon /> {dataItem.distance / 1000} km
          </Distance>
        </BottomInfo>
        <BasketButton
          onClick={() => {
            if (inBasket) {
              onRemoveBasket(dataItem);
            } else {
              onAddBasket(dataItem);
            }
          }}
        >
          Sepete {inBasket ? "Eklendi" : "Ekle"}
        </BasketButton>
      </InfoWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100px;
  margin-right: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  height: 100px;
`;

const InfoWrapper = styled.div``;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

const BottomInfo = styled.div`
  display: flex;
`;

const Rate = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 30px;
  svg {
    margin-right: 5px;
  }
`;

const Distance = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

const BasketButton = styled.button`
  border: none;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  background: none;
  cursor: pointer;
`;
