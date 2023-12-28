import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function RootLayout() {
  return (
    <div className="max-w-[300px] md:max-w-[600px] lg:max-w-[1024px] mx-auto">
        <Header />
            <Outlet />
        <Footer />
    </div>
  )
}
