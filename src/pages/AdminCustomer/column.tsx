import type { User } from "@/services/customer/customer.type"
import type { ColumnDef } from "@tanstack/react-table"
// import ActionColumn from "./ActionColumn"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
]