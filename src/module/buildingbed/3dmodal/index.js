import React, { Suspense, useState } from "react";
import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";


// function Model(props) {
//     const { nodes, materials } = useGLTF('/checks.glb')
//     return (
//         <group {...props} dispose={null} scale={2}>
//         <mesh geometry={nodes.Mattres.geometry} material={materials.Mattres}  />
//         <mesh geometry={nodes.Sofa.geometry} material={materials.Sofa}  />
//         <mesh geometry={nodes.Bed_sheet_1.geometry} material={materials.Bed_sheet}    />
//         <mesh geometry={nodes.Uppersheet.geometry} material={materials['Upper Sheet']}  />
//         {/* <mesh geometry={nodes.Cousion_Pink.geometry} material={materials.Cousion_Pink}   /> */}
//         <mesh geometry={nodes.Steel_base.geometry} material={materials['Steel base']}   />
//         <mesh geometry={nodes.Pillows.geometry} material={materials.Pillows} />
//         <mesh geometry={nodes.Pillow.geometry} material={materials.Pillow}  />
//         <mesh geometry={nodes.Wooden_base.geometry} material={materials.Wooden_base} />
//         {/* <mesh geometry={nodes.Cousion_Blue.geometry} material={materials.Cousion_Blue} /> */}
//       </group>
//     )
//   }

