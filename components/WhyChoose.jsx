import Image from "next/image";
import fingerprint from "@/public/fingerprint.png";
import facialRecognition from "@/public/facial-recognition.png";
import calendarCheck from "@/public/calendar-check.png";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#343742]">
          Why Choose <span className="text-[#3c83d3]">wowidenti?</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="flex items-start bg-[#f2f5fe] p-6 rounded-xl shadow gap-8">
            <Image src={facialRecognition} alt="" width={70} />
            <div className="text-start">
              <h3 className="font-semibold text-lg text-[#343742]">
                Facial Recognition
              </h3>
              <p className="text-gray-600 mt-2">
                Accurate biometric facial recognition for seamlessness.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-[#f2f5fe] p-6 rounded-xl shadow gap-8">
            <Image src={fingerprint} alt="" width={70} />
            <div className="text-start">
              <h3 className="font-semibold text-lg text-[#343742]">
                Fingerprint Scanning
              </h3>
              <p className="text-gray-600 mt-2">
                Use fingerprint authentication for quick and secure attendance.
              </p>
            </div>
          </div>

          <div className="flex items-start bg-[#f2f5fe] p-6 rounded-xl shadow gap-8">
            <Image src={calendarCheck} alt="" width={60} height={40} />
            <div className="text-start">
              <h3 className="font-semibold text-lg text-[#343742]">
                Attendance Management
              </h3>
              <p className="text-gray-600 mt-2">
                Easily track attendance for events, exams and classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
