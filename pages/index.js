import getTable from "../lib/airtable";
import Card from "../components/Card";
import Layout from "../components/layout";
export default function Home({ tables }) {
	return (
		<Layout>
			<div className="flex justify-between">
				<div>
					There is {tables.length} functions in the database
				</div>

				<button className="bg-"></button>
			</div>
			<div className="flex gap-4">
				{tables.map((card, idx) => (
					<Card key={idx} fields={card.fields} />
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const { records: tables } = await getTable();
	return {
		props: {
			tables,
		}, // will be passed to the page component as props
	};
}
