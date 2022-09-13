import { useEffect, useState } from "react";
import * as settings from '../assets/config.json';
import _ from 'lodash';

export const useConfig = (prop) => {
    const [value, setValue] = useState(_.get(settings, prop));

    useEffect(() => {
        setValue(() => _.get(settings, prop))
    }, [settings, prop]);

    return [value];
}