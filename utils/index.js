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
    if (state.context.currentPage) {
      filter.page = state.context.currentPage;
    }

    router.push({
      pathname: "/search",
      query: filter,
    });
    window.scrollTo(0, 0);
  };

  const changeHandler = (e, filter) => {
    send({
      type: `ADD_${filter.toUpperCase()}`,
      [filter]: e.target.value,
    });
    send({
      type: "SET_CURRENT_PAGE",
      currentPage: 1,
    });
    fetchData();
  };
  return {
    changeHandler,
    fetchData,
  };
};
