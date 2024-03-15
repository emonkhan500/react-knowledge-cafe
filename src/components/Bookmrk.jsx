import ShowBookmark from "./ShowBookmark";


const Bookmrk = ({bookmark,readTimes}) => {
    
    
    return (
        <div>
             <div className="border"><h1 className=" px-9 py-2">Spent time on read : <span>{readTimes}</span> min</h1></div>
           <div className="bg-slate-200 p-3 rounded-xl">
           <h1 className="text-2xl mt-4 font-bold">Bookmarked Blogs: {bookmark.length}</h1>
           
           <div className="">
               {
                 bookmark.map(blog=><ShowBookmark show={blog}></ShowBookmark>)
               }
           </div>
           </div>
        </div>
    );
};

export default Bookmrk;