import { Button } from '@/components/ui/button'
import ConfirmDialog from '@/components/ui/confirmDialog'
import { deleteTheater } from '@/services/theater/theater.service'
import { useMutation } from '@tanstack/react-query'
import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useRevalidator } from 'react-router-dom'
import { toast } from 'sonner'

interface ActionColumnProps {
    id: string
}

export default function ActionColumn({ id }: ActionColumnProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const { isPending, mutateAsync } = useMutation({
        mutationFn: () => deleteTheater(id)
    })

    const revalidator = useRevalidator()

    const handleDelete = async () => {
        try {
            await mutateAsync()
            revalidator.revalidate()
            toast.success("Data successfully deleted")
            setIsDialogOpen(false)
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='inline-flex items-center gap-4 p-5'>

            {/* Edit Button */}
            <Button size="sm" variant="secondary" asChild>
                <Link to={`/admin/theaters/edit/${id}`}>
                    <Edit className='w-4 h-4 mr-2' />
                    Edit
                </Link>
            </Button>
            {/* End Edit Button */}

            {/* Delete Button */}
            <Button onClick={() => setIsDialogOpen(true)} size="sm" variant="destructive">
                <Trash className='w-4 h-4 mr-2' />
                Delete
            </Button>
            {/* End Delete Button */}

            {/* Confirm Modal */}
            <ConfirmDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleDelete}
                title='Delete Genre'
                description='Are you sure you want to delete this? this action cannot be undone'
                isLoading={isPending}
            />
            {/* End Confirm Modal */}
        </div>
    )
}
