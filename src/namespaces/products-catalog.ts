import {BehaviorSubject, Observable} from "rxjs";
import { Https } from "./https";
import { CATALOG } from "../models/api";
import { Catalog } from "../models/catalog";
import { exists } from "../utils/rxjs";

export namespace ProductsCatalog {
    const _catalog: BehaviorSubject<Catalog> = new BehaviorSubject<Catalog>(undefined);

    export function getCatalog(): Observable<Catalog> {
        return _catalog.asObservable().pipe(exists)
    }

    export function initialize(): Promise<any> {
        return refresh();
    }

    //*********************PRIVATE FUNCTIONS*******************************
    function sync(catalog: Catalog): Catalog {
        console.log(`Product catalog update`, catalog);
        _catalog.next(catalog);
        return catalog
    }

    function refresh(): Promise<Catalog> {
        return Https.get(CATALOG).then(sync)
    }

    initialize();
}