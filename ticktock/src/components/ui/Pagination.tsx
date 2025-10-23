export function Pagination() {
  return (
    <div className="flex space-x-1">
      <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Previous</button>
      {[1,2,3,4,5].map(p => <button key={p} className={`px-3 py-1 text-sm border border-gray-300 rounded ${p===1?'bg-blue-600 text-white':''}`}>{p}</button>)}
      <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Next</button>
    </div>
  );
}
export default Pagination;
