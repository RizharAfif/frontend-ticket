import { Badge } from "@/components/ui/badge"
import type { Genre } from "@/services/genre/genre.type"
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Genre>[] = [
    {
        accessorKey: "name",
        header: "Genre",
        cell: ({ row }) => <Badge>{row.original.name}</Badge>
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const genre = row.original

            return (
                <div>action button</div>
            )
        }
    }
]