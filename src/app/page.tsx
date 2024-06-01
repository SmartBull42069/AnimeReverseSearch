import App from "./components/app";
import Footer from "./components/foot";



export default function Home() {
  return (
    <div className="bg-myColor">
      <main className=" bg-myColor">
        <div className="mt-2 flex flex-col justify-center min-h-screen	flex-1 items-center">
          <App />
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
export const dynamic = "force-dynamic";
