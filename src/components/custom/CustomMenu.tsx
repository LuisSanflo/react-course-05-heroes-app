import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"
import { cn } from "cn";

export const CustomMenu = () => {
    const { pathname } = useLocation();
    const isActive = (path: string) => {
        return path === pathname;
    }


    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}
                        render={<Link to="/">Inicio</Link>}
                    />
                </NavigationMenuItem >

                <NavigationMenuItem>
                    <NavigationMenuLink
                        className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}
                        render={<Link to="/search">Buscar superheroes</Link>}
                    />
                </NavigationMenuItem >
            </NavigationMenuList>
        </NavigationMenu>
    );
};
