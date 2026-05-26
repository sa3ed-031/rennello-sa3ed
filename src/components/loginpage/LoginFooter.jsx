function LoginFooter() {
  return (
    <footer className="md:flex hidden fixed bottom-0 right-0 left-0 w-full h-16 p-4 items-center justify-between bg-primary-white-font">
      <span className="font-semibold text-primary-black-font">رنلّو</span>
      <div className="flex items-center gap-2 text-secondary-font">
        {["سياسة الخصوصية", "شروط الخدمة", "اتصل بنا"].map((item) => (
          <span key={item} className="cursor-pointer hover:text-[#4c739a]">
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm text-secondary-font">
        © 2026 رنلّو للخدمات الاحترافية. جميع الحقوق محفوظة
      </p>
    </footer>
  );
}

export default LoginFooter;
