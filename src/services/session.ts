import { Https } from "./https";
import { SESSION } from '../models/api';
import Cookies from 'js-cookie';

export namespace Session {
    const SESSION_COOKIE = 'MPBillingSession';

    /**
     * /GET to session endpoint.  Sets session cookie
     */
    export async function initialize() {
        return await Https.get(SESSION).then((data) => {
            const { id } = data;
            const sessionId = Cookies.get(SESSION_COOKIE);

            if (!sessionId) {
                Cookies.set(SESSION_COOKIE, id, { domain: '.matterport.com', path: '/' })
            }

            return data;
        });
    }
}