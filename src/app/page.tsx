import Header from "../components/ui/header";
import FormWrapper from "../components/ui/form-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 mx-auto w-full h-full items-center justify-center">
        <FormWrapper />
      </div>
    </main>
  );
}
