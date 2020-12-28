import { useRouter } from "next/router";

export const helper = (state = {}, send) => {
  const router = useRouter();
  const fetchData = () => {
    send({
      type: "SET_LOADING",
      loading: true,
    });
    const filter = {};
    if (state.context.filter.minYear) {
      filter.minYear = state.context.filter.minYear;
    }
    if (state.context.filter.maxYear) {
      filter.maxYear = state.context.filter.maxYear;
    }
    if (state.context.filter.minPrice) {
      filter.minPrice = state.context.filter.minPrice;
    }
    if (state.context.filter.maxPrice) {
      filter.maxPrice = state.context.filter.maxPrice;
    }
    if (state.context.filter.brand) {
      filter.brand = state.context.filter.brand;
    }
    if (state.context.filter.color) {
      filter.color = state.context.filter.color;
    }
    if (state.context.filter.searchText) {
      filter.searchText = state.context.filter.searchText;
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
