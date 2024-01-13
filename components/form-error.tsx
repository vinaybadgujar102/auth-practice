// this package is automatically installed if selected new york style when project setup
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErroProps {
    message?: string; 
}

export const FormError = ({ message }: FormErroProps) => {
    if (!message) return null
    return (
        <div className=" bg-destructive/15 p-3 flex rounded-md items-center gap-x-2 text-destructive text-sm">
            <ExclamationTriangleIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    )
}