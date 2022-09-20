import { Https } from './https';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { OrderSession } from "./order-session";
import { exists } from "../utils/rxjs";
import { SessionStorage } from "./session-storage";
import _ from 'lodash';

export namespace Content {
    const _content: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

    export function getContent(): Observable<any> {
        return _content.asObservable().pipe(exists);
    }

    export function initialize(): void {
        OrderSession.getSession().pipe(
            map(({ profile }) => profile.lang),
            distinctUntilChanged()
        ).subscribe(update)
    }

    //*************************************************************************************

    /**
     * Checks session storage for content entry.  If entry does not exist, the content
     * for the requested language is fetched, and set in session storage.
     *
     * @param lang Language code.  ex: EN, ES, IT, DE, FR
     * @private
     */
    async function update(lang: string): Promise<void> {
        const i18n = SessionStorage.get('i18n') || {};
        const content = _.has(i18n, lang)
            ? _.get(i18n, lang)
            : await Https.get(`/i18n/${lang.toLowerCase()}.json`);

        _.set(i18n, lang, content);
        SessionStorage.set('i18n', i18n);

        _content.next(content);
        console.log('Content updated', content);
    }

    initialize();
}