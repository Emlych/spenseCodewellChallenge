import React from "react";
import "./main.css";
import hero from "../Assets/Hero Image.png";
import facebook from "../Assets/Facebook Logo.png";
import dribble from "../Assets/Dribbble Logo.png";
import youtube from "../Assets/Youtube Logo.png";
import pinterest from "../Assets/Pinterest Logo.png";
import twitter from "../Assets/Twitter Logo.png";
import reddit from "../Assets/Reddit Logo.png";
import google from "../Assets/Google Logo.png";
import slack from "../Assets/Slack Logo.png";
import phonemockup from "../Assets/Phone Mockup.png";
import editor from "../Assets/Text Editor.png";

function Main() {
  return (
    <div className="main">
      <div className="main__share">
        <div className="main__share--img">
          <img
            src={hero}
            alt="women in a coffee checking her mails with a widget figuring the earnings of April"
          />
        </div>
        <div className="main__share--text">
          <h2>Share your unfiltered thoughts. Get paid.</h2>
          <p>
            Spense is an open platform for individuals to share their unfiltered
            thoughts. Discuss the topics you love, and get paid for doing{" "}
            <span>just</span> that.
          </p>
          <ul>
            <li>Receive 99% off the earnings.</li>
            <li>Get paid via Debit Card, ACH, or PayPal.</li>
            <li>Withdraw your earnings anytime.</li>
          </ul>
          <div className="main__share--start">
            <input type="email" placeholder="john@example.com" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="main__social--mobile">
        <img src={facebook} alt="facebook logo" />
        <img src={dribble} alt="dribble logo" />
        <img src={youtube} alt="You Tube logo" />
      </div>
      <div className="main__social--tablet">
        <img src={facebook} alt="facebook logo" />
        <img src={dribble} alt="dribble logo" />
        <img src={youtube} alt="You Tube logo" />
        <img src={pinterest} alt="Pinterest logo" />
        <img src={twitter} alt="Twitter logo" />
      </div>
      <div className="main__social">
        <img src={facebook} alt="facebook logo" />
        <img src={dribble} alt="dribble logo" />
        <img src={youtube} alt="You Tube logo" />
        <img src={pinterest} alt="Pinterest logo" />
        <img src={twitter} alt="Twitter logo" />
        <img src={reddit} alt="Reddit logo" />
        <img src={google} alt="Google logo" />
        <img src={slack} alt="Slack logo" />
      </div>
      <div className="main__secure">
        <div className="main__secure--text">
          <h2>Secure your money with Escrow.</h2>
          <p>
            Spense uses Escrow to secure all payments. We believe Escrow offers
            the highest level of security for your payments, so you never need
            to worry about scams. <br />
            <a href="https://www.escrow.com/?utm_campaign=124622823&utm_medium=adwords&utm_source=escrow&utm_content=178694865581&gclid=CjwKCAjwqcKFBhAhEiwAfEr7zcSMseeAlvQ5-2ZkW4gPciKQiMySTGiCa_oJrToDlxgwDFL9Ay5CVhoCdr4QAvD_BwE">
              Learn more about Escrow ➝
            </a>
          </p>
        </div>
        <img
          src={phonemockup}
          alt="Screen of phone figuring the Escrow website"
        />
      </div>
      <div className="main__editor">
        <div className="main__editor--text">
          <h2>A text editor like no other.</h2>
          <p>
            Our text editor pulls you into focus mode with its simplistic design
            and usability so you can put out your best writings.
          </p>
          <a href="">Text Editor Live Demo ➝</a>
        </div>
        <img src={editor} alt="editor screen capture with a video miniature" />
      </div>
    </div>
  );
}

export default Main;
