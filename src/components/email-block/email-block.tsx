import { Button } from "@/components/ui/button"
import { Copy } from "@/components/email-block/copy"

interface EmailBlockProps {
    mailTo: string
    mailSubject: string
    content: string
    children: React.ReactNode
}


export function EmailBlock({
    content,//content of the email to be copied(remove this part if no copy is required)
    mailTo,//receiver email address
    mailSubject,//email subject
    children,//content ofthe email
    ...props
}: EmailBlockProps) {
    return (
        <div className="rounded-md border border-slate-500"{...props}>
            <div className="ml-4 flex flex-row justify-items-center space-x-2 pt-2">
                <Button variant="ghost" size="sm" className="h-6 w-6 px-0 pt-2">
                    <img src="/icons/back.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="back" />
                    <img src="/icons/dark_back.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="back" />
                </Button>
                <span className="text-md mt-1 font-bold text-slate-900 dark:text-slate-100">To:</span>
                <span className="text-md mt-1 text-slate-900 dark:text-slate-100">{mailTo}</span>
                <Copy text={mailTo} />
            </div>
            <hr className="mx-4"></hr>
            <div className="ml-4 flex flex-row justify-items-center space-x-2 pt-2">
                <span className="text-md ml-8 mt-1 font-bold text-slate-900 dark:text-slate-100">Subject:&nbsp;</span>
                <span className="text-md mt-1 text-slate-900 dark:text-slate-100">{mailSubject}</span>
                <Copy text={mailSubject} />
            </div>
            <hr className="mb-2 md:mx-4 md:mb-4"></hr>
            <div className="mx-8 flex flex-row justify-items-end ">
                <div className="text-balance">{children}</div>
                <Copy text={content} />
            </div>
            <hr className="mb-2 md:mx-4 md:mb-4 md:mt-2"></hr>
            <div className="xs:mx-2 mx-8 mb-2 flex flex-row justify-between">
                <div className="spacing-x-4 mb-2 flex flex-row rounded-md border border-slate-300">
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/bold.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="bold" />
                        <img src="/icons/bold_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="bold" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/italic.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="italic" />
                        <img src="/icons/italic_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="italic" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/underline.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="underline" />
                        <img src="/icons/underline_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="underline" />
                    </Button>
                    <Button variant="ghost" size="sm" className="mx-2 my-2 h-6 w-6 px-0">
                        <img src="/icons/text-align-left.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="text-align-left" />
                        <img src="/icons/text-align-left_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="text-align-left" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/text-indent.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="text-indent" />
                        <img src="/icons/text-indent_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="text-indent" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/link.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="link" />
                        <img src="/icons/link_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="link" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/image.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="image" />
                        <img src="/icons/image_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="image" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/paperclip.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="paperclip" />
                        <img src="/icons/paperclip_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="paperclip" />
                    </Button>
                </div>
                <div className="spacing-x-4 flex flex-row">
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/trash.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="delete" />
                        <img src="/icons/trash_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="delete" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/dots-three-vertical.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="options" />
                        <img src="/icons/dots-three-vertical_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="options" />
                    </Button>
                    <Button variant="ghost" size="sm" className="m-2 h-6 w-6 px-0">
                        <img src="/icons/paper-plane-right.png" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" alt="send" />
                        <img src="/icons/paper-plane-right_dark.png" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" alt="send" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

