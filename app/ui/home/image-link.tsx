// export default function ImageLink() {
//   return (
//     <Link
//       className="hover:bg-slate-50 "
//       href={`/categories/${subcategory.id}`}
//       key={subcategory.id}
//     >
//       <div className=" relative w-full h-40 bg-slate-100">
//         <Image
//           className="rounded-lg "
//           src={subcategory.imageUrl}
//           alt={subcategory.name}
//           fill
//           priority
//           style={{
//             objectFit: 'cover',
//             objectPosition: 'center',
//           }}
//           sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
//         ></Image>
//       </div>
//       <p className="py-3 text-slate-800">{subcategory.name}</p>
//     </Link>
//   );
// }
