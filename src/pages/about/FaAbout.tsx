import Button from "../../components/Button";
import { persianDigit } from "../../util/persianDigit";

const FaAbout = ({ mode, lang }: { mode: boolean; lang: boolean }) => {
  return (
    <div dir="rtl" className="flex flex-col text-sm font-farsi">
      <div className="w-full flex flex-wrap justify-between ">
        <div className="flex  justify-center items-start flex-col w-full mb-10 lg:mb-0 lg:w-5/12 gap-8 ">
          <h2 className="tracking-[5px] font-farsi text-xl font-bold uppercase  flex w-full ">
            // بیوگرافی
          </h2>
          <p className="text-[#767676] font-medium text-sm leading-8 break-keep flex ">
            سلام! من مبینا دانشور هستم، توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی
            کتابخانه‌های React و Next.js. به ساخت رابط‌های کاربری سریع، به‌روز و
            با کیفیت علاقه دارم و همیشه سعی می‌کنم کدی تمیز، قابل نگهداری و دقیق
            بنویسم. این وب‌سایت، فضاییه برای معرفی نمونه‌کارها و ایجاد ارتباط با
            فرصت‌های حرفه‌ای جدید.
          </p>
          <a href="/img/cv.zip" download="cv.zip">
            <Button text={lang ? "DOWNLOAD CV" : " دانلود رزومه"} mode={mode} />
          </a>
        </div>
        <div className="flex flex-col w-full lg:w-5/12 gap-8">
          <h2 className="tracking-[5px] text-xl font-bold uppercase">
            // اطلاعات شخصی
          </h2>
          <ul className="w-full cursor-default">
            <li className="flex gap-12 leading-9 ">
              <span className="w-3/12 font-medium ">نام:</span>
              <span className="text-[#767676]">مبینا دانشور</span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">آدرس:</span>
              <span className="text-[#767676]">ایران، تهران</span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">تحصیلات:</span>
              <span className="text-[#767676]">دانشگاه سمنان</span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">آخرین مدرک:</span>
              <span className="text-[#767676]">لیسانس علوم کامپیوتر</span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">جیمیل:</span>
              <span className="text-[#767676] relative group transition-all duration-500">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mobinadanshvar@gmail.com"
                  target="_blank"
                >
                  mobinadanshvar@gmail.com
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full   transition-all duration-500"></span>
              </span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">موبایل:</span>
              <span className="text-[#767676] relative group transition-all duration-500">
                <a href="tel:+989912050316">{persianDigit("09912050316")}</a>
                <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-black group-hover:w-full transition-all duration-500"></span>
              </span>
            </li>
            <li className="flex gap-12 leading-9">
              <span className="w-3/12 font-medium ">دورکاری:</span>
              <span className="text-[#767676]">در دسترس</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaAbout;
