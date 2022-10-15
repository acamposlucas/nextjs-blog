import { parseISO, format } from "date-fns";

interface IDate {
	dateString: string;
}

export default function Date({ dateString }: IDate) {
	const date = parseISO(dateString);

	return (
		<time className="text-xs text-gray-500" dateTime={dateString}>
			{format(date, "LLLL d, yyyy")}
		</time>
	);
}
