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

  function calculatePrices() {
    if (!data) return;
    const totalPrice = data?.places.reduce((acc, cur) => acc + cur.price, 0);
    const taxPrice = totalPrice * data.tax;
    const costPrice = taxPrice + data.shippingCost;
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
            <ListItem key={item.id} item={item} />
          ))}
          <PriceInfo>
            <PriceTitle>Ürünlerin Toplamı:</PriceTitle>
            <p>Toplam: {prices?.totalPrice?.toFixed(2)} TL</p>
            <p>Vergi + Kargo Toplami: {prices?.costPrice?.toFixed(2)} TL</p>
            <p>Genel Toplam: {prices?.priceWithCost.toFixed(2)} TL</p>
          </PriceInfo>
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
