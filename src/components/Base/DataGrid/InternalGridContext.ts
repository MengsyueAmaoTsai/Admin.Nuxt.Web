export class InternalGridContext<TItem> {
	public getNextRowId(): number {
		throw new Error("Method not implemented.");
	}
	public getNextCellId(): number {
		throw new Error("Method not implemented.");
	}
	private resetRowIndexes(start: number) {
		throw new Error("Method not implemented.");
	}
	private register(row: object) {
		throw new Error("Method not implemented.");
	}
	private unregister(row: object) {
		throw new Error("Method not implemented.");
	}
}
