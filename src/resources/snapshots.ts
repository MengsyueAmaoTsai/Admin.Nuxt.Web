import type { CreatedResponse, IHttpRequestHandler } from "./shared";

export type CreateSnapshotRequest = {
	signalSourceId: string;
	time: Date;
	symbol: string;
	barTime: Date;
	lastPrice: number;
};

export type SnapshotResponse = {
	id: string;
	signalSourceId: string;
	time: Date;
	latency: number;
	symbol: string;
	barTime: Date;
	lastPrice: number;
	message: string;
	createdTime: Date;
};

export type SnapshotCreatedResponse = CreatedResponse;
export type SnapshotDetailsResponse = SnapshotResponse;

export interface ISnapshotService {
	listSnapshots(): Promise<SnapshotResponse[]>;
	createSnapshot(
		request: CreateSnapshotRequest,
	): Promise<SnapshotCreatedResponse>;
	getSnapshot(id: string): Promise<SnapshotDetailsResponse>;
}

export class SnapshotService implements ISnapshotService {
	public constructor(private readonly requestHandler: IHttpRequestHandler) {}

	public async listSnapshots(): Promise<SnapshotResponse[]> {
		return await this.requestHandler.invoke<SnapshotResponse[]>(
			"GET",
			"/api/v1/snapshots",
		);
	}

	public async createSnapshot(
		request: CreateSnapshotRequest,
	): Promise<SnapshotCreatedResponse> {
		return this.requestHandler.invoke<SnapshotCreatedResponse>(
			"POST",
			"/api/v1/snapshots",
			request,
		);
	}

	public async getSnapshot(id: string): Promise<SnapshotDetailsResponse> {
		return await this.requestHandler.invoke<SnapshotDetailsResponse>(
			"GET",
			`/api/v1/snapshots/${id}`,
		);
	}
}
