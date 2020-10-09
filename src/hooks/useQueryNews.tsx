import Axios from "axios";
import { useQuery } from "react-query";

export type Result = {
  data: Data[];
  length: number;
  status: string;
};
export type Data = {
  judul: string;
  link: string;
  poster: string;
  tipe: string;
  waktu: string;
};
const _fetch = () => {
  return Axios.request<Result>({
    method: "GET",
    baseURL:
      "https://cors-anywhere.herokuapp.com/http://www.news.developeridn.com/search/",
    url: "?q=omnibus",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};
export default function useQueryNews() {
  return useQuery("news", _fetch);
}
