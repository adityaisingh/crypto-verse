import styled from "@emotion/styled";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { CurrencyState } from "../../context/CurrencyContext";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const CarouselStyle = styled("div")({
  dots: "true",
  infinite: "true",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: "false",
});

const CarouselItem = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  margin: "auto",
  flexDirection: "row",
  float: "left",
});

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const { currency, symbol } = CurrencyState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);
  };

  // console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`}>
        <CarouselItem>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />

          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}>
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>

          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </CarouselItem>
      </Link>
    );
  });

  return (
    <>
      <CarouselStyle>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
          items={items}
        />
      </CarouselStyle>
    </>
  );
};
export default Carousel;
