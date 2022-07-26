import { useEffect, useState } from "react";
import styled from "styled-components";

import ListItem from "../components/ListItem";
import Title from "../components/Title";
import { Item } from "../types/item";

export default function List() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    places: Item[];
    shippingCost: number;
    tax: number;
  } | null>(null);
  const [basket, setBasket] = useState<Item[]>([]);

  useEffect(() => {
    function fetchData() {
      fetch(
        "https://raw.githubusercontent.com/belifkutlu/tapu.com-case/master/public/data.json"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  function handleOnRemoveBasket(item: Item) {
    const filteredBasket = basket.filter(
      (basketItem) => basketItem.id !== item.id
    );

    setBasket(filteredBasket);
  }

  function calculatePrices() {
    const tax = 0.18;
    const shippingCost = 20;
    const totalPrice = basket.reduce((acc, cur) => acc + cur.price, 0);
    const taxPrice = totalPrice * tax;
    const costPrice = taxPrice + shippingCost;
    return {
      totalPrice,
      costPrice,
      priceWithCost: totalPrice + costPrice,
    };
  }

  const prices = calculatePrices();

  return (
    <Wrapper>
      <Title title="Places" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.places.map((item) => (
            <ListItem
              key={item.id}
              dataItem={item}
              onAddBasket={(item) => setBasket([...basket, item])}
              onRemoveBasket={handleOnRemoveBasket}
              inBasket={basket.some((basketItem) => basketItem.id === item.id)}
            />
          ))}
          {basket.length > 0 && (
            <PriceInfo>
              <PriceTitle>Ürünlerin Toplamı:</PriceTitle>
              <p>Toplam: {prices.totalPrice.toFixed(2)} TL</p>
              <p>Vergi + Kargo Toplami: {prices.costPrice?.toFixed(2)} TL</p>
              <p>Genel Toplam: {prices.priceWithCost.toFixed(2)} TL</p>
            </PriceInfo>
          )}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 120px;
`;

const PriceInfo = styled.div`
  margin-top: 20px;
`;

const PriceTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;
