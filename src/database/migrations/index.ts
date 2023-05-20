import { CreateUsers1679529409226 } from "./1679529409226-CreateUsers";
import { CreateRankings1679863078422 } from "./1679863078422-CreateRankings";
import { CreateStates1679874378683 } from "./1679874378683-CreateStates";
import { CreateCities1679874378684 } from "./1679874378684-CreateCities";
import { CreateChurches1680046294443 } from "./1680046294443-CreateChurches";
import { CreateBases1680054732329 } from "./1680054732329-CreateBases";
import { CreateAssociationBaseRanking1680133069015 } from "./1680133069015-CreateAssociationBaseRanking";
import { AddColmnRankings1680217556593 } from "./1680217556593-AddColmnRankings";
import { AddColmnStatusInRankings1680563264953 } from "./1680563264953-AddColmnStatusInRankings";
import { AddColumnRecurrenceInRanking1681257054260 } from "./1681257054260-AddColumnRecurrenceInRanking";
import { AlterPrimaryKeyRankings1681257896705 } from "./1681257896705-AlterPrimaryKeyRankings";
import { AddColumnCreatedAtInBasesRankingsTable1683466610209 } from "./1683466610209-AddColumnCreatedAtInBasesRankingsTable";
import { AddColumnDetailingInRankingTable1683490002617 } from "./1683490002617-AddColumnDetailingInRankingTable";

export const MIGRATIONS = [
    CreateRankings1679863078422,
    CreateChurches1680046294443,
    CreateStates1679874378683,
    CreateCities1679874378684,
    CreateUsers1679529409226,
    CreateBases1680054732329,
    CreateAssociationBaseRanking1680133069015,
    AddColmnRankings1680217556593,
    AddColmnStatusInRankings1680563264953,
    AddColumnRecurrenceInRanking1681257054260,
    AlterPrimaryKeyRankings1681257896705,
    AddColumnCreatedAtInBasesRankingsTable1683466610209,
    AddColumnDetailingInRankingTable1683490002617,
];
