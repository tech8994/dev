import React, { useState, lazy, Suspense } from "react";
import "./scss/index.scss";
import { DuvetCover } from "./duvetcover";
import { Summary } from "./summary";
import { Extra } from "./extras";
import { FirstPillowcases } from "./firstpillowcases";
import { FittedSheet } from "./fittedsheet";
import { SecondSheet } from "./secondsheet";
import { SecondPillowcases } from "./secondpillowcases";
import { CoverLet } from "./coverlet";
import { Pillowshams } from "./pillowshams";
import { Bolster } from "./bolster";
// import ShowBed  from "./3dmodal/index";
import { Canvas } from "@react-three/fiber";
import { Navbar, Footer } from "../../layout";
import { Loading } from "./3dmodal/loading";

const ShowBed = lazy(() => import("./3dmodal/index"));

export const BuildingBed = () => {
  const [bedType, setbedType] = useState("Pillowcases");
  const [colorValue, setColorValue] = useState("");
  const [fittedSheetColor, setFittedSheetColor] = useState("");
  const [secondfittedSheet, setSecondFittedSheet] = useState("");
  const [firstpillowcases, setFirtPillowcases] = useState("");
  const [secondpillowcases, setSecondPillowcases] = useState("");
  const [pillowshams, setPillowShams] = useState("");
  const [coverLet, setCoverLet] = useState("");
  const [bolster, setBolster] = useState("");

  //    const handleChngeValue=(e)=>{
  //       setbedType(e)
  //    }
  console.log(bedType);
  return (
    <>
      <Navbar />

      <div className="building_bed">
        {/* Shoe 3d bed */}
        <div className="threed_bed">
          <Suspense fallback={<Loading />}>
            <Canvas dpr={[1, 2]} style={{ height: "560px" }}>
              <color attach={"background"} args={["#ececec"]} />
              <fog attach="fog" args={["#ececec", 10, 20]} />
              <ShowBed
                colorValue={colorValue}
                fittedSheetColor={fittedSheetColor}
                secondfittedSheet={secondfittedSheet}
                firstpillowcases={firstpillowcases}
                secondpillowcases={secondpillowcases}
                pillowshams={pillowshams}
                coverLet={coverLet}
                bolster={bolster}
              />
            </Canvas>
          </Suspense>

          {/* modal */}
        </div>
        <div className="edit_section">
          <div className="content_edit">
            <h1>Build Your Own Bedding Bundle</h1>
            <div className="edit_col_btn">
              <div className="buttons">
                <ul>
                  <li
                    className={bedType === "Pillowcases" ? "active" : ""}
                    onClick={() => setbedType("Pillowcases")}
                  >
                    Pillowcases
                  </li>
                  <li
                    className={bedType === "Pillowshams" ? "active" : ""}
                    onClick={() => setbedType("Pillowshams")}
                  >
                    Pillow Shams
                  </li>
                  <li
                    className={bedType === "Second Pillowcases" ? "active" : ""}
                    onClick={() => setbedType("Second Pillowcases")}
                  >
                    Second Pillowcases
                  </li>

                  <li
                    className={bedType === "Bolster" ? "active" : ""}
                    onClick={() => setbedType("Bolster")}
                  >
                    Bolster
                  </li>

                  <li
                    className={bedType === "Fitted Sheet" ? "active" : ""}
                    onClick={() => setbedType("Fitted Sheet")}
                  >
                    Fitted Sheet
                  </li>
                  <li
                    className={bedType === "Flat Sheet" ? "active" : ""}
                    onClick={() => setbedType("Flat Sheet")}
                  >
                    Flat Sheet
                  </li>

                  <li
                    className={bedType === "CoverLet" ? "active" : ""}
                    onClick={() => setbedType("CoverLet")}
                  >
                    CoverLet
                  </li>

                  <li
                    className={bedType === "Duvet Cover" ? "active" : ""}
                    onClick={() => setbedType("Duvet Cover")}
                  >
                    Duvet Cover
                  </li>

                  {/* <li
                    className={bedType === "Extras" ? "active" : ""}
                    onClick={() => setbedType("Extras")}
                  >
                    Extras
                  </li> */}
                  <li
                    className={bedType === "Summary" ? "active" : ""}
                    onClick={() => setbedType("Summary")}
                  >
                    Summary
                  </li>
                </ul>
              </div>
              {/* color Themes */}
              <div className="colorTheme">
                {bedType === "Duvet Cover" ? (
                  <DuvetCover
                    setColorValue={setColorValue}
                    setbedType={setbedType}
                  />
                ) : bedType === "Fitted Sheet" ? (
                  <FittedSheet
                    setFittedSheetColor={setFittedSheetColor}
                    setbedType={setbedType}
                  />
                ) : bedType === "Flat Sheet" ? (
                  <SecondSheet
                    setSecondFittedSheet={setSecondFittedSheet}
                    setbedType={setbedType}
                  />
                ) : bedType === "Pillowcases" ? (
                  <FirstPillowcases
                    setFirtPillowcases={setFirtPillowcases}
                    setbedType={setbedType}
                  />
                ) : bedType === "Second Pillowcases" ? (
                  <SecondPillowcases
                    setSecondPillowcases={setSecondPillowcases}
                    setbedType={setbedType}
                  />
                ) : bedType === "Extras" ? (
                  <Extra setbedType={setbedType} />
                ) : bedType === "Summary" ? (
                  <Summary setbedType={setbedType} />
                ) : bedType === "CoverLet" ? (
                  <CoverLet setbedType={setbedType} setCoverLet={setCoverLet} />
                ) : bedType === "Pillowshams" ? (
                  <Pillowshams
                    setbedType={setbedType}
                    setPillowShams={setPillowShams}
                  />
                ) : bedType === "Bolster" ? (
                  <Bolster setbedType={setbedType} setBolster={setBolster} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
