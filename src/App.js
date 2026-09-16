import Greeting from "./components/Greeting";
import Welcome from "./components/Card";
import Card from "./components/Card";

function App() {
  // logic
  // 구조분해할당 - object destructuring
  const animals = ["dog", "cat", "pig"];
  // const first = animals[0]
  // console.log("🚀 ~ App ~ first:", first)
  // const second = animals[1]
  // console.log("🚀 ~ App ~ second:", second)

  const [second, first] = animals;
  console.log("🚀 ~ App ~ first:", first);
  console.log("🚀 ~ App ~ second:", second);

  const todoItem = {
    todo: "React 학습하기",
    isComplete: false,
  };

  const { todo, isComplete } = todoItem;
  console.log("🚀 ~ App ~ isComplete:", isComplete);
  console.log("🚀 ~ App ~ todo:", todo);

  const handleButtonClick = () => {
      console.log("Click!!!")
  }


  // view
  return (
    <div className="App">
      필수 익스텐션
      {/* <Greeting /> */}
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/c/17/138/640/171386405-3454021517067340558.gif?width=300&height=300&quality=80&format=webp&transparent=true"
        }
        itemName={"변하는 이미지"}
        onButtonClick={handleButtonClick}
      />
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/c/17/138/640/171386405-4363396649420740706.jpeg?width=300&height=300&quality=80&format=webp"
        }
        itemName={"하늘색 가디건"}
        onButtonClick={handleButtonClick}
      />
      <Card
        imgUrl={
          "https://cf.product-image.s.zigzag.kr/original/d/2026/9/3/3642_202609031726294504_44907.gif?width=300&height=300&quality=80&format=webp&transparent=true"
        }
        itemName={"뭔지몰랑 에잉"}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
