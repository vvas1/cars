import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  colors, brands, years, prices,
} from "../configs";
import { MainContext } from "../context/mainContext";
import Facet from "./facet";

export default function Filters() {
  const { state, send } = useContext(MainContext);
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
          },
        });
      }
    }
  }, []);

  return (
    <div style={{ display: "flex", height: "4rem", alignItems: "center" }}>
      <Facet data={brands} name="brand" />
      <Facet data={colors} name="color" />
      <Facet data={years} name="minYear" />
      <Facet data={years} name="maxYear" />
      <Facet data={prices} name="minPrice" />
      <Facet data={prices} name="maxPrice" />
    </div>
  );
}
