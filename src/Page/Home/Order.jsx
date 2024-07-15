/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { MdOutlineCallToAction, MdOutlineCheckBox } from "react-icons/md";
import logo from "../../assets/MAIN-3-IMAGE-2.png";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <div className="bg-white border rounded mt-12 max-w-screen-lg mx-auto  p-6">
        <p className="flex items-center gap-2">
          <MdOutlineCallToAction className="rotate-180 text-red-500" />
          Returning customer?{" "}
          <span className="text-red-500">Click here to login</span>
        </p>
        <div className="flex flex-col gap-8 md:flex-row justify-between mt-10 ">
          <div className="md:flex-1">
            <h2 className="font-bold">Billing details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">
                    মোবাইল নাম্বার তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ফোন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="ইমেইল এড্ড্রেস লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
              <div className="flex items-center gap-3 text-sm mt-2">
                <input
                  className="accent-red-500"
                  type="checkbox"
                  name=""
                  id=""
                />
                Create an account?
              </div>
            </form>
            <div className="mt-12">
              <h1 className="text-xl font-bold">Your Products</h1>
              <div className="bg-[#f3f3f3]  mt-4 rounded-md">
                <div className="p-2 ">
                  <table className="mt-4 w-full ">
                    <thead>
                      <tr className="flex items-center font-semibold justify-between">
                        <th>Product</th>
                        <div className="flex items-center gap-12">
                          <th>Quantity</th>
                          <th>Price</th>
                        </div>
                      </tr>
                    </thead>
                    <hr />
                    <tbody className="">
                      <tr className="flex mt-3 items-center gap-4 font-semibold justify-between">
                        <td className="text-[12px] flex items-center gap-2">
                          <MdOutlineCheckBox className="text-xl text-red-500" />
                          P106 | উদ্যোক্তা প্যাকেজ (#11272)
                        </td>
                        <td className="border flex items-center gap-3 cursor-pointer">
                          {" "}
                          <p>-</p> <span className="bg-white px-2">1</span>{" "}
                          <p>+</p>
                        </td>
                        <td>৳ 695.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <h2 className="font-bold">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded" src={logo} alt="" />
                <p>P106 | উদ্যোক্তা প্যাকেজ</p>
              </div>
              <div>
                <p>× 1 390.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div>
                <p className="text-end">390 $</p>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name="b"
                    id="background"
                  />
                  <p>ঢাকা সিটির বাহিরে: ৳ 120.00</p>
                </div>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <div className="flex items-center gap-2">
                <input className="accent-red-500" type="radio" name="" id="" />
                <p>ঢাকা সিটির ভিতরে: ৳ 70.00</p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex  text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>390</p>
            </div>
            <div className="bg-[#f4f8fa] p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>Cash on delivery</p>
                <img src="" alt="" />
              </div>
              <p className="p-4 bg-white mt-4 text-sm">
                Pay with cash upon delivery.
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-3 flex items-center justify-center  font-bold text-white rounded-lg bg-[#FF0000] hover:bg-[#b11111]">
                <FaLock />
                Place Order ৳ 765.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
