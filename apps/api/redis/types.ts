interface SortOptions {
	column: string;
	direction?: "DESC" | "ASC";
}

export interface SearchOptions {
	query?: string;
	limit?: number;
	sort?: SortOptions;
}
