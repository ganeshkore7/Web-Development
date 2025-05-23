export default async function Page({ params }) {
    // throw new Error('This is a client component')
    let languages = ["javascript", "python", "java", "c++", "c#", "ruby", "php", "swift", "go", "kotlin"]
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>My Post: {params.slug} is not a valid language</div>
    }
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
