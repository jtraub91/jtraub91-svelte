import fs from 'fs';
import path from 'path';


export async function load({ params }){
  const blogDir = path.resolve('src/routes/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  let posts = [];
  for (let i = 0; i < files.length; i++){
    let post = await import(`./${files[i]}`);
    let content = post.default.keys;
    let title = post.metadata.title;
    let date = post.metadata.published;
    let author = post.metadata.author; 

    posts.push({
      content,
      title,
      date,
      author,
    })
  }
  return {posts};
}




