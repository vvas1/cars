import { Machine } from "xstate";

const defaultFilter = {
  brand: "",
  color: "",
  minYear: "",
  maxYear: "",
  minPrice: "",
  maxPrice: "",
  searchText: "",
};
export const carMachine = Machine(
  {
    id: "global",
    initial: "initial",
    context: {
      filter: defaultFilter,
      open: false,
      text: "",
      handler: () => {},
      push: () => {},
      id: "",
      currentPage: 1,
    },
    states: {
      initial: {
        on: {
          SHOW: {
            target: "show",
            actions: ["showDialog"],
          },
          ADD_BRAND: {
            target: "initial",
            actions: ["addBrandToStore"],
          },
          ADD_COLOR: {
            target: "initial",
            actions: ["addColorToStore"],
          },
          ADD_MINYEAR: {
            target: "initial",
            actions: ["addMinYearToStore"],
          },
          ADD_MAXYEAR: {
            target: "initial",
            actions: ["addMaxYearToStore"],
          },
          ADD_MINPRICE: {
            target: "initial",
            actions: ["addMinPriceToStore"],
          },
          ADD_MAXPRICE: {
            target: "initial",
            actions: ["addMaxPriceToStore"],
          },
          ADD_SEARCH_TEXT: {
            target: "initial",
            actions: ["addSearchText"],
          },
          CLEAR_FILTER: {
            target: "initial",
            actions: ["clearFilter"],
          },
          SET_FILTERS: {
            target: "initial",
            actions: ["setAllFilters", "setCurrentPage"],
          },
          SET_LOADING: {
            target: "initial",
            actions: ["setLoading"],
          },
          SET_CURRENT_PAGE: {
            target: "initial",
            actions: ["setCurrentPage"],
          },
        },
      },
      show: {
        on: {
          DELETE: {
            target: "initial",
            actions: ["runHandler", "hideDialog", "clearData", "push"],
          },
          CANCEL: {
            target: "initial",
            actions: ["hideDialog", "clearData"],
          },
        },
      },
    },
  },
  {
    actions: {
      showDialog: (ctx, evt) => {
        ctx.text = evt.text;
        ctx.open = true;
        ctx.handler = evt.handler;
        ctx.push = evt.push;
      },
      hideDialog: (ctx) => {
        ctx.open = false;
      },
      runHandler: (ctx) => {
        ctx.handler();
      },
      clearData: (ctx) => {
        ctx.text = "";
        ctx.handler = () => {};
      },
      clearFilter: (ctx) => {
        ctx.filter = {
          brand: "",
          color: "",
          maxPrice: "",
          maxYear: "",
          minPrice: "",
          minYear: "",
          searchText: "",
        };
        ctx.currentPage = 1;
      },
      push: (ctx) => ctx.push(),
      addBrandToStore: (ctx, evt) => (ctx.filter.brand = evt.brand),
      addColorToStore: (ctx, evt) => (ctx.filter.color = evt.color),
      addYearToStore: (ctx, evt) => (ctx.filter.year = evt.year),
      addMinYearToStore: (ctx, evt) => (ctx.filter.minYear = evt.minYear),
      addMaxYearToStore: (ctx, evt) => (ctx.filter.maxYear = evt.maxYear),
      addMinPriceToStore: (ctx, evt) => (ctx.filter.minPrice = evt.minPrice),
      addMaxPriceToStore: (ctx, evt) => (ctx.filter.maxPrice = evt.maxPrice),
      addSearchText: (ctx, evt) => (ctx.filter.searchText = evt.searchText),
      setAllFilters: (ctx, evt) => {
        ctx.filter = evt.filter;
        ctx.currentPage = evt.currentPage;
      },
      setLoading: (ctx, evt) => (ctx.loading = evt.loading),
      setCurrentPage: (ctx, evt) => (ctx.currentPage = evt.currentPage),

    },
  },
);
