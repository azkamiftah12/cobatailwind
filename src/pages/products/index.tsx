/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Image from "next/image";
import { useState, useEffect, SetStateAction } from "react";

const products = () => {
    const [data, setData] = useState<any[]>([]);
    const api ="http://192.168.1.7:8081/";

    const getDataCake = async () => {
        const response = await axios.get(
          `${api}get-datacake`,
        );
        console.log(response.data.data);
        setData(response.data.data);
      };

    useEffect(() => {
        getDataCake();
      }, []);

      //search
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };
  const handleClear = () => {
    setSearchTerm('');
  };

  // eslint-disable-next-line arrow-body-style
  const filteredData = data
    ? data.filter((items) => {
        return items.nama_cake
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    : [];
  //search end

    return(
        <div className="py-10 px-10">
            <Image width={200} height={200} className="float-right ..." src={"data:image/jpeg;base64,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"} alt={"Sunset in the mountains"}></Image>
            {/* <Image width={150} height={100} className="float-right ..." src={"https://cdn1-production-images-kly.akamaized.net/vgH7hS_f4FkIYlQDQLShK78mwaw=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/816018/original/074811200_1424688838-original-20021-1423863562-6.jpg"} alt={""}></Image>             */}
            <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.</p>
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title"
          className="p-2 border rounded-lg w-full"
        />
        <button
          onClick={handleClear}
          className="mt-1 ml-2 px-4 py-2 bg-gray-200 rounded-md"
        >
          Clear
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            {/* Add more header columns if needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((e) => (
            <tr key={e.id_cake} className="hover:bg-gray-100">
              <td className="border p-2">{e.harga}</td>
              <td className="border p-2">{e.nama_cake}</td>
              {/* Add more data cells based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    )
};
export default products;