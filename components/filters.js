import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  colors, brands, years, prices,
} from "../configs";
import { MainContext } from "../context/mainContext";
import Facet from "./facet";

export default function Filters() {
  const {
    state,
    send,
  } = useContext(MainContext);
  const router = useRouter();

  useEffect(() => {
    if (router.route !== "/") {
      if (
        (!state.context.filter.brand
          && router.query.brand
          && router.query.brand !== state.context.filter.brand)
        || (!state.context.filter.color
        && router.query.color
        && router.query.color !== state.context.filter.color)
        || (!state.context.filter.minYear
        && router.query.minYear
        && router.query.minYear !== state.context.filter.minYear)
        || (!state.context.filter.maxYear
        && router.query.maxYear
        && router.query.maxYear !== state.context.filter.maxYear)
        || (!state.context.filter.minPrice
        && router.query.minPrice
        && router.query.minPrice !== state.context.filter.minPrice)
        || (!state.context.filter.maxPrice
        && router.query.maxPrice
        && router.query.maxPrice !== state.context.filter.maxPrice)
        || (!state.context.filter.searchText
        && router.query.searchText
        && router.query.searchText !== state.context.filter.searchText)
        || (!state.context.filter.currentPage
        && router.query.page
        && router.query.page !== state.context.filter.currentPage)
      ) {
        send({
          type: "SET_FILTERS",
          filter: {
            brand: router.query.brand,
            color: router.query.color,
            minYear: router.query.minYear,
            maxYear: router.query.maxYear,
            minPrice: router.query.minPrice,
            maxPrice: router.query.maxPrice,
            searchText: router.query.searchText,
          },
          currentPage: router.query.page,
        });
      }
    }
  }, []);

  useEffect(() => {
    if (router.route === "/") {
      send({ type: "CLEAR_FILTER" });
    }
    send({ type: "SET_CURRENT_PAGE", currentPage: router.query.page });
  }, []);

  return (
    <div style={{
      padding: "2rem",
      width: "100%",
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gridTemplateRows: "auto",
    }}
    >
      <Facet data={brands} name="brand" />
      <Facet data={colors} name="color" />
      <Facet data={years} name="minYear" />
      <Facet data={years} name="maxYear" />
      <Facet data={prices} name="minPrice" />
      <Facet data={prices} name="maxPrice" />
    </div>
  );
}
