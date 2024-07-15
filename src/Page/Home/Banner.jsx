import logo from "../../assets/collecti-booksb-imageb2-01.webp";
import img from "../../assets/MAIN-3-IMAGE-3-1024x1024.png";
import img2 from "../../assets/MAIN-3-IMAGE-2.png";

const Banner = () => {
  return (
    <div className="text-center">
      <img className="inline mt-2 p-3" src={logo} alt="" />
      {/* banner */}
      <div className="bg-[#fffee9] mt-4 p-12 border-2 border-[#FD6D00]">
        <h1 className="text-5xl font-extrabold text-[#FD6D00]">
          উদ্যোক্তাদের এই তিনটি বই অবশ্যই পড়া উচিত।
        </h1>
        <h3 className="text-2xl font-bold mt-12">মাত্র ৬৯৫ টাকায়।</h3>
        <img className="inline" src={img} alt="" />
      </div>
      {/* btn */}
      <div className="mt-8">
        <button className="bg-[#FD6D00] text-xl px-12 font-bold py-6 rounded-lg text-white ">
          অর্ডার করতে চাই
        </button>
      </div>
      {/* 2nd banner */}
      <div className="mt-12 border-2 border-[#FD6D00] p-12 max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:flex-1 text-start space-y-4">
            <h1 className="text-2xl font-extrabold text-[#5C5C5C]">P106 | উদ্যোক্তাদের এই তিনটি বই অবশ্যই পড়া উচিত ।</h1>
            <p className="text-[#FD6D00] flex items-center gap-2text-xl font-bold">✅ দ্য গ্রেটেস্ট সেলসম্যান ইন দ্য ওয়ার্ল্ড - অগ ম্যান্ডিনো</p>
            <p className="text-[#FD6D00] flex items-center gap-2text-xl font-bold">✅ বিল্ডিং এই স্টোরি ব্যান্ড - ডোনাল্ড মিলার</p>
            <p className="text-[#FD6D00] flex items-center gap-2text-xl font-bold">✅ মার্কেটিং - ব্রায়ান ট্রেসি</p>
          </div>
          <div className="md:flex-1">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="mt-8">
        <button className="bg-[#FD6D00] text-xl px-12 font-bold py-6 rounded-lg text-white ">
          অর্ডার করতে চাই
        </button>
      </div>
      <div className="mt-8 ">
        <h1 className="text-4xl font-extrabold">মাত্র ৬৯৫ টাকায়।</h1>
        <h3 className="mt-4 text-[#FD6D00] text-2xl font-bold">
          সারাদেশে ক্যাশ অন হোম ডেলিভারি!
        </h3>
      </div>
    </div>
  );
};

export default Banner;
