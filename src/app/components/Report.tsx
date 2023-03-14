"use client";

export default function Report({searchValue}) {

  return (
    <div className="flex pt-10 justify-center pl-5 pr-5">
      <div className="bg-white rounded-lg p-4 mt-4 md:h-[500px] h-[300px]">
        <h2 className="text-lg font-medium mb-2">Todays Report</h2>
        <p className="text-gray-600">{searchValue}</p>
      </div>
    </div>
  );
}
