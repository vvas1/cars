import { Machine } from "xstate";

export const carMachine = Machine(
  {
    id: "global",
    initial: "hide",
    context: {
      filter: {
        brand: [],
        color: [],
        year: [],
        searchText: "",
      },
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
          ADD_YEAR: {
            target: "hide",
            actions: ["addYearToStore"],
          },
          ADD_SEARCH_TEXT: {
            target: "hide",
            actions: ["addSearchText"],
          },
          CLEAR_FILTER: {
            target: "hide",
            actions: ["clearFilter"],
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
        console.log(ctx);
        ctx.filter = {
          brand: [],
          color: [],
          year: [],
        };
      },
      push: (ctx) => ctx.push(),
      addBrandToStore: (ctx, evt) => (ctx.filter.brand = evt.brand),
      addColorToStore: (ctx, evt) => (ctx.filter.color = evt.color),
      addYearToStore: (ctx, evt) => (ctx.filter.year = evt.year),

      addSearchText: (ctx, evt) => (ctx.filter.searchText = evt.searchText),
    },
  },
);
