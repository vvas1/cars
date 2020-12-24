import { useRouter } from "next/router";

export function checkExistInFilter(state, item) {
  if (typeof item === "string" || typeof item === "number") {
    return !!state.context.filter[item];
  }
}

export function getFilterItem(state, item) {
  if (typeof item === "string" || typeof item === "number") {
    return state.context.filter[item];
  }
}

export const helper = (state = {}, send) => {
  const router = useRouter();
  const fetchData = () => {
    send({
      type: "SET_LOADING",
      loading: true,
    });
    const filter = {};
    if (checkExistInFilter(state, "minYear")) {
      filter.minYear = getFilterItem(state, "minYear");
    }
    if (checkExistInFilter(state, "maxYear")) {
      filter.maxYear = getFilterItem(state, "maxYear");
    }
    if (checkExistInFilter(state, "minPrice")) {
      filter.minPrice = getFilterItem(state, "minPrice");
    }
    if (checkExistInFilter(state, "maxPrice")) {
      filter.maxPrice = getFilterItem(state, "maxPrice");
    }
    if (checkExistInFilter(state, "brand")) {
      filter.brand = getFilterItem(state, "brand");
    }
    if (checkExistInFilter(state, "color")) {
      filter.color = getFilterItem(state, "color");
    }
    if (checkExistInFilter(state, "searchText")) {
      filter.searchText = getFilterItem(state, "searchText");
    }

    router.push({
      pathname: "/search",
      query: filter,
    });
  };

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
