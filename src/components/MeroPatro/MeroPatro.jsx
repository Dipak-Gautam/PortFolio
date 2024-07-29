import React from "react";

const MeroPatro = () => {
  return (
    <>
      <div className="  lg:flex lg:w-[1100px] lg:mx-auto">
        <div className="lg:w-[50%]">
          <div className="text-3xl md:text-4xl font-bold my-2 mx-3  text-black">
            MeroPatro
          </div>
          <div className="text-justify font-thin text-xl w-[95%] mx-auto">
            Mero-Patro is a mobile aplication desidned to be used in both
            android and ios. It is developed using React Native and oppers a
            features like 100 years+ of dates , Date conversion From BS to Ad
            and vice versa. It also offers karobar section where you can put
            your expenses and income and keep track of your trades in easy
            features. It is designed to be expandable so many features like
            events and alert system are going to be added in future.
          </div>
          <div className="items-center justify-center flex">
            <img src="meropatro/DownloadGP.png" alt="" className="w-48" />
          </div>
        </div>
        <div></div>
      </div>
      <hr className="hrdivison" />
    </>
  );
};

export default MeroPatro;
