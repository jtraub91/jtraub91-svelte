export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	console.log
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}