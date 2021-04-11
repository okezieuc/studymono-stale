export const dateInWords = (date) => {
	const d = new Date(date)
	return `${d.toLocaleString("en-US", {day: "numeric"})} ${d.toLocaleString("en-US", {month: "long"})} ${d.toLocaleString("en-US", {year: "numeric"})}`
}
