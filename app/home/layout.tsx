import { Navbar } from "@/components/component/navbar";
import { Footer } from "@/components/component/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
