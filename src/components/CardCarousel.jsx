export default function CardCarousel({ pic, category, head }) {
    return (
        <>
            <div className=" bg-white rounded-xl relative overflow-hidden m-5 transform transition-all duration-300 hover:opacity-100 group">
                <div className="relative z-0 w-full h-full">
                    <img src={pic} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black opacity-60"></div>

                <div className="absolute z-10 bottom-4 left-4 text-white">
                    <h3 className="font-poppins text-lg py-2">{category}</h3>
                    <h1 className="font-poppins font-bold text-2xl">{head}</h1>
                </div>
            </div>
        </>
    );
}
