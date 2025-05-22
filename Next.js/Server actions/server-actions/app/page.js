"use client"
import { SubmitAction } from "@/actions/forms";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();

  return (
   <div className="flex flex-col items-center justify-center h-screen">
    <form ref={ref}  action={(e)=>{SubmitAction(e); ref.current.reset();}}>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" className="text-white mx-6" />
      </div>
      <div>
        <label htmlFor="add">Address</label>
        <input name="add" id="add" type="text" className="text-white mx-6" />
      </div>
      <div>
        <button className="border flex">submit</button>
      </div>
    </form>
   </div>
  );
}
