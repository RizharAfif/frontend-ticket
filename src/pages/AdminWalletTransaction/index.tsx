import TitleHeading from "@/components/TitleHeading";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
import { useLoaderData } from "react-router-dom";

export default function AdminWalletTransactions() {
	// const transactions = useLoaderData() as Transaction[];

	return (
		<>
			<TitleHeading title="List Wallet Transactions" />
			<div>
				<DataTable columns={columns} data={[]} />
			</div>
		</>
	);
}
