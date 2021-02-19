export default async function getTable() {
	// "sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc"
	const sortParams = "";
	const data = await fetch(`https://api.airtable.com/v0/appxzaaw7AL7cqbtl/main?${sortParams}`, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
		},
	});
	return await data.json();
}
