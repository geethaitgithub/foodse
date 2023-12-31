const CardShimmer = () => {
  return (
    <div className=" bg-slate-100 basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 shadow animate-pulse">
      <div className="h-[144px] w-[230px] bg-bio mob:w-[130px] mob:h-[81px] p-1 m-1"></div>
      <div className="w-3/5 mt-2.5 h-[15px]  bg-bio "></div>
      <div className="w-4/5 mt-1 h-[15px]  bg-bio"></div>
      <div className="w-full mt-[18px] h-[15px]  bg-bio"></div>
    </div>
  );
}


const Shimmer = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-evenly p-2 m-2" >
        {Array(20)
          .fill("")
          .map((e, index) => (
            <CardShimmer key ={index} />            
          ))}
      </div>
    );
  };
  
  export default Shimmer;