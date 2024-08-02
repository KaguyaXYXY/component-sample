"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react";

function useCopyToClipboard() {
    const [result, setResult] = useState<
        null | { state: 'success' } | { state: 'error'; message: string }
    >(null);

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setResult({ state: 'success' });
        } catch (e: any) {
            setResult({ state: 'error', message: e.message });
            throw e;
        } finally {
            setTimeout(() => {
                setResult(null);
            }, 2000);
        }
    };

    return [copy, result] as const;
}

interface CopyProps {
    text: string;
}


export function Copy({ text }: CopyProps) {

    const [copyToClipboard, copyResult] = useCopyToClipboard();

    const handleClickCopy = () => {
        copyToClipboard(text);
    };

    return (
        <div>
            <Button variant="ghost" size="sm" className="h-6 w-6 px-0 pt-2" onClick={handleClickCopy}>
                <img src="/icons/copy.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="copy" />
                <img src="/icons/copy_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="copy" />
            </Button>
        </div>
    );
}