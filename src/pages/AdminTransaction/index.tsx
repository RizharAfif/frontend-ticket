import TitleHeading from "@/components/TitleHeading";
import { DataTable } from "@/components/ui/data-table";
import { column } from "./column";
import { useLoaderData } from "react-router-dom";
import type { Transaction } from "@/services/customer/customer.type";

export default function AdminTransactions() {
	const transactions = useLoaderData() as Transaction[];

	return (
		<>
			<TitleHeading title="List Transactions" />
			<div>
				<DataTable columns={column} data={transactions} />
			</div>
		</>
	);
}
