const TravelDocument = () => (
  <div className="w-2/3 avenir">
    <h2 className="font-bold text-xl justify-content flex flex-col items-center mb-5">
      Travel Document Details
    </h2>
    <p>
      To visit Vietnam, you may need a visa. As of 2024, citizens from 24
      countries (e.g., Japan, South Korea, Thailand, Norway) are exempt from
      visas for stays ranging from 14 to 90 days, depending on nationality.
      Check the list{" "}
      <a href="https://vietnam.gov.vn/visa-exemption-68946" target="_blank">
        <span className="font-bold text-pink-400">here</span>
      </a>
      .<br></br>
      <br></br>
      If you're not eligible for an exemption, you can apply for an e-Visa,
      available to citizens of 80 countries (e.g., the United States, China).
      It’s valid for up to 90 days, with a single-entry visa costing $25 or
      multiple-entry for $50. Apply online at{" "}
      <a
        href="https://evisa.xuatnhapcanh.gov.vn/web/guest/trang-chu-ttdt"
        target="_blank"
      >
        <span className="font-bold text-pink-400">eVisa</span>
      </a>{" "}
      or visit a Vietnamese embassy/consulates. E-visa holders can enter through
      42 international gates.
    </p>
    <br></br>
    For more details and application, visit{" "}
    <a href="https://evisa.gov.vn/" target="_blank">
      <span className="font-bold text-pink-400">eVisa instructions</span>
    </a>{" "}
    .
  </div>
);

export default TravelDocument;
