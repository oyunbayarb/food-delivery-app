import {Header} from "@/mainComponents/elements";

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen w-screen p-5">
      <Header />
      <div>{children}</div>
    </div>
  );
}
