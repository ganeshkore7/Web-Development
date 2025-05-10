import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(4)
    let r = await fetch("http://localhost:3000/",{method:"POST", body: JSON.stringify({data}),})
    let res = await r.text()

    console.log(data,res)
    // if (data.username!=="shubam"){
    //   setError("myform",{message:"your form is not in good order because credential are invalid"})
    // }
    // if(data.username==="rohan"){
    //   setError("blocked",{message:"the user is blocked"})
    // }
  }


  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: true, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <input placeholder='password' {...register("password", { required: true })} type="password" />
          <input type="submit" value="submit" />
        </form>
      </div>

    </>
  )
}

export default App
