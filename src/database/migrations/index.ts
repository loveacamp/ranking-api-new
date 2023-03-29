import { CreateUsers1679529409226 } from "./1679529409226-CreateUsers";
import { CreateRankings1679863078422 } from "./1679863078422-CreateRankings";
import { CreateStates1679874378683 } from "./1679874378683-CreateStates";
import { CreateCities1679874378684 } from "./1679874378684-CreateCities";
import { CreateChurches1680046294443 } from "./1680046294443-CreateChurches";

export const MIGRATIONS = [
    CreateRankings1679863078422,
    CreateChurches1680046294443,
    CreateStates1679874378683,
    CreateCities1679874378684,
    CreateUsers1679529409226,
];
