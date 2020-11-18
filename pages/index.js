import MainLayout from "../components/main-layout";
import Filters from "../components/filters";
import {useState} from "react";

export default function Home({cars}) {
 const [filteredBrands,setFilteredBrands] = useState(cars)
  return (
<MainLayout>
  <Filters />
</MainLayout>
  )
}
