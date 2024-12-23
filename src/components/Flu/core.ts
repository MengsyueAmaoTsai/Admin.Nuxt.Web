// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ComponentIdentifier {
	public static newId(length = 8): string {
		if (length > 16) {
			throw new Error("Length must be less than 16");
		}

		if (length <= 8) {
			return `f${Math.random().toString(16).slice(2)}`;
		}

		return `f${Math.random().toString(16).slice(2)}${Math.random()
			.toString(16)
			.slice(2)}`.slice(0, length);
	}
}
