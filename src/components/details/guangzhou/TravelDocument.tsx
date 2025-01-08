const TravelDocument = () => (
  <div className="md:w-1/2 w-2/3 avenir  justify-center items-center flex flex-col">
    <h2 className="font-bold text-xl justify-center flex flex-col items-center mb-5">
      Travel Document Details
    </h2>
    <p>
      Ensure your passport is valid for at least six months before applying for
      a Chinese Type L Tourism Visa. Visa application photo requirements: 48mm x
      33mm, head width 15-22mm, head height 20-33mm, white background, glossy
      paper.
    </p>
    <p>
      Start the COVA Visa application{" "}
      <a
        href="https://cova.mfa.gov.cn/qzCoCommonController.do?show&pageId=index&locale=en_US"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-bold text-pink-400">here</span>
      </a>
      , save your application ID, and fill out job details if desired. Review
      responses carefully, as they cannot be edited later. After submission,
      save and print the PDF, signing and dating the front page.
    </p>
    <br></br>
    <p>Visit your local Chinese Consulate with the following documents:</p>
    <ul className="list-disc pl-5">
      <li>Printed COVA form</li>
      <li>Passport and photocopy of the bio page</li>
      <li>Proof of residence (e.g., driver’s license, utility bill)</li>
      <li>If applicable, photocopy of previous China visa.</li>
    </ul>
    <br></br>
    <p>
      No appointment is needed, but confirm office hours. Pick up your visa
      later.
    </p>
  </div>
);

export default TravelDocument;
