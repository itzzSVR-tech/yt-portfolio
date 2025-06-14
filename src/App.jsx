import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoaded && (
                <LoadingScreen onComplete={() => setIsLoaded(true)} />
            )}{" "}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } bg-black text-gray-100`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
};

export default App;
