import { Machine } from "xstate";

export const carMachine = Machine(
  {
    id: "global",
    initial: "hide",
    context: {
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
  }, {
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
      push: (ctx) => ctx.push(),
    },
  },
);
