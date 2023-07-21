// const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     const handlePrevPage = () => {
//         const prevPage = currentPage - 1;
//         if (prevPage >= 1) {
//             onPageChange(prevPage);
//         }
//     };

//     const handleNextPage = () => {
//         const nextPage = currentPage + 1;
//         if (nextPage <= totalPages) {
//             onPageChange(nextPage);
//         }
//     };


//     return (
//         <ul className="pagination flex  bg-blue-300">
//             <li className={`page-item border p-2 bg-blue-500 ${currentPage === 1 ? 'disabled' : ''}`}>
//                 <button className="page-link" onClick={handlePrevPage}>
//                     Prev
//                 </button>
//             </li>
//             {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//                 <li
//                     key={page}
//                     className={`page-item border p-2 bg-blue-500 ${page === currentPage ? 'active' : ''}`}
//                     onClick={() => onPageChange(page)}
//                 >
//                     <button className="page-link">{page}</button>
//                 </li>
//             ))}
//             <li className={`page-item border p-2 bg-blue-500 ${currentPage === totalPages ? 'disabled' : ''}`}>
//                 <button className="page-link" onClick={handleNextPage}>
//                     Next
//                 </button>
//             </li>
//         </ul>
//     );
// };

// export default Pagination;
