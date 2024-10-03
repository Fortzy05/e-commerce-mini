import { ChildrenOnly } from "@/lib/types/general";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }: ChildrenOnly) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen w-full  ">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
