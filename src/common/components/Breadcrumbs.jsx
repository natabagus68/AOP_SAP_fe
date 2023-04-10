import React from "react";
import { useNavigate } from "react-router-dom";
import { CaretIcon, HomeIcon } from "./icons/index.js";

export const Breadcrumbs = ({ items = [], links = [] }) => {
    const navigate = useNavigate();
    // console.log(links.map(i=>('../')));

    const generateLink = (i, arr) => {
        if (i != arr.length - 1) {
            let linkStr = "";
            for (let j = arr.length - i - 1; j >= 1; j--) {
                linkStr += "../";
            }
            return linkStr;
        }
    };
    return (
        <div className="flex gap-3 text-gray-500 font-body mb-6 items-center">
            <HomeIcon />
            {items.map((item, i, arr) => {
                return (
                    <div key={i} className="flex gap-3 items-center">
                        <CaretIcon className="text-neutral-75" />
                        <div
                            onClick={() =>
                                links[i] && navigate(generateLink(i, arr))
                            }
                            className={`text-gray-700 ${
                                links[i] && "cursor-pointer"
                            }`}
                        >
                            {item}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
