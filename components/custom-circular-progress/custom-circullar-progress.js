import CircularProgress from "@material-ui/core/CircularProgress";

export default function CustomCircularProgress() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10rem",
        width: "95%",
      }}
    >
      <CircularProgress disableShrink size={50} />
    </div>
  );
}
