import { ChildrenOnly } from "@/lib/types/general";
import { MainLayout } from "./MainLayout";

export const AuthLayout = ({ children }: ChildrenOnly) => {
  return (
    <MainLayout>
      <section className="min-h-[75vh] grid lg:grid-cols-2 mt-[3.75rem] mb-36">
        <section className="image-section bg-blue-gray w-full h-full"></section>
        <section className="form-section">
          {children}
        </section>
      </section>
    </MainLayout>
  );
};
