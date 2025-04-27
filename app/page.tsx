import Grid from "@/components/grid";
import NextPrevious from "@/components/next-previous";

export default function Home() {
  return (
    <div className="p-8 md:p-14 md:px-8 flex flex-col space-y-4 w-full min-h-screen">
      <Grid />
      <NextPrevious />
    </div>
  );
}
