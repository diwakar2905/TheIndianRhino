import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function SizeGuidePage() {
  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <FadeIn>
            <h1 className="font-serif text-[40px] mb-8 text-black border-b border-light-gray/40 pb-6">Size Guide</h1>
            
            <p className="font-sans text-dark-gray mb-10 leading-relaxed">
              Our garments are designed with a tailored regular fit. To ensure the best fit, please refer to the measurements below. All measurements are in inches.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-4 px-2 tracking-widest uppercase text-black font-bold">Size</th>
                    <th className="py-4 px-2 tracking-widest uppercase text-black font-bold">Chest</th>
                    <th className="py-4 px-2 tracking-widest uppercase text-black font-bold">Length</th>
                    <th className="py-4 px-2 tracking-widest uppercase text-black font-bold">Shoulder</th>
                  </tr>
                </thead>
                <tbody className="text-dark-gray border-b border-light-gray">
                  <tr className="border-b border-light-gray/40">
                    <td className="py-4 px-2 font-bold text-black border-none">S</td>
                    <td className="py-4 px-2 border-none">38&quot;</td>
                    <td className="py-4 px-2 border-none">27&quot;</td>
                    <td className="py-4 px-2 border-none">17&quot;</td>
                  </tr>
                  <tr className="border-b border-light-gray/40">
                    <td className="py-4 px-2 font-bold text-black">M</td>
                    <td className="py-4 px-2">40&quot;</td>
                    <td className="py-4 px-2">28&quot;</td>
                    <td className="py-4 px-2">17.5&quot;</td>
                  </tr>
                  <tr className="border-b border-light-gray/40">
                    <td className="py-4 px-2 font-bold text-black border-transparent">L</td>
                    <td className="py-4 px-2 text-dark-gray z-10 w-auto">42&quot;</td>
                    <td className="py-4 px-2 mx-auto sm:ml-auto">29&quot;</td>
                    <td className="py-4 px-2">18.5&quot;</td>
                  </tr>
                  <tr className="">
                    <td className="py-4 px-2 font-bold text-black">XL</td>
                    <td className="py-4 px-2">44&quot;</td>
                    <td className="py-4 px-2">30&quot;</td>
                    <td className="py-4 px-2">19.5&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-12 bg-beige p-8">
              <h3 className="font-serif text-xl mb-4 text-black">Need Help?</h3>
              <p className="font-sans text-sm text-dark-gray leading-relaxed">
                If you are between sizes or need further assistance finding your perfect fit, our service team is here to help. Contact us at <a href="mailto:support@indianrhino.in" className="underline hover:text-black">support@indianrhino.in</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
