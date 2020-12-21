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
    initial: "hide",
    context: {
      filter: defaultFilter,
      open: false,
      text: "",
      handler: () => {},
      push: () => {},
      id: "",
    },
    states: {
      hide: {
        on: {
          SHOW: {
            target: "show",
            actions: ["showDialog"],
          },
          ADD_BRAND: {
            target: "hide",
            actions: ["addBrandToStore"],
          },
          ADD_COLOR: {
            target: "hide",
            actions: ["addColorToStore"],
          },
          ADD_MINYEAR: {
            target: "hide",
            actions: ["addMinYearToStore"],
          },
          ADD_MAXYEAR: {
            target: "hide",
            actions: ["addMaxYearToStore"],
          },
          ADD_MINPRICE: {
            target: "hide",
            actions: ["addMinPriceToStore"],
          },
          ADD_MAXPRICE: {
            target: "hide",
            actions: ["addMaxPriceToStore"],
          },
          ADD_SEARCH_TEXT: {
            target: "hide",
            actions: ["addSearchText"],
          },
          CLEAR_FILTER: {
            target: "hide",
            actions: ["clearFilter"],
          },
          SET_FILTERS: {
            target: "hide",
            actions: ["setAllFilters"],
          },
        },
      },
      show: {
        on: {
          DELETE: {
            target: "hide",
            actions: ["runHandler", "hideDialog", "clearData", "push"],
          },
          CANCEL: {
            target: "hide",
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
      setAllFilters: (ctx, evt) => (ctx.filter = evt.filter),
    },
  },
);
