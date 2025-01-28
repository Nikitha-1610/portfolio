const AimlServices = () => {

  const HorizontalLine = () => {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-2xl mx-auto px-10">
          <hr className="border-[1px] border-gray-300" />
        </div>
      </div>
    );
  };

  return (
    <>
      <HorizontalLine />
      <h1 className="text-glow text-[50px] font-bold text-gray-100 mb-4 flex flex-row mt-9 h-[47px]">
        <h1 className="text-[#fe5d26] underline">AI/ML</h1> Services
      </h1>

      <div className="flex flex-col md:flex-col lg:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-20 ml-6 md:ml-10 mt-12 mb-12 md:mr-20">
        {/* Image on the Left */}
        <img
          src="/assets/images/ai.svg"
          alt="aiml"
          className="w-full max-w-full md:w-full md:max-w-[721px] md:h-[481px] lg:w-[50%] lg:max-w-[721px] lg:h-[481px] md:p-8 object-cover"
        />

        {/* Paragraph on the Right */}
        <p className="text-left text-white font-segoe font-light text-[18px] leading-[26px] md:text-[20px] md:leading-[38px] lg:text-[24px] lg:leading-[38px] max-w-full md:max-w-full px-4 md:px-10 md:p-10 md:mt-auto lg:mt-auto mt-4">
          Our team offers end-to-end AI/ML solutions designed to drive business growth,
          improve efficiency, and deliver exceptional customer experiences. We create custom,
          scalable AI systems to help you stay competitive in today’s fast-evolving market.
        </p>
      </div>

      <div className="relative h-auto lg:w-[1218px] md:w-full flex flex-col items-center bg-[#1E1E1E] text-white py-8 px-6">
        <div className="text-center mb-8">
          <h2 className="max-w-[1026px] text-[#9C9C9C] text-[20px] font-normal leading-[26.6px] md:text-[24px] lg:text-[28px]">
            AI/ML Solutions
          </h2>
          <h1 className="max-w-[1026px] text-[14px] font-xl leading-[36.06px] mt-4 md:text-[22px] lg:text-[30px]">
            Innovation Empowered: Driving Intelligent Solutions for a <br /> Smarter Future.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-full mx-auto">
          {[...Array(4)].map((_, index) => {
            const headings = [
              "Predictive Insights",
              "Automation Excellence",
              "Personalized Experiences",
              "Enhanced Accuracy",
            ];
            const descriptions = [
              "Harness the power of AI to anticipate trends and outcomes, enabling data-driven decision-making with unmatched precision.",
              "Streamline complex processes with AI-powered automation, saving time, reducing costs, and increasing efficiency across operations.",
              "Deliver tailored experiences to your customers with intelligent algorithms that understand and adapt to individual preferences.",
              "Leverage machine learning models to minimize errors and optimize accuracy in critical tasks, ensuring reliable and consistent performance.",
            ];
            const images = [
              "/assets/images/aiml icon1.svg",
              "/assets/images/aiml icon2.svg",
              "/assets/images/aiml icon3.svg",
              "/assets/images/aiml icon4.svg",
            ];

            return (
              <div
                key={index}
                className="group relative w-full max-w-[274.5px] h-auto bg-[#FFFFFF0D] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-0 mx-auto hover:border-2 hover:border-blue-500"
              >
                {/* Icon container */}
                <div className="absolute top-1 left-4 transform transition-transform duration-0 group-hover:scale-50 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px]">
                  <img
                    src={images[index]}
                    alt={`icon-${index + 1}`}
                    className="w-[100px] h-[100px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]"
                  />
                </div>
                <div className="mt-20 group-hover:mt-12"> {/* Reduced margin-top during hover */}
  <h3
  className="text-[16px] font-semibold text-left bg-gradient-to-l from-[#6C63FF66] to-[#6C63FF] text-transparent bg-clip-text transition-all duration-0 ease-in-out group-hover:text-[23px] sm:text-[18px] md:text-[20px] lg:text-[20px]"
  style={{
      textShadow: "0 0 4px rgba(108, 99, 255, 0.5), 0 0 6px rgba(108, 99, 255, 0.3)"
    }}
  >
    {headings[index]}
  </h3>
  <div className="h-[1px] w-20 bg-white mt-6 mb-4"></div>
  <p className="text-gray-300 text-left text-[14.75px] sm:text-[15px] md:text-[16px] lg:text-[14.75px]">
    {descriptions[index]}
  </p>
</div>

              </div>
            );
          })}
        </div>
      </div>

      <h1 className="text-neutral-400 font-segoe text-[24px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal text-center px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10">
        Transformative Power: Harness AI and ML to stay ahead in an ever-evolving digital landscape
      </h1>

      <div className="flex flex-col gap-y-[40px]">
        {/* First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] px-5 md:px-10">
          <img src="/assets/images/AI (1).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
          <img src="/assets/images/AI (2).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] px-5 md:px-10">
          <img src="/assets/images/AI (3).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
          <img src="/assets/images/AI (4).svg" alt="ai" className="w-full sm:w-[500px] h-[332.58px] mx-auto" />
        </div>
      </div>

      <div className="w-full max-w-[1304px] h-auto mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-10">
        <p className="text-neutral-400 font-segoe text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[30px] sm:leading-[35px] md:leading-[40px] lg:leading-[43px] text-center p-4 sm:p-8 md:p-12 lg:p-20">
          We harness the transformative power of Artificial Intelligence (AI) and Machine <span className="text-white">Learning (ML)</span> to help businesses
          stay ahead in an ever-evolving digital landscape. Our AI/ML solutions are designed to <span className="text-white">automate processes</span>,
          enhance decision-making, and unlock hidden opportunities within your data. From predictive analytics to natural
          language processing and computer vision, we tailor our services to solve real-world challenges and <span className="text-white">drive measurable results</span>.
        </p>
      </div>
      <HorizontalLine />
      <img 
  src="/assets/images/aimlrobot.svg" 
  alt="aiml" 
  className="w-full max-w-[831px] h-auto sm:h-[500px] md:h-[685px] mx-auto mt-2" // Reduced top margin
/>

<div className="w-full flex flex-col sm:flex-row items-start justify-start gap-0 mt-0"> {/* Remove gap */}
  <img
    src="/assets/images/aiml2.svg"
    alt="aiml"
    className="w-full max-w-[1015px] h-auto sm:w-[200px] sm:h-[100px] md:w-[300px] md:h-[200px] lg:w-[500px] lg:h-[300px] ml-0 -mt-4"  
  />
</div>

      <HorizontalLine/>
    </>
  );
};

export default AimlServices;
