import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../../src/utils/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <>
    
      <ul className="divide divide-y-2 divide-stone-300">
        {menu.map((menuItem) => (
          <MenuItem pizza={menuItem} key={menuItem.id} />
          
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
