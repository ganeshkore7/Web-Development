export default async function Page({ params }) {
    console.log(params)
    return (
        <div>
            <h1>About</h1>  
            <h2>About {params.val}</h2>
        </div>
    )
}
