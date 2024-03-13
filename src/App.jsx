import Join from "./components/Join";
import Monthly from "./components/Monthly";
import SignUp from "./components/SignUp";
import Faq from "./components/Faq";

const data = {
  title: " Join our community",
  guarantee: "30-day, hassle-free money back guarantee",
  titleText:
    "Gain access to our full library of tutorials along with expert code reviews. \
Perfect for any developers who are serious about honing their skills.",
  subscriptionHeading: " Monthly Subscription",
  price: 29,
  signupText: "Sign Up",
  faqTitle: "Why Us",
  faqReasons: [
    "Tutorials by industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week",
  ],
};

function App() {
  return (
    <article>
      <Join
        title={data.title}
        guarantee={data.guarantee}
        fullText={data.titleText}
      />
      <Monthly
        period={data.subscriptionHeading}
        fee={data.price}
        valueProposition={data.access}
      >
        <SignUp linkText={data.signupText} />
      </Monthly>
      <Faq
        cardTitle={data.faqTitle}
        reasons={data.faqReasons}
      />
    </article>
  );
}

export default App;
