import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        }

    ]);

   
    return (
    <div className="overflow-y-scroll no-scrollbar">
        <RouterProvider router={appRouter}/>
    </div>
   ) 
    
}
export default Body;