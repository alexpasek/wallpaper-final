import { MississaugaBathroomProjectPage } from "@/components/MississaugaBathroomPage";
import { MRS_OLGA_PROJECT } from "@/data/mississaugaBathroomCluster";

export const metadata = {
  title: MRS_OLGA_PROJECT.metaTitle,
  description: MRS_OLGA_PROJECT.description,
  alternates: { canonical: MRS_OLGA_PROJECT.path },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <MississaugaBathroomProjectPage page={MRS_OLGA_PROJECT} />;
}
