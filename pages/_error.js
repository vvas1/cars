import { Button } from "@material-ui/core";
import Link from "next/link";
import MainLayout from "../components/main-layout";

export default function Error() {
  return (
    <MainLayout>
      <h1>Error occured</h1>
      <h3>Oops something went wrong:(</h3>
      <Link href="/">
        <Button>to Main</Button>
      </Link>
    </MainLayout>
  );
}
