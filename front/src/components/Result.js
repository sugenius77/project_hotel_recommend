import React, { useEffect, useRef, useState } from "react";
import { Loading } from "./Loading";

import { useRecoilState, useRecoilValue } from "recoil";
import { searchDataState, searchResultState, testState } from "state/atom";

import { hotelSearch } from "action/HotelSearch";
import HotelCard from "./cards/HotelCard";

const Result = () => {
    const [loading, setLoading] = useState(false);
    const [searchData, setSearchData] = useRecoilState(searchDataState);
    const [results, setResults] = useState([]);
    const testdata = useRecoilValue(testState);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            console.log(searchData);
            // 데이터가 온전히 들어오지 않았을 시
            // setGenres({ ...genres });
            try {
                const locals = searchData.region.join("|");
                console.log(locals);
                const response = await hotelSearch(searchData, locals);
                // console.log(response.data.data);
                setResults(response.data.data);

                console.log("API 가져온 data ===> ", results);
                setLoading(false);
            } catch (e) {
                console.log("axios get Error");
            }
        }
        loadData();
    }, [searchData]);

    // if (loading)
    //     return (
    //         <div className="mt-5">
    //             <Loading />
    //             <p className="text-2xl text-center">Loading...</p>
    //         </div>
    // );
    return (
        <div className=" gird justify-center md:mx-5 mx-32 mt-10 shadow-2xl bg-sub items-center rounded-lg">
            {testdata.map((h, index) => (
                <HotelCard key={index} h={h} />
            ))}
        </div>
    );
};

export default Result;