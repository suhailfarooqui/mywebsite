import React from "react";

export default function Imageprops() {
  const imagearr = [
    {
      url: "https://4.bp.blogspot.com/-357Mcsoqc3s/W9rcMLc5w-I/AAAAAAAAAx8/0g8qHnuR5WAhlK6plCBGsITGkPzPIHp8QCLcBGAs/s1600/Kiara-Advani-Hot-Images-at-Bharat-Ane-Nenu-Movie-Success-Meet%2B%25281%2529.jpg",
      name: "kiara",
      discription: "she is an actress",
    },
    {
      url: "https://celebmafia.com/wp-content/uploads/2018/12/amber-heard-aquaman-premiere-in-la-5.jpg",
      name: "amber heard",
      discription: "shw is from hollywood",
    },
    {
      url: "https://th.bing.com/th/id/OIP.8ZcApJGvwWjbRfXCIBRrrgHaKd?pid=ImgDet&rs=1",
      name: "kendell jenner",
      discription: "she is a model",
    },
    {
      url: "https://1.bp.blogspot.com/-YKr0R08Do3Y/X-yr71rPwBI/AAAAAAAAEVY/6FElh2juSs4PVCIZ0NusjH0mjHNQiKPZgCLcBGAsYHQ/s0/HDgallery%2BPooja%2Bin%2BBlack%2Bdress%2B%25281%2529.jpg",
      name: "pooja hegde",
      discription: "she is south indian",
    },
    {
      url: "https://th.bing.com/th/id/OIP.yNtsdKHkTXmz77CLneyfJAHaLH?pid=ImgDet&rs=1",
      name: "nora fatehi",
      discription: "she is canadian and muslim",
    },
  ];

  return (
    <>
      <div className="row" id="row">
        {imagearr.map((v, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <img src={v.url} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}
