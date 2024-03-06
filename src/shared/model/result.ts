class Result<TResult = null> {
	constructor(
		public result: TResult,
		public errorMessage: Error | null,
	) {}
}

export { Result };
