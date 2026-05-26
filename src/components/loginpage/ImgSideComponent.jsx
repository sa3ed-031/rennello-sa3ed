import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function ImgSideComponent() {
  return (
    <div className="img-side sm:px-0 md:h-[stretch] md:w-1/2 md:py-0 max-lg:max-w-lg w-full h-full flex flex-col gap-4 p-4 pt-0 duration-300 transition-all">
      <div className="md:h-[stretch] md:rounded-xs max-lg:max-w-lg relative flex items-center justify-center rounded-xl overflow-hidden duration-300 transition-all">
        <img
          className="md:h-full w-full h-35 brightness-45 object-cover"
          src="assets/images/loginpage-footer2.jpg"
        />
        <div className="absolute md:flex hidden lg:w-1/2 w-3/4 flex-col gap-8 text-primary-white-font text-xl">
          <h1 className="text-primary text-4xl font-bold">رنلّو</h1>
          <div className="flex flex-col gap-4">
            <FormatQuoteIcon className="text-primary" fontSize="large" />
            <p className="lg:text-4xl text-2xl">
              {/* رنلّو قام بتوصيل أكثر من 1000 عميل بمحترفين موثوقين في مختلف
              المجالات... */}
              بلشوا بالمشروع يشباب
            </p>
            <div className="flex items-center gap-4">
              <div className="profile w-18 h-18 rounded-full overflow-hidden shrink-0">
                <img src="assets/images/loginpage-testimonial.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h5>محمود الأعوج</h5>
                <p className="text-primary text-sm">عميل منذ 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="md:hidden text-sm text-center text-secondary-font">
        © 2026 رنلّو. خبرة موثوقة تصلك إلى باب منزلك
      </p>
    </div>
  );
}

export default ImgSideComponent;
