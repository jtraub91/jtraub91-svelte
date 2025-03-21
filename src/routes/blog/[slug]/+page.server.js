import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked';

export async function load({ params }) {
	const blogContentPath = "./src/content/blog/";
	const blogFileContentRaw = fs.readFileSync(blogContentPath + `${params.slug}.md`);
	const parsedBlog = matter(blogFileContentRaw);
	
	const content = marked(parsedBlog.content);
	const title = parsedBlog.data.title;
	const date = parsedBlog.data.published;
	const author = parsedBlog.data.author;

	return {
		content,
		title,
		date,
		author,
	};
}

export const prerender = true;