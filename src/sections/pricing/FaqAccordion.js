import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

const FaqAccordion = () => {
  return (
    <>
      <FaqBlock>
        <div className="w-100 mt-15 p-10">
          <h2 className="font-size-9 text-dark-cloud mb-0 text-center">
            Frequently asked questions
          </h2>

          <h4 className="font-size-7 text-dark-cloud mb-5 text-center">
            Do you offer revisions?
          </h4>

          <p className="font-size-5 pr-md-10 pr-lg-0 mb-4 text-center">
            We want you to love your content. Our clients rarely use them, but
            we do offer unlimited free revisions that don't count against your
            word count for the month.
          </p>

          <Collapsible trigger="How does it work?">
            <p>
              Submit your content requests, specify your content requirements,
              word counts & any research requests. We will select one of our
              expert writers based on your niche. Once the content is created,
              the article is emailed to you for feedback & revisions.{" "}
            </p>
          </Collapsible>
          <Collapsible trigger="Do you offer any trials or money back guarantees?">
            <p>
              Yes! We are so confident you’ll love our work, we offer a 2000
              word money back guarantee. Cancel before you've received more than
              2000 words, and you will receive a full refund. No quibbles, no
              questions.
            </p>
          </Collapsible>

          <Collapsible trigger="Do you have experience writing for our industry?">
            <p>
              We are a team of expert writers and editors. Our writers have
              written for a wide variety of websites and industries. When you
              sign up, we assign you a writer that is best suited to your niche.{" "}
            </p>
          </Collapsible>

          <Collapsible trigger=" How many blogs do I get in each package?">
            <p>
              It's totally up to you. Most of our clients request articles of
              either 500, 750, 1000, 2000 words each. At the start of the month,
              please send us a list of titles and briefs (if you have them) and
              suggested word counts for each. We then deliver as many articles
              as we can within the number of words.
            </p>
          </Collapsible>

          <Collapsible trigger="Can I cancel at any time? Do I need to sign a contract?">
            <p>
              You can cancel any time, and there is no minimum contract - it's a
              month-to-month subscription. If you sign up for a monthly package,
              and you’re not happy (you will be!), you can cancel at the end of
              the month.
            </p>
          </Collapsible>

          <Collapsible trigger="What is your typical turnaround time?">
            <p>
              Day 1 - 5: Titles provided by the client
              <br />
              Day 6 - 20: We write and edit the content
              <br />
              Day 1 - 5: Day 21 - 28: Any feedback/revisions
              <br />
              Please note, if we do not receive the titles by Day 5, these
              timelines may be delayed. We do ask for your support with this.
            </p>
          </Collapsible>

          <Collapsible trigger=" What about images?">
            <p>
              {" "}
              If you would like images, we can include free stock images and/or
              relevant screenshots in the article.
            </p>
          </Collapsible>
        </div>
      </FaqBlock>
    </>
  );
};

export default FaqAccordion;

const FaqBlock = styled.div`
  background-color: #f4f8f9;
  border-radius: 32px;

  .Collapsible {
    background-color: #fff;
    padding: 20px;
    padding-left: 50px;
    position: relative;
    border-radius: 5px;
    margin-bottom: 15px;
    span {
      color: #1d293f;
      font-size: 21px;
      :after {
        content: "+";
        position: absolute;
        left: 25px;
        top: 18px;
        width: 15px;
        height: 15px;
        background-image: none;
      }
    }
    span.is-open:after {
      content: "-";
      top: 18px;
      background-image: none;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin-top: 10px;
    }
  }
`;