const ShowBed = (props) => {
  // const { nodes, materials } = useGLTF("/checks.glb");
  // useLoader(GLTFLoader, '/Poimandres.gltf')
  // const { nodes, materials } = useGLTF('/newmodal.glb')
  // const { nodes, materials } = useGLTF('/Last.glb')
  // const { nodes, materials } = useGLTF('/checking.glb')
  // const { nodes, materials } = useGLTF('/practice.glb')
  const { nodes, materials } = useGLTF('/bedsheet.glb')

  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        zoom={1}

      // polar={[-0.1,Math.PI / 4]}
      >
        <Stage environment={"city"} intensity={0.5} castShadow={false} shadows={false} rotateX={true}>
          <Suspense fallback={null}>
            <ambientLight />
            {/* <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[20,15,10]}/> */}
            {/* <Model   /> */}

      <group {...props} dispose={null}>
      <mesh geometry={nodes.Wooden_Base.geometry} material={materials.Wooden_Base} />
      <mesh geometry={nodes.Base.geometry} material={materials.Base} />
      <mesh geometry={nodes.Base_piller.geometry} material={materials.Base_piller} />
      <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2)']} material-color={props.secondpillowcases} />
      <mesh geometry={nodes.Bed_base.geometry} material={materials.Bed_base} material-color={props.fittedSheetColor} />
      <mesh geometry={nodes.Bed.geometry} material={materials.Bed} material-color={props.fittedSheetColor} />
      <mesh geometry={nodes.Chader_1.geometry} material={materials.Chader_1} material-color={props.secondfittedSheet} />
      <mesh geometry={nodes.Cussion_Pink.geometry} material={materials.Cussion_Pink} material-color={props.pillowshams} />
      <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials.Cussion_Sky_Blue} material-color={props.pillowshams} />
      <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2)']} material-color={props.secondpillowcases} />
      <mesh geometry={nodes.Back_Cussion.geometry} material={materials.Back_Cussion} material-color={props.firstpillowcases} />
      <mesh geometry={nodes.Chader_002.geometry} material={materials.Chader_2} material-color={props.coverLet} />
      <mesh geometry={nodes.Top_Chader.geometry} material={materials.TOP_Chader} material-color={props.colorValue} />
      <mesh geometry={nodes.Gao_Takya.geometry} material={materials.Gao_Takya} material-color={props.bolster} />
    </group>




            {/* <group {...props} dispose={null}>
      <mesh geometry={nodes.Wooden_Base.geometry} material={materials['Wooden_Base.003']} />
      <mesh geometry={nodes.Base.geometry} material={materials['Base.003']} />
      <mesh geometry={nodes.Base_piller.geometry} material={materials['Base_piller.003']} />
      <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2).003']} material-color={props.secondpillowcases} />
      <mesh geometry={nodes.Bed_base.geometry} material={materials['Bed_base.003']}  material-color={props.fittedSheetColor} />
      <mesh geometry={nodes.Bed.geometry} material={materials['Bed.003']} material-color={props.fittedSheetColor}   />
      <mesh geometry={nodes.Chader_1.geometry} material={materials['Chader_1.003']} material-color={props.secondfittedSheet}    />
      <mesh geometry={nodes.Cussion_Pink.geometry} material={materials['Cussion_Pink.003']} material-color={props.pillowshams}  />
      <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials['Cussion_Sky_Blue.003']} material-color={props.pillowshams}  />
      <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2).003']} material-color={props.secondpillowcases} />
      <mesh geometry={nodes.Back_Cussion.geometry} material={materials['Back_Cussion.003']} material-color={props.firstpillowcases}  />
      <mesh geometry={nodes.Top_Chader.geometry} material={materials['TOP_Chader.003']}  material-color={props.colorValue}  />
      <mesh geometry={nodes.Chader_002.geometry} material={materials['Chader_1.004']}  material-color={props.coverLet}/>
    </group> */}

         {/* <group {...props} dispose={null}>
      <mesh geometry={nodes.Wooden_Base.geometry} material={materials['Wooden_Base.003']} />
      <mesh geometry={nodes.Base.geometry} material={materials['Base.003']} />
      <mesh geometry={nodes.Base_piller.geometry} material={materials['Base_piller.003']} />
      <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2).003']}  material-color={props.fittedSheetColor} />
      <mesh geometry={nodes.Bed_base.geometry} material={materials['Bed_base.003']} />
      <mesh geometry={nodes.Bed.geometry} material={materials['Bed.003']} />
      <mesh geometry={nodes.Chader_1.geometry} material={materials['Chader_1.003']} />
      <mesh geometry={nodes.Cussion_Pink.geometry} material={materials['Cussion_Pink.003']} />
      <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials['Cussion_Sky_Blue.003']} />
      <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2).003']} />
      <mesh geometry={nodes.Back_Cussion.geometry} material={materials['Back_Cussion.003']}  />
      <mesh geometry={nodes.Top_Chader.geometry} material={materials['TOP_Chader.003']} />
      <mesh geometry={nodes.Chader_002.geometry} material={materials['Chader_1.003']}  material-color={props.fittedSheetColor} />
    </group> */}




            {/* <group {...props} dispose={null}>
              <mesh geometry={nodes.Wooden_Base.geometry} material={materials.Wooden_Base} position={[-0.81, 0, -0.6]} scale={0.01} />
              <mesh geometry={nodes.Base.geometry} material={materials.Base} position={[-0.81, 0, -0.6]} scale={0.01} />
              <mesh geometry={nodes.Base_piller.geometry} material={materials.Base_piller} position={[-0.81, 0, -0.6]} scale={0.01} />
              <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2)']}  material-color={props.fittedSheetColor} position={[-0.41, -0.06, -1.38]} scale={0.01} />
              <mesh geometry={nodes.Bed_base.geometry} material={materials.Bed_base}  position={[-0.42, 0.23, -0.7]} scale={0.01} />
              <mesh geometry={nodes.Bed.geometry} material={materials.Bed} position={[-0.42, 0.37, -0.71]} scale={0.01} />
              <mesh geometry={nodes.Chader_1.geometry} material={materials.Chader_1} material-color={props.fittedSheetColor}  position={[-0.41, 0.53, -0.51]} scale={0.01} />
              <mesh geometry={nodes.Cussion_Pink.geometry} material={materials.Cussion_Pink} material-color={props.fittedSheetColor} position={[-0.17, 0.57, -0.94]} scale={0.01} />
              <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials.Cussion_Sky_Blue} material-color={props.fittedSheetColor} position={[-0.62, 0.58, -0.95]} scale={0.01} />
              <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2)']} position={[-0.41, -0.04, -1.38]} scale={0.01} />
              <mesh geometry={nodes.Back_Cussion.geometry} material={materials.Back_Cussion} material-color={props.fittedSheetColor} position={[-0.43, 0.57, -1.45]} scale={0.01} />
              <mesh geometry={nodes.Top_Chader.geometry} material={materials.TOP_Chader} material-color={props.fittedSheetColor} position={[-0.44, 0.48, -0.18]} scale={0.01} />
            </group> */}


