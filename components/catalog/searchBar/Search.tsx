"use client";

import { useEffect, useRef } from "react";

import styles from "./Search.module.scss";
import { useRouter } from "next/navigation";
import { glassSVG } from "@/components/shared/icons/icons";

export default function Search() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const navigator = useRouter();

    function handleClick() {
        const searhString: string | undefined = inputRef.current?.value;
        if (!searhString || searhString.includes("%")) return;
        navigator.push(`/catalog/search/${searhString}`);
    }

    function handleEnterKeyDown(e: KeyboardEvent) {
        if (e.code !== "Enter") return;
        const searhString: string | undefined = inputRef.current?.value;
        if (!searhString || searhString.includes("%")) return;
        navigator.push(`/catalog/search/${searhString}`);
    }

    useEffect(() => {
        document.body.addEventListener("keydown", handleEnterKeyDown);
        return () => document.body.removeEventListener("keydown", handleEnterKeyDown);
    });

    return (
        <div className={styles.searchInput_container}>
            <input
                ref={inputRef}
                className={styles.searchInput}
                type='text'
                placeholder='Поиск по каталогу'
                spellCheck={false}
            />
            <div onClick={handleClick} className={styles.svg_container}>
                {glassSVG}
            </div>
        </div>
    );
}
