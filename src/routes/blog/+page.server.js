import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }){
  const blogContentPath = 'src/content/blog/';
  const blogDir = path.resolve(blogContentPath);
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  let posts = [];
  for (let i = 0; i < files.length; i++){
    let fileText = fs.readFileSync(blogContentPath + files[i]);
    let parsedText = matter(fileText);

    let slug = files[i].replace('.md', '');
    let title = parsedText.data.title;
    let date = parsedText.data.published;
    let author = parsedText.data.author; 

    posts.push({
      title,
      date,
      author,
      slug,
    })
  }
  return {posts};
}