{/* <group {...props} dispose={null}>
      <mesh geometry={nodes.Wooden_Base.geometry} material={materials['Wooden_Base.003']} position={[-0.81, 0, -0.6]} scale={0.01} />
      <mesh geometry={nodes.Base.geometry} material={materials['Base.003']} position={[-0.81, 0, -0.6]} scale={0.01} />
      <mesh geometry={nodes.Base_piller.geometry} material={materials['Base_piller.003']} position={[-0.81, 0, -0.6]} scale={0.01} />
      <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2).003']} position={[-0.41, -0.06, -1.38]} scale={0.01} />
      <mesh geometry={nodes.Bed_base.geometry} material={materials['Bed_base.003']} position={[-0.42, 0.23, -0.7]} scale={0.01} />
      <mesh geometry={nodes.Bed.geometry} material={materials['Bed.003']} position={[-0.42, 0.37, -0.71]} scale={0.01} />
      <mesh geometry={nodes.Chader_1.geometry} material={materials['Chader_1.003']} position={[-0.41, 0.47, -0.51]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.Cussion_Pink.geometry} material={materials['Cussion_Pink.003']} position={[-0.15, 0.57, -1.13]} scale={0.01} />
      <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials['Cussion_Sky_Blue.003']} position={[-0.69, 0.59, -1.14]} scale={0.01} />
      <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2).003']} position={[-0.41, -0.04, -1.38]} scale={0.01} />
      <mesh geometry={nodes.Back_Cussion.geometry} material={materials['Back_Cussion.003']} position={[-0.43, 0.57, -1.45]} scale={0.01} />
      <mesh geometry={nodes.Top_Chader.geometry} material={materials['TOP_Chader.003']} position={[-0.44, 0.42, -0.08]} scale={0.01} />
      <mesh geometry={nodes.Chader_002.geometry} material={materials['Chader_1.003']} position={[-0.41, 0.48, -0.37]} scale={[0.01, 0, 0.01]} />
    </group> */}


            {/* <group {...props} dispose={null} scale={2}>
              <mesh
                geometry={nodes.Mattres.geometry}
                material={materials.Mattres}
                material-color={props.fittedSheetColor}
              />
              <mesh
                geometry={nodes.Sofa.geometry}
                material={materials.Sofa}
                material-color={props.fittedSheetColor}
              />
              <mesh
                geometry={nodes.Bed_sheet_1.geometry}
                material={materials.Bed_sheet}
                material-color={props.secondfittedSheet}
              />
              <mesh
                geometry={nodes.Uppersheet.geometry}
                material={materials["Upper Sheet"]}
                material-color={props.colorValue}
              />
              <mesh
                geometry={nodes.Steel_base.geometry}
                material={materials["Steel base"]}
              />
              <mesh
                geometry={nodes.Pillows.geometry}
                material={materials.Pillows}
                material-color={props.firstpillowcases}
              />
              <mesh
                geometry={nodes.Pillow.geometry}
                material={materials.Pillow}
                material-color={props.secondpillowcases}
              />
              <mesh
                geometry={nodes.Wooden_base.geometry}
                material={materials.Wooden_base}
              />
            </group> */}
            {/* <mesh geometry={nodes.Cousion_Pink.geometry} material={materials.Cousion_Pink}   /> */}
            {/* <mesh geometry={nodes.Cousion_Blue.geometry} material={materials.Cousion_Blue} /> */}

          </Suspense>
        </Stage>
        {/* <mesh>           
        </mesh> */}
      </PresentationControls>
    </>
  );
};
export default ShowBed;











// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/bedsheet.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Wooden_Base.geometry} material={materials.Wooden_Base} />
//       <mesh geometry={nodes.Base.geometry} material={materials.Base} />
//       <mesh geometry={nodes.Base_piller.geometry} material={materials.Base_piller} />
//       <mesh geometry={nodes['Cussion_1_(2)'].geometry} material={materials['Cussion_1_And_(2)']} />
//       <mesh geometry={nodes.Bed_base.geometry} material={materials.Bed_base} />
//       <mesh geometry={nodes.Bed.geometry} material={materials.Bed} />
//       <mesh geometry={nodes.Chader_1.geometry} material={materials.Chader_1} />
//       <mesh geometry={nodes.Cussion_Pink.geometry} material={materials.Cussion_Pink} />
//       <mesh geometry={nodes.Cussion_Sky_Blue.geometry} material={materials.Cussion_Sky_Blue} />
//       <mesh geometry={nodes.Cussion_1.geometry} material={materials['Cussion_1_And_(2)']} />
//       <mesh geometry={nodes.Back_Cussion.geometry} material={materials.Back_Cussion} />
//       <mesh geometry={nodes.Chader_002.geometry} material={materials.Chader_2} />
//       <mesh geometry={nodes.Top_Chader.geometry} material={materials.TOP_Chader} />
//       <mesh geometry={nodes.Gao_Takya.geometry} material={materials.Gao_Takya} />
//     </group>
//   )
// }

// useGLTF.preload('/bedsheet.glb')