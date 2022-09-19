import { Https } from './https';
import { BehaviorSubject, Observable } from "rxjs";
import { OrderSession } from "./order-session";
import { exists } from "../utils/rxjs";

export namespace Content {
    const _content: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

    export function getContent(): Observable<any> {
        return _content.asObservable().pipe(exists);
    }

    export function initialize(): void {
        OrderSession.getSession().subscribe((session) => {
            const { profile } = session;
            refresh(profile.lang);
        })
    }

    //*************************************************************************************

    function sync(content: any) {
        _content.next(content);
        console.log('Content updated', content);
        return content;
    }

    function refresh(lang: string): void {
        Https.get(`/i18n/${lang.toLowerCase()}.json`)
            .then(sync)
            .catch((err) => {
                console.error('Content Error', err);
                refresh('EN')
            })
    }

    initialize();
}