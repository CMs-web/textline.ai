import { useEffect, useRef } from "react";
import { useFetchedData } from "../store";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons8-simplified-ai.svg";

function ResponsePage() {
  const data = useFetchedData((state) => state.data);
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    data.length===0&&navigate("/")
    sectionRef.current.scrollTo({ top: sectionRef.current.scrollHeight,behavior:"smooth" });
  },[])
  return (
    <section ref={sectionRef} className="h-[68vh] xl:h-[72.5vh] mb-6 px-5 md:px-12 lg:px-32 xl:px-52 py-10  text-justify overflow-auto">
      {data?.map((item, i) => {
        let formattedAnswer = item.answer.replace(/\*\*/g, "<br />");
        formattedAnswer = formattedAnswer.replace(
          /(<br \/>)([^<]+?):/g,
          (match, p1, p2) => {
            return `${p1}<span class="font-semibold">${p2.trim()}</span>:`;
          }
        );
        return (
          <div key={i}>
            <div className="flex items-center gap-5 font-bold mt-5">
              <h1 className="custom bg-purple-200 h-fit w-fit pb-2 pt-2 px-2 rounded-full font-medium">
                SG
              </h1>
              <p>{item.question}</p>
            </div>
            <div className="flex gap-5 font-semibold mb-5 mt-2">
              <img
                src={logo}
                className=" h-fit w-[38px] rounded-full font-medium"
              />
              <p
                className="answer_transition font-medium"
                dangerouslySetInnerHTML={{ __html: formattedAnswer }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ResponsePage;
