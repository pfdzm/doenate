import React, { useEffect, useState } from "react";

import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";

import { useDonateContext } from "../utils/GlobalState";
import fetchCharities from "../utils/API";

const Home = () => {
  const [state, dispatch] = useDonateContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.charities.length) {
      setLoading(true);
      fetchCharities().then(data => {
        dispatch({ type: "FETCH_CHARITIES", payload: data });
        setLoading(false);
      });
    }
  }, [state.charities.length, dispatch]);

  return (
    <Layout>
      <Carousel
        loading={loading}
        charity={
          state.charities.length ? state.charities[state.currentCharity] : null
        }
        dispatch={dispatch}
      />
      <div className="px-4 pb-5 flex-col">
        <LinkButton to="/donate" className="mb-5">
          Dönate
        </LinkButton>
        <LinkButton to="/stats">
          <span role="img" aria-label="bar chart">
            📊 &nbsp;
          </span>
          Stats
        </LinkButton>
      </div>
    </Layout>
  );
};

export default Home;
