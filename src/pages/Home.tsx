import { gql, useQuery } from '@apollo/client';

interface Query {
  currency: string;
  rate: string;
}

const Home = () => {
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;
  const { loading, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  return data.rates.map(({ currency, rate }: Query) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};

export default Home;
