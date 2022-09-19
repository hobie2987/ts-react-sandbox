import {BehaviorSubject, distinctUntilChanged, Observable} from "rxjs";
import { Https } from "./https";
import { CART_ITEMS, SESSION } from "../models/api";
import { Session, Cart } from "../models/session";
import { exists } from "../utils/rxjs";

export namespace OrderSession {
    const _session: BehaviorSubject<Session> = new BehaviorSubject<Session>(undefined);

    export function getSession(): Observable<Session> {
        return _session.asObservable().pipe(
            exists,
            distinctUntilChanged()
        )
    }

    export function initialize(): Promise<Session> {
        return refresh();
    }

    //********************CART FUNCTIONS***********************************
    export async function addItem(sku: string, quantity = 1) : Promise<Cart> {
        return await Https.post(CART_ITEMS, { sku, quantity })
            .then(refresh)
            .then(session => session.cart)
            .catch(() => _session.getValue().cart)
    }

    export async function removeItem(sku: string) : Promise<Cart> {
        return addItem(sku, 0);
    }

    export function clearCart(): Promise<Cart> {
        const cart = { items: [], promos: [], subscription: '', rate_plan: 'MONTHLY' };
        return Https.patch( SESSION, { cart })
            .then(sync)
            .then(session => session.cart)
            .catch(() => _session.getValue().cart)
    }
    //********************PROFILE FUNCTIONS***********************************
    export function setLanguage(lang: string): Promise<Session> {
        return Https.patch( SESSION, { profile: { lang } })
            .then(sync)
            .catch(() => _session.getValue())
    }

    //*********************PRIVATE FUNCTIONS*******************************
    function sync(session: Session): Session {
        _session.next(session);
        console.log('Updating Order', session)
        return session
    }

    function refresh(): Promise<Session> {
        return Https.get(SESSION).then(sync)
    }

    initialize();
}