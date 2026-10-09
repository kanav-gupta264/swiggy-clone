import { GrocerGridCard } from "../utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="w-[100%] container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}