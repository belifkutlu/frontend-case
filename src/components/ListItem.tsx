import styled from "styled-components";
import LocationIcon from "../components/Icons/LocationIcon";
import { Item } from "../types/item";
import StarIcon from "./Icons/StarIcon";

type Props = {
  item: Item;
};

export default function ListItem({ item }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={item.image} alt="image" />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>
        <BottomInfo>
          <Rate>
            <StarIcon />
            {item.rate}
          </Rate>
          <Distance>
            <LocationIcon /> {item.distance / 1000} km
          </Distance>
        </BottomInfo>
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
