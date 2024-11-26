import { createRoot } from "react-dom/client";
import { Polyfill } from "./Polyfill";

createRoot(document.getElementById("root")!).render(<Polyfill />);
