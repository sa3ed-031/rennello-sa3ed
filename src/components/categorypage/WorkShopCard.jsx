import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/StarBorderOutlined"

export default function WorkShopCard(){

    const workShops = [{
        id:1,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },
    {   
        id:2,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },
    {   
        id:3,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },
    {
        id:4,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },
    {   
        id:5,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },
    {   
        id:6,
        img:'/assets/images/aboutpage-team.jpg',
        category:'كهرباء',
        title:'فريق رنّلّو',
        location:'مصياف',
        description:'متخصصون في أعمال التمديدات الكهربائية السكنية، وتحديث لوحات التوزيع؟، وتركيب أنظمة الإضاءة المنزلية الذكية مع شهادات السلامة.',
        price:'20',
        rating:'5'
    },]

    return(
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {workShops.map((workShop)=>(
                <div key={workShop.id} className=" bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">

                    {/*image section*/}
                    <div className="relative h-52 w-full">
                        <img src={workShop.img} alt={workShop.title} className="w-full rounded-t-2xl h-full aspect-4/5 object-cover"/>
                        <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {workShop.category}
                        </div>
                    </div>

                    {/*content-card section*/}
                    <div className="p-5">
                        <div className="p-5 flex flex-row justify-between">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                {workShop.title}
                            </h3>
                            <div className="text-yellow-500 flex items-center shrink-0">
                                <span className="text-gray-700 text-sm font-bold ml-1">{workShop.rating}</span>
                                <StarIcon />
                            </div>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                            <PlaceIcon />
                            <span>{workShop.location}</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            {workShop.description}
                        </p>

                        {/* price-button section */}
                        <div className="mt-auto pt-4 flex justify-between items-center">
                            <button className="bg-primary text-white px-5 py-2 rounded-lg cursor-pointer text-sm hover:bg-[#4c739a] transition-all">
                                عرض التفاصيل
                            </button>
                            <div>
                                <span className="text-gray-400 block leading-none">تبدأ من</span>
                                <span className="text-lg font-bold text-primary">${workShop.price}/س</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}