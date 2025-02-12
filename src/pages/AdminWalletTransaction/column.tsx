import type { WalletTransaction } from "@/services/customer/customer.type"
import type { ColumnDef } from "@tanstack/react-table"
import { dateFormat, rupiahFormat } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
// import ActionColumn from "./ActionColumn"

export const columns: ColumnDef<WalletTransaction>[] = [
    {
        accessorKey: "createdAt",
        header: "Transaction date",
        cell: ({ row }) => dateFormat(row.original.createdAt),
    },
    {
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => rupiahFormat(row.original.price),
	},
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => <Badge>{row.original.status}</Badge>
    },
    {
        accessorKey: "wallet",
        header: "Customer name",
        cell: ({ row }) => row.original.wallet.user.name,
    }
]