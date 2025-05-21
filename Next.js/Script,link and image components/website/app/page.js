import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300" >
      <Image className="mx-auto object-cover" width={700} height={700} src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt=""/>
    </div>
  );
}
