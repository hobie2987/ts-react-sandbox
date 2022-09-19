import { useEffect, useState } from "react";
import { Content } from "../namespaces/content";

export const useContent = (): any => {
    const [content, setContent] = useState({});

    useEffect(() => {
        Content.getContent().subscribe((c) => {
            setContent(() => c)
        })
    });

    return [content];
};