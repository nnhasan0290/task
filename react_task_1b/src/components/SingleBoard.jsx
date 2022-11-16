const SingleBoard = () => {
  return (
    <div className="flex justify-between items-center border border-gray-500 container mx-auto my-2 p-2 rounded-md">
      <div className="flex justify-around gap-2 items-center">
        <span>01</span>
        <div>
          <img src="../../public/imgs/Rectangle 1534.png" alt="" />
        </div>
        <p className="max-w-[300px]">
          Rune raises $100,000 for marketing through NFT butterflies sale
        </p>
        <div className="flex items-center gap-2">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="../../public/imgs/Rectangle 1534.png"
            alt=""
          />
          <span className="text-[#DBFD51]">meta_world98</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span>254</span>
        <svg
          className="fill-[#9BFF00] w-[12px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </div>
    </div>
  );
};

export default SingleBoard;
