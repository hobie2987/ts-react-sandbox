import { Cart } from "../models/session";
import { useEffect, useState } from "react";
import { OrderSession } from "../namespaces/order-session";
import _ from 'lodash';
import { useConfig } from "./config.hooks";

export const EMPTY_CART: Cart = { items: [] };

export const useSession = () => {
    const [session, setSession] = useState(undefined);
    useEffect(() => {
        OrderSession.getSession().subscribe((session) => {
            setSession(() => session)
        })
    });
    return [session];
};

export const useCart = () => {
    const [session] = useSession();
    const [cart, setCart] = useState(EMPTY_CART);
    useEffect(() => {
        if (session) {
            setCart(() => session.cart)
        }
    }, [session]);
    return [cart];
};

export const useProfile = (prop, defaultVal?) => {
    const [session] = useSession();
    const [value, setValue] = useState(defaultVal || '');

    useEffect(() => {
        if (session) {
            setValue(() => _.get(session.profile, prop));
        }
    }, [session, prop]);

    return [value]
}

export const useLocale = () => {
    const [lang] = useProfile('lang');
    const [i18n] = useConfig('i18n');
    const [locale, setLocale] = useState()
    useEffect(() => {
        setLocale(() => {
            const language = i18n.languages.find(l => l.code === lang);
            return language?.locale
        })
    }, [lang, i18n]);
    return [locale]
}