'use client'

import {useEffect} from "react";
import {shallow} from "zustand/shallow";

import {Posts, PostSearch} from "@/components";

import {usePosts} from "@/store";

export default function Blog() {
    return (
        <>
            {
                loading ?
                    <h1>Loading...</h1>
                    :
                    <>
                        <h1>Blog page</h1>
                        <PostSearch/>
                        <Posts/>
                    </>
            }
        </>
    );
};
