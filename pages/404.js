import Link from "next/link";

import { Button } from "@material-ui/core";
import MainLayout from "../components/main-layout";

export default function Error() {
  return (
    <MainLayout>
      <h1>404</h1>
      <h2>Page not found :(</h2>
      <h4>Ooooups! Looks like you got lost.</h4>
      <Link href="/"><Button variant="outlined">Go to main</Button></Link>
    </MainLayout>
  );
}
