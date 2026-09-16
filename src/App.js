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
  
  const [ second, first ] = animals
  console.log("🚀 ~ App ~ first:", first)
  console.log("🚀 ~ App ~ second:", second)

  const todoItem = {
    todo: "React 학습하기",
    isComplete: false
  }

  const { todo, isComplete}  = todoItem
  console.log("🚀 ~ App ~ isComplete:", isComplete)
  console.log("🚀 ~ App ~ todo:", todo)

  // view
  return (
    <div className="App">
      필수 익스텐션
      <Greeting />
      <Card />
    </div>
  );
}

export default App;
