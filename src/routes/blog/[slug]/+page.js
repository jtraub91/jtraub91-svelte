export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const content = post.default;
	const title = post.metadata.title;
	const date = post.metadata.published;
	const author = post.metadata.author;

	return {
		content,
		title,
		date,
		author,
	};
}