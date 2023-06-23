import React, { useState } from "react";
import Header from "../Header/Header";
import "./faq.css";
import { Accordion } from "react-bootstrap";
// import FAQimg from "../../assets/images/FAQ.png";
// import FAQimg from "../../assets/images/FAQ Letters.png";FAQ
import FAQimg from "../../assets/images/FAQ LettersV3.png";
const Faq = () => {
  const [imgId, setImgId] = useState(21);

  const rotate = (id) => {
    setImgId(imgId == id ? null : id);
  };
  const faqData = [
    {
      head: "Why is water wet?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Who is joe?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is Quantum Tunneling?",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is water wet?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Who is joe?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is Quantum Tunneling?",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is water wet?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Who is joe?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is Quantum Tunneling?",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is water wet?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Who is joe?",
      des: " Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "Why is Quantum Tunneling?",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
    {
      head: "How to Dafiadf? (Microsoft JhenHei UI 28px)",
      des: "Quantum tunneling is the quantum mechanical phenomenon where a wavefunction can propagate through a potential barrier. (24px, Microsoft jhengHei UI)",
    },
  ];
  return (
    <>
      <div className="faq_section">
        <Header />
        <h1 className="faq_heading">
          <img className="faq_img" src={FAQimg} alt="faq_img"></img>
        </h1>
        <div className="faq_detail">
          <div className="faq_card">
            <div className="faq_t">
              {faqData.map((dataa, key) => {
                return (
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey={key}
                      className="acc_section"
                      onClick={() => rotate(key)}
                    >
                      <Accordion.Header>
                        <div className="que_row">
                          <h4 className="que_text">
                            {key < 9 ? 0 : null}
                            {key + 1}
                          </h4>
                          <h4 className="que_text">{dataa.head} </h4>
                        </div>
                      </Accordion.Header>
                      <hr className="faq_line"></hr>
                      <Accordion.Body>
                        <p className="faq_desc">{dataa.des}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item
                  eventKey="2"
                  className="acc_section"
                  onClick={() => rotate(2)}
                >
                  <Accordion.Header>
                    <div className="que_row">
                      <h4 className="que_text">02</h4>
                      <h4 className="que_text">Who is joe </h4>
                    </div>
                  </Accordion.Header>
                  <hr className="faq_line"></hr>
                  <Accordion.Body>
                    <p className="faq_desc">
                      Quantum tunneling is the quantum mechanical phenomenon
                      where a wavefunction can propagate through a potential
                      barrier. (24px, Microsoft jhengHei UI)
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className="acc_section"
                  onClick={() => rotate(3)}
                >
                  <Accordion.Header>
                    <div className="que_row">
                      <h4 className="que_text">03</h4>
                      <h4 className="que_text">Why is Quantum Tunneling? </h4>
                    </div>
                  </Accordion.Header>
                  <hr className="faq_line"></hr>
                  <Accordion.Body>
                    <p className="faq_desc">
                      Quantum tunneling is the quantum mechanical phenomenon
                      where a wavefunction can propagate through a potential
                      barrier. (24px, Microsoft jhengHei UI)
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  className="acc_section"
                  onClick={() => rotate(4)}
                >
                  <Accordion.Header>
                    <div className="que_row">
                      <h4 className="que_text">04</h4>
                      <h4 className="que_text">
                        How to Dafiadf? (Microsoft JhenHei UI 28px){" "}
                      </h4>
                    </div>
                  </Accordion.Header>
                  <hr className="faq_line"></hr>
                  <Accordion.Body>
                    <p className="faq_desc">
                      Quantum tunneling is the quantum mechanical phenomenon
                      where a wavefunction can propagate through a potential
                      barrier. (24px, Microsoft jhengHei UI)
                    </p>
                  </Accordion.Body>
                </Accordion.Item> */}
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hh">
          <div style={{ fontWeight: "600", fontSize: "28px" }}>The Xhen</div>
          <div style={{ color: "gold", fontWeight: "600", fontSize: "28px" }}>
            FIRST WORD
          </div>
          <div>
            The first words speak of a formless <br /> void in the deepest parts
            of the Asor <br />
            galaxy, which over a millennium <br />
            formed...
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
