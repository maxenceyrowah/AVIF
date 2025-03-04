// import { useState, useRef } from "react";

// const SolidaritySupport = () => {
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [supportImage, setSupportImage] = useState(null);
//   const canvasRef = useRef(null);

//   const handleImageUpload = (event: any) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         setUploadedImage(e?.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const generateSupportImage = () => {
//     if (!uploadedImage) return;

//     const canvas: any = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const img = new Image();
//     img.onload = () => {
//       // Dessiner l'image originale
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       // Ajouter le texte de filigrane
//       ctx.font = "bold 48px Arial";
//       ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//       ctx.rotate(-Math.PI / 4);

//       const text = "Je Soutiens";
//       const textWidth = ctx.measureText(text).width;

//       // Répéter le texte sur toute l'image
//       for (let x = -canvas.width; x < canvas.width * 2; x += textWidth + 100) {
//         for (let y = -canvas.height; y < canvas.height * 2; y += 100) {
//           ctx.fillText(text, x, y);
//         }
//       }

//       // Réinitialiser la transformation
//       ctx.setTransform(1, 0, 0, 1, 0, 0);

//       // Convertir le canvas en image
//       setSupportImage(canvas.toDataURL());
//     };
//     img.src = uploadedImage;
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-black mb-4">
//         Montrer Votre Solidarité
//       </h2>

//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           className="block w-full text-sm text-slate-500
//             file:mr-4 file:py-2 file:px-4
//             file:rounded-full file:border-0
//             file:text-sm file:font-semibold
//             file:bg-yellow-400 file:text-black
//             hover:file:bg-yellow-500"
//         />
//       </div>

//       {uploadedImage && (
//         <div className="mb-4">
//           <img
//             src={uploadedImage}
//             alt="Image téléchargée"
//             className="max-w-full h-auto mb-4"
//           />
//           <button
//             onClick={generateSupportImage}
//             className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-4 rounded-full font-semibold"
//           >
//             Générer l'image de soutien
//           </button>
//         </div>
//       )}

//       {supportImage && (
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold text-black mb-2">
//             Image de Soutien
//           </h3>
//           <img
//             src={supportImage}
//             alt="Image avec filigrane"
//             className="max-w-full h-auto"
//           />
//         </div>
//       )}

//       <canvas ref={canvasRef} style={{ display: "none" }} />
//     </div>
//   );
// };

// export default SolidaritySupport;
