import { useCallback } from "react";
import { useRouter } from "next/router";

export const helper = (state = {}, send) => {
  const router = useRouter();
  const fetchData = useCallback(() => {
    const filter = {};
    if (state.context.filter.minYear !== "") {
      filter.minYear = state.context.filter.minYear;
    }
    if (state.context.filter.maxYear !== "") {
      filter.maxYear = state.context.filter.maxYear;
    }
    if (state.context.filter.minPrice !== "") {
      filter.minPrice = state.context.filter.minPrice;
    }
    if (state.context.filter.maxPrice !== "") {
      filter.maxPrice = state.context.filter.maxPrice;
    }

    filter.brand = state.context.filter.brand;
    filter.color = state.context.filter.color;
    filter.searchText = state.context.filter.searchText;

    router.push({
      pathname: "/search",
      query: filter,
    });
  }, [state.context.filter]);

  const changeHandler = (e, filter) => {
    send({
      type: `ADD_${filter.toUpperCase()}`,
      [filter]: e.target.value,
    });
    fetchData();
  };
  return {
    changeHandler,
    fetchData,
  };
};
