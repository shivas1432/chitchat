import UserDirectory from "@/components/main/userdirectory";
import { CustomScrollArea } from "@/components/ui/custom-scroll-area";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="md:flex max-w-[120rem] mx-auto relative items-start">
        <aside className="hidden md:sticky bg-neutral-900 text-white md:top-0 md:overflow-hidden md:block md:w-[320px] md:max-w-[320px] md:min-w-[320px] h-screen">
          <CustomScrollArea className="h-full flex flex-col w-full gap-4 pr-2">
            <UserDirectory />
          </CustomScrollArea>
        </aside>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </section>
  );
}